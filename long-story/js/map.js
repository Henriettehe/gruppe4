//Dette er kart koden til XL story :) 
//Kilde: Kartet er laget med Leaflet.js og er hentet fra https://leafletjs.com/examples/quick-start/
            
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([50.5527238, 6.1237101], 8);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution:' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            var venezia = L.marker([45.4040691, 12.0576851]).addTo(map);
            venezia.bindTooltip("Venezia").openTooltip();
            venezia.bindPopup("<h2>Top3 landene for Plain Air</h2><p>Italia</p>").openPopup();

            var versailles = L.marker([48.8038646, 2.0779952]).addTo(map);
            versailles.bindTooltip("Versailles").openTooltip();
            versailles.bindPopup("<h2>Top3 landene for Plain Air</h2><p>Frankrike</p>").openPopup();

            var newcastle = L.marker([55.0023443, -1.7392438]).addTo(map);
            newcastle.bindTooltip("Newcastle").openTooltip();
            newcastle.bindPopup("<h2>Top3 landene for Plain Air</h2><p>England</p>").openPopup();
});
