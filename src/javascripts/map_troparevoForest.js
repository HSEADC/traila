function initMap() {
  const routePoints = [
    { coords: [55.64723916, 37.46332026] },
    { coords: [55.6483, 37.4618] },
    { coords: [55.6495, 37.4602] },
    { coords: [55.6508, 37.459] },
    { coords: [55.6522, 37.4582] },
  ];

  const routeLineCoords = [
    [55.64723916, 37.46332026],
    [55.6476, 37.4628],
    [55.648, 37.4623],
    [55.6483, 37.4618],
    [55.6489, 37.461],
    [55.6495, 37.4602],
    [55.6501, 37.4596],
    [55.6508, 37.459],
    [55.6515, 37.4586],
    [55.6522, 37.4582],
  ];

  const map = new ymaps.Map(
    "map",
    {
      center: [55.6497, 37.4605],
      zoom: 15.5,
      controls: ["zoomControl"],
    },
    {
      suppressMapOpenBlock: true,
      scrollZoom: false,
    },
  );

  map.controls.get("zoomControl").options.set({
    size: "small",
    float: "none",
    position: {
      right: 24,
      top: 24,
    },
  });

  map.behaviors.disable("scrollZoom");

  const routeLine = new ymaps.Polyline(
    routeLineCoords,
    {},
    {
      strokeColor: "#1F5A3C",
      strokeWidth: 5,
      strokeOpacity: 1,
    },
  );

  map.geoObjects.add(routeLine);

  const MarkerLayout = ymaps.templateLayoutFactory.createClass(`
    <div class="A_RouteMapMarker">
      <div class="A_RouteMapMarkerNumber A_Paragraph">
        $[properties.iconContent]
      </div>
    </div>
  `);

  routePoints.forEach((point, index) => {
    const placemark = new ymaps.Placemark(
      point.coords,
      { iconContent: index + 1 },
      {
        iconLayout: MarkerLayout,
        hasBalloon: false,
        hasHint: false,
        interactivityModel: "default#transparent",
        iconOffset: [-20, -40],
        iconShape: {
          type: "Rectangle",
          coordinates: [
            [-20, -40],
            [20, 0],
          ],
        },
      },
    );

    map.geoObjects.add(placemark);
  });

  window.addEventListener("resize", () => {
    map.container.fitToViewport();
  });
}

ymaps.ready(initMap);
