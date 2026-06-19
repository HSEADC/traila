function initMap() {
  const routePoints = [
    { coords: [55.7109, 37.5444] },
    { coords: [55.7116, 37.5428] },
    { coords: [55.7108, 37.5414] },
    { coords: [55.7121, 37.5401] },
    { coords: [55.7111, 37.544] },
  ];

  const routeLineCoords = [
    [55.7109, 37.5444],
    [55.7113, 37.5436],
    [55.7116, 37.5428],
    [55.7112, 37.542],
    [55.7108, 37.5414],
    [55.7114, 37.5407],
    [55.7121, 37.5401],
    [55.7118, 37.5413],
    [55.7114, 37.5427],
    [55.7111, 37.544],
  ];

  const map = new ymaps.Map(
    "map",
    {
      center: [55.7114, 37.5422],
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
