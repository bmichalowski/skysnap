import { useEffect } from "react";

const PointCloud = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Potree } = window as any;

    const renderArea = document.getElementById("potree_render_area");
    if (!renderArea) return;

    if (!Potree) return;
    const viewer = new Potree.Viewer(renderArea);
    // @ts-expect-error need change of window type
    window.viewer = viewer;

    viewer.setEDLEnabled(false);
    viewer.setFOV(60);
    viewer.setPointBudget(1_000_000);
    viewer.loadSettingsFromURL();
    viewer.setBackground("skybox");

    viewer.setDescription(
      "Point cloud courtesy of <a target='_blank' href='https://www.sigeom.ch/'>sigeom sa</a>"
    );

    viewer.loadGUI(() => {
      viewer.setLanguage("en");
      document
        .getElementById("menu_tools")
        ?.nextElementSibling?.classList.add("show");
      document
        .getElementById("menu_clipping")
        ?.nextElementSibling?.classList.add("show");
      viewer.toggleSidebar();
    });

    Potree.loadPointCloud(
      "http://localhost:5173/data/6/pointclouds/2473/2473.las",
      "test",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e: { pointcloud: any }) => {
        const scene = viewer.scene;
        const pointcloud = e.pointcloud;

        const material = pointcloud.material;
        material.size = 1;
        material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
        material.shape = Potree.PointShape.SQUARE;

        scene.addPointCloud(pointcloud);
        viewer.fitToScreen();
      }
    );
  }, []);

  return (
    <div>
      <script src="/libs/jquery/jquery-3.1.1.min.js"></script>
      <script src="/libs/spectrum/spectrum.js"></script>
      <script src="/libs/jquery-ui/jquery-ui.min.js"></script>
      <script src="/libs/other/BinaryHeap.js"></script>
      <script src="/libs/tween/tween.min.js"></script>
      <script src="/libs/d3/d3.js"></script>
      <script src="/libs/proj4/proj4.js"></script>
      <script src="/libs/openlayers3/ol.js"></script>
      <script src="/libs/i18next/i18next.js"></script>
      <script src="/libs/jstree/jstree.js"></script>
      <script src="/libs/potree/potree.js"></script>
      <script src="/libs/plasio/js/laslaz.js"></script>
      <div style={{ width: "100%", height: "100%", left: 0, top: 0 }}>
        <div id="potree_render_area"></div>
        <div id="potree_sidebar_container"> </div>
      </div>
    </div>
  );
};

export { PointCloud };
