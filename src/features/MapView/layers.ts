import TileLayer from "ol/layer/Tile";
import { OSM, XYZ } from "ol/source";

export type layersType = {
  label: string;
  data: TileLayer;
  visible: boolean;
};

export const layers: layersType[] = [
  {
    label: "499",
    data: new TileLayer({
      source: new XYZ({
        url: "/499/{z}/{x}/{y}.webp",
        tileSize: 256,
      }),
    }),
    visible: true,
  },
  {
    label: "500",
    data: new TileLayer({
      source: new XYZ({
        url: "/500/{z}/{x}/{y}.webp",
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
