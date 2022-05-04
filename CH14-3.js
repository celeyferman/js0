const requestURL = "https://raw.githubusercontent.com/celeyferman/js0/main/CH14-3_json.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    const jsonData = request.response;
    const edge = jsonData.edge;
    const opera = jsonData.opera;
    const firefox = jsonData.firefox;


    let mainSection = document.getElementById("mainSection");

    if ("content" in document.createElement("template")) {
        const t = document.querySelector("#browserSection");
        let li = t.content.querySelectorAll("li");

        for (let i = 0; i < li.length; i++){
            let h1 = li[i].querySelector("h1");
            let img = li[i].querySelector("img");
            let p = li[i].querySelector("p");

            if (li[i].value == 1) {
                h1.textContent = edge.title;
                img.setAttribute("src", edge.logo);
                p.textContent = edge.description;
            }
            if (li[i].value == 2) {
                h1.textContent = firefox.title;
                img.setAttribute("src", firefox.logo);
                p.textContent = firefox.description;
            }
            if (li[i].value == 3) {
                h1.textContent = opera.title;
                img.setAttribute("src", opera.logo);
                p.textContent = opera.description;
            }
        }
        const clone = document.importNode(t.content, true);
        mainSection.appendChild(clone, true);
    }

    const regressHTML = document.importNode(mainSection.querySelector("ol"), true);

    function loadContent(){
        if (location.hash === "#home") {
            goBack();
        }
        if (location.hash === "#edge") {
            browserSelect(1);
        }
        if (location.hash === "#firefox") {
            browserSelect(2);
        }
        if (location.hash === "#opera") {
        browserSelect(3);
        }
    }


    window.addEventListener("hashchange", loadContent);

    if(!location.hash) {
        location.hash = "#home";
    }

    loadContent();

    function browserSelect(value) {
        let fragment = document.createDocumentFragment();
        const t = document.querySelector("#detailSection");
        let li = t.content.querySelector("li");

        let h1 = li.querySelector("h1");
        let img = li.querySelector("img");
        let p = li.querySelector("p");
        let a_array = li.querySelectorAll("a");
        let a = a_array[0];
        let aback = a_array[1];

        a.textContent = "Homepage";
        aback.textContent = "Back";
        aback.href = "#home";
    
        if (value == 1) {
            h1.textContent = edge.title;
            img.setAttribute("src", edge.logo);
            p.textContent = edge.description;
            a.href = edge.homepage;
        }

        if (value == 2) {
            h1.textContent = firefox.title;
            img.setAttribute("src", firefox.logo);
            p.textContent = firefox.description;
            a.href = firefox.homepage;
        }

        if (value == 3) {
            h1.textContent = opera.title;
            img.setAttribute("src", opera.logo);
            p.textContent = opera.description;
            a.href = opera.homepage;
        }
        const clone = document.importNode(t.content, true);
        fragment.append(clone);

        const prvContent = mainSection.querySelector("ol");
        prvContent.replaceWith(fragment);
    }
    function goBack(){
        const prvContent = mainSection.querySelector("ol");
        prvContent.replaceWith(regressHTML);
    }
}