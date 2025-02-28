import { Routes, Route, Navigate } from "react-router-dom";
import { MapView } from "./features/MapView";
import { PointCloud } from "./features/PointCloud";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/map" replace />} />
      <Route path="/map" element={<MapView />} />
      <Route path="/pointcloud" element={<PointCloud />} />
    </Routes>
  );
};
