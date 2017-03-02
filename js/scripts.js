var map = L.map('mapContainer').setView([23.788556, 86.420009], 13);


L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);



//set the path to retrive json data
$.getJSON('data/data.geojson', function(jqueryData) {



  L.geoJson(jharkhand).addTo(map);


  L.geoJson(myData, {
    style: function (feature) {
     
      var customColor;

      if(feature.properties.value == 1) {
        customColor = 'red';
        
      }

      if(feature.properties.value == 2) {
        customColor = 'blue';
      }

      if(feature.properties.value == 3) {
        customColor = 'green';
      }

       if(feature.properties.value == 4) {
        customColor = 'yellow';
      }

       if(feature.properties.value == 5) {
        customColor = 'violet';
      }

       if(feature.properties.value == 6) {
        customColor = 'white';
      }

       if(feature.properties.value == 7) {
        customColor = 'orange';
      }

      return {
        color: customColor,
        fillColor: customColor,
        weight: 3,
      };
    },



    onEachFeature: function (feature, layer) {
      layer.on('mouseover', function() {
    
        $('#info h2').text(feature.properties.name)
      })
    }
  }).addTo(map);

  
  L.geoJson(jqueryData, {
    pointToLayer: function (feature, latlng) {
      return L.marker([23.788556, 86.420009]).addTo(map)
    .bindPopup('Study area - Bajran Chowk junction in road 13')
    }
  }).addTo(map);
  
}) 
















