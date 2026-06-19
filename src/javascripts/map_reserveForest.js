function initMap() {
  const routePoints = [
    { coords: [55.8732, 37.7902] },
    { coords: [55.8716, 37.7968] },
    { coords: [55.8705, 37.8034] },
    { coords: [55.87, 37.8115] },
    { coords: [55.8725, 37.7928] },
  ];

  const routeLineCoords = [
    [55.8732, 37.7902],

    [55.8725, 37.792],
    [55.8719, 37.7945],
    [55.8716, 37.7968],

    [55.8711, 37.7995],
    [55.8708, 37.8015],
    [55.8705, 37.8034],

    [55.8703, 37.806],
    [55.8701, 37.809],
    [55.87, 37.8115],

    [55.8708, 37.8085],
    [55.8715, 37.8045],
    [55.872, 37.799],
    [55.8723, 37.795],
    [55.8725, 37.7928],
  ];

  const map = new ymaps.Map(
    "map",
    {
      center: [55.8715, 37.8025],
      zoom: 15,
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
