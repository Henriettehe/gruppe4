//Dette er kart koden til XL story :) 
            var map = L.map('map').setView([], 12);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution:' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            var  = L.marker([]).addTo(map);
            .bindTooltip("").openTooltip();
            .bindPopup("<h2></h2><p></p>").openPopup();