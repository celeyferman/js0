const n = document.querySelector("#ndata");
const m = document.querySelector("#mdata");
const element = document.createElement("div")
element.className = "grid-item";
element.textContent = "G";

function changeGrid() {
    document.getElementById("maingrid").innerHTML = "";
    const columns = n.value;
    const rows = m.value;
    const gridsize = columns * rows;
    
    let gridElement = document.getElementById("maingrid");
    let widthProperty = "";
    for (let i = 0; i < columns; i++){
        widthProperty += "auto";
        if ((i + 1) < columns) { widthProperty += " "; }
    }
    gridElement.setAttribute("style", "grid-template-columns: "+widthProperty);
  
    for (let i = 0; i < gridsize; i++) {
        document.getElementById("maingrid").appendChild(element.cloneNode(true));
    }
}
