import { css } from "@emotion/react";
import { useCallback, useMemo, useState } from "react";
import { layers as layersData, layersType } from "./layers";
import { MapComponent } from "./components/MapComponent";
import { ButtonsPanel } from "./components/ButtonsPanel";
import { PopupMenu } from "../../components";
import TileLayer from "ol/layer/Tile";

export type layersVisibilityType = Pick<layersType, "label" | "visible">;
export type layersMapDataType = TileLayer;

const MapView = () => {
  const [layers, setLayers] = useState<layersType[]>(layersData);

  const visibilityData: layersVisibilityType[] = useMemo(
    () => layers.map(({ label, visible }) => ({ label, visible })),
    [layers]
  );

  const mapData: layersMapDataType[] = useMemo(
    () => layers.filter((layer) => layer.visible).map(({ data }) => data),
    [layers]
  );

  const handleVisibilityChange = useCallback(
    (label: layersType["label"]) => {
      const updatedLayers: layersType[] = layers.map((layer) =>
        layer.label === label ? { ...layer, visible: !layer.visible } : layer
      );
      setLayers(updatedLayers);
    },
    [layers]
  );

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <MapComponent layers={mapData} />
      <ButtonsPanel>
        <PopupMenu layers={visibilityData} onChange={handleVisibilityChange} />
      </ButtonsPanel>
    </div>
  );
};

export { MapView };
