function initMap() {
  const routePoints = [
    { coords: [55.8668, 37.7758] },
    { coords: [55.875, 37.782] },
    { coords: [55.883, 37.81] },
    { coords: [55.8696, 37.838] },
    { coords: [55.8628, 37.7965] },
  ];

  const routeLineCoords = [
    [55.8668, 37.7758],
    [55.871, 37.7785],
    [55.875, 37.782],

    [55.8752, 37.79],
    [55.8772, 37.799],
    [55.883, 37.81],

    [55.881, 37.82],
    [55.876, 37.83],
    [55.8696, 37.838],

    [55.866, 37.828],
    [55.8628, 37.812],
    [55.8628, 37.7965],

    [55.8642, 37.7855],
    [55.8668, 37.7758],
  ];

  const map = new ymaps.Map(
    "map",
    {
      center: [55.8725, 37.8065],
      zoom: 13,
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
