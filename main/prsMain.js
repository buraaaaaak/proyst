"use strict";
let xmlhttp = "";
let ActiveXObject = "";
var proystID = document.getElementById("proyst");
var oldURL = document.referrer.replace(
  window.location.protocol + "//" + window.location.host,
  ""
);

var proyst = function(selector) {
    return this;
};

proyst.changeURL = function(url) {
    var scURL = window.location.href.replace(
        window.location.protocol + "//" + window.location.host,
        ""
    );
    if (scURL !== url) {
        window.history.pushState("Proyst", url, url);
    }
};

proyst.loaded = function() {
    if (proystID.innerHTML == "") {
        return false;
    } else {
        return true;
    }
}

proyst.loader = function() {
    if (proyst.loaded() == false) {
        proystID.innerHTML = "Loading..."
    }
};

proyst.err = function(data) {
    function trd() {
        if (p.el("#proyst").getElement().length == 2) {
            proyst.loadPageURL(data, true, true)
        }
    }

    var st = setInterval(trd, 500)
};

proyst.loadPageURL = function(prop, click, rdc) {
    var rdcr = rdc || false
    function load(pr) {
        var url = pr || prop;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                proystID.innerHTML = xhttp.responseText;
                var evn = document.querySelectorAll("[pHref]");
                for (var i = 0; i < evn.length; i++) {
                    evn[i].addEventListener("click", function(event) {
                        proyst.loadPageURL(this.getAttribute("pHref"), true);
                    });
                }
                if(rdcr == false) {
                    proyst.changeURL(url.replace("pages/", "").replace("proyst/", ""));
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    if (click == true) {
        load();
    } else {
        if (window.location.pathname !== "/") {
            load("pages" + window.location.pathname);
        }
    }
    if (window.location.pathname == "/") {
        load();
    }
};

window.addEventListener("popstate", function(event) {
    proyst.loadPageURL(oldURL);
});

var proystApp = function() {
    var x;
    this.el = function(elem) {
        x = document.querySelectorAll(elem);
        return this;
    };
    this.hide = function() {
        x.forEach((target) => {
            target.style.display = "none";
        });
        return;
    };

    this.getElement = function() {
        if (x.length > 1) {
            var arr = [];
            for (let i = 0; i < x.length; i++) {
                arr.push(x[i]);
            }
            return arr;
        } else {
            return x[0];
        }
    };

    this.click = function(action) {
        if (x.length > 1) {
            for (let i = 0; i < x.length; i++) {
                x[i].addEventListener("click", action, false);
            }
        } else {
            x[0].addEventListener("click", action, false);
        }
    };
};

var p = new proystApp();