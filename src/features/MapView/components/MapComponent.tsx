import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/map";
import View from "ol/view";
import { Extent } from "ol/extent";
import { layersMapDataType } from "../MapView";

type MapComponentProps = {
  layers: layersMapDataType[];
};

const MapComponent = ({ layers }: MapComponentProps) => {
  const [contentHeight, setContentHeight] = useState<number>(
    window.innerHeight
  );
  const mapObjectRef = useRef<Map>();
  const viewIsCenteredRef = useRef(false);

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
    if (!mapObjectRef.current) return;
    mapObjectRef.current.updateSize();
  }, [contentHeight]);

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers,
      view: new View({
        zoom: 2,
      }),
    });
    mapObjectRef.current = map;

    const zoomToData = () => {
      fetch("http://localhost:5173/data/6/rasters/500/500/metadata.json")
        .then((res) => res.json())
        .then((metadata) => {
          const extent: Extent = [
            metadata.minX,
            metadata.minY,
            metadata.maxX,
            metadata.maxY,
          ];
          mapObjectRef.current!.getView().fit(extent, { duration: 1000 });
          viewIsCenteredRef.current = true;
        })
        .catch((e) => {
          console.log({ e });
        });
    };

    if (!viewIsCenteredRef.current) {
      zoomToData();
    }

    return () => {
      map.setTarget();
    };
  }, [layers]);

  return (
    <div id="map" style={{ width: "100%", height: `${contentHeight}px` }} />
  );
};

export { MapComponent };
