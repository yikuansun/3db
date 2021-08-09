async function fetchHTTP(url) {
    var myPromise = new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            resolve(this.responseText);
        };

        xhttp.open("GET", url);
        xhttp.send();
    });

    return await myPromise;
}

fetchHTTP("https://yikuansun.github.io/3db/models.json").then(function(data) {
    var gallery = JSON.parse(data);
    var wrapper = document.querySelector("#gallery");
    wrapper.className = "row";
    const colheight = 2;
    for (var i = 0; i < gallery.length; i++) {
        if (i % colheight == 0) {
            var rowElement = document.createElement("div");
            rowElement.className = "column";
            wrapper.appendChild(rowElement);
        }
        var galleryItem = gallery[i];
        var thumb = new Image();
        thumb.src = galleryItem.thumbnail.url;
        thumb.style.width = "100%";
        rowElement.appendChild(thumb);
    }
});