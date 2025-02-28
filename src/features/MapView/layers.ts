import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { OSM, XYZ } from "ol/source";
import VectorSource from "ol/source/Vector";

export type layersType = {
  label: string;
  data: TileLayer | VectorLayer;
  visible: boolean;
};

export const layers: layersType[] = [
  {
    label: "vector_geojson",
    data: new VectorLayer({
      background: "#1a2b39",
      source: new VectorSource({
        url: "http://localhost:5173/data/6/vectors/2472/2472.geojson",
        format: new GeoJSON(),
      }),
      style: {
        "fill-color": ["string", ["get", "COLOR"], "#eee"],
      },
    }),
    visible: true,
  },
  {
    label: "499",
    data: new TileLayer({
      source: new XYZ({
        url: "http://localhost:5173/data/6/rasters/499/499/{z}/{x}/{y}.webp",
        tileSize: 256,
      }),
    }),
    visible: true,
  },
  {
    label: "500",
    data: new TileLayer({
      source: new XYZ({
        url: "http://localhost:5173/data/6/rasters/500/500/{z}/{x}/{y}.webp",
        tileSize: 256,
      }),
    }),
    visible: true,
  },
  {
    label: "Tło",
    data: new TileLayer({
      source: new OSM(),
    }),
    visible: true,
  },
];
