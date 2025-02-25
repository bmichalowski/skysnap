import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/map";
import View from "ol/view";
import TileLayer from "ol/layer/tile";
import OSM from "ol/source/osm";
import { XYZ } from "ol/source";
import { Extent } from "ol/extent";

const MapView = () => {
  const [contentHeight, setContentHeight] = useState<number>(
    window.innerHeight
  );
  const mapObject = useRef<Map>();

  useEffect(() => {
    const updateHeight = () => {
      const viewHeight = window.innerHeight;
      const header = document.querySelector<HTMLDivElement>(
        "[data-role='header']"
      );
      const navbar = document.querySelector<HTMLDivElement>(
        "[data-role='navbar']"
      );

      const headerHeight = header?.offsetHeight || 0;
      const navbarHeight = navbar?.offsetHeight || 0;
      const mapInternalMarginTop = 10;
      setContentHeight(
        viewHeight - headerHeight - navbarHeight - mapInternalMarginTop
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!mapObject.current) return;
    mapObject.current.updateSize();
  }, [contentHeight]);

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new XYZ({
            url: "/500/{z}/{x}/{y}.webp",
            tileSize: 256,
          }),
          opacity: 0.7,
        }),
        new TileLayer({
          source: new XYZ({
            url: "/499/{z}/{x}/{y}.webp",
            tileSize: 256,
          }),
          opacity: 0.5,
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    mapObject.current = map;

    const zoomToData = () => {
      fetch("data/6/rasters/500/500/metadata.json")
        .then((res) => res.json())
        .then((metadata) => {
          const extent: Extent = [
            metadata.minX,
            metadata.minY,
            metadata.maxX,
            metadata.maxY,
          ];
          mapObject.current!.getView().fit(extent, { duration: 1000 });
          console.log(1, { extent });
        })
        .catch((e) => {
          console.log({ e });
        });
    };

    zoomToData();

    return () => {
      map.setTarget();
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: `${contentHeight}px` }} />
    </>
  );
};

export default MapView;
