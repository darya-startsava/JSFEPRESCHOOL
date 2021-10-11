mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyeWEtc3RhcnRzYXZhIiwiYSI6ImNrdW44Ym9oeTByOXUzMnBmNGhpN2pldmwifQ.v43xzWJd6u5pR8uAhpAHsQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [2.3364, 48.86091], // starting position [lng, lat]
    zoom: 15.75 // starting zoom
});

addMarker(map, 2.3364, 48.86091, '#000');
addMarker(map, 2.3333, 48.8602, '#777');
addMarker(map, 2.3397, 48.8607, '#777');
addMarker(map, 2.3330, 48.8619, '#777');
addMarker(map, 2.3365, 48.8625, '#777');


function addMarker(map, lng, lat, color) {
    const marker = new mapboxgl.Marker({ color })
        .setLngLat([lng, lat])
        .addTo(map);
}

map.addControl(new mapboxgl.NavigationControl());