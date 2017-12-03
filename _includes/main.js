(function () {
    var xhr= new XMLHttpRequest();
    xhr.open('GET', "gallery/index.html", true);
    xhr.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        var container = document.getElementsByClassName("container")[0];
        container.innerHTML = this.responseText;
    };
    xhr.send();
})();