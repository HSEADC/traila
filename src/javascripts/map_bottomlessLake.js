function initMap() {
  const routePoints = [
    { coords: [55.77960493, 37.43078506] },
    { coords: [55.7807, 37.4292] },
    { coords: [55.7816, 37.4276] },
    { coords: [55.781, 37.4262] },
    { coords: [55.7802, 37.4294] },
  ];

  const map = new ymaps.Map(
    "map",
    {
      center: [55.7807, 37.4287],
      zoom: 17,
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
    routePoints.map((point) => point.coords),
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
      {
        iconContent: index + 1,
      },
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
