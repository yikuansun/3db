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
    for (var i = 0; i < gallery.length; i++) {
        var galleryItem = gallery[i];
        var thumb = new Image();
        thumb.src = galleryItem.thumbnail.url;
        thumb.alt = `${galleryItem.modelname} by ${galleryItem.authorname}`;
        thumb.style.width = "100%";
        thumb.style.cursor = "pointer";
        thumb.addEventListener("click", new Function(`
            var a = document.createElement("a");
            a.href = "${galleryItem.model.url}";
            a.download = "${galleryItem.modelname} by ${galleryItem.authorname}";
            a.target = "_blank";
            a.click();
            a.remove();
        `));
        wrapper.appendChild(thumb);
    }
});