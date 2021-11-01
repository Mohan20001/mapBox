
    // mapboxgl.accessToken = 'pk.eyJ1IjoiODc5MDA3MzYxNyIsImEiOiJja3ZnNGM4M3lieGR6MndxNnd3b29yOWR3In0.USZnQAZezuqK7OnHxW0Rbg';
    // var map = new mapboxgl.Map({
    
    //     container: 'map',
    //     style: 'mapbox://styles/8790073617/ckvghf59s3yzi14pf7nyu5j98', // style URL
    //     center: [-79.4512, 43.6568], // starting position
    //     zoom: 15,// starting zoom
    //     pitch: 0,
    //     bearing: 0
    // });
    


    mapboxgl.accessToken = 'pk.eyJ1IjoiODc5MDA3MzYxNyIsImEiOiJja3ZnNGM4M3lieGR6MndxNnd3b29yOWR3In0.USZnQAZezuqK7OnHxW0Rbg';
    const map = new mapboxgl.Map({
    // style: 'mapbox://styles/mapbox/light-v10',
    style: 'mapbox://styles/8790073617/ckvghf59s3yzi14pf7nyu5j98',
    center: [-74.0066, 40.7135],
    zoom: 15.5,
    pitch: 45,
    bearing: -60,
    container: 'map',
    antialias: true
    });
     
    map.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
    (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;
     
    // The 'building' layer in the Mapbox Streets
    // vector tileset contains building height data
    // from OpenStreetMap.
    map.addLayer(
    {
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',
     
    // Use an 'interpolate' expression to
    // add a smooth transition effect to
    // the buildings as the user zooms in.
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );
    });

    map.addControl(new mapboxgl.NavigationControl());



