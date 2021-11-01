mapboxgl.accessToken = 'pk.eyJ1IjoiODc5MDA3MzYxNyIsImEiOiJja3ZnNGM4M3lieGR6MndxNnd3b29yOWR3In0.USZnQAZezuqK7OnHxW0Rbg';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-79.4512, 43.6568], // starting position
        zoom: 9 ,// starting zoom
        pitch: 60,
        bearing: -60
    });
    
    map.addControl(new mapboxgl.NavigationControl());






