function printAttr(element) {
    const elemAttr = element.attributes;
    for (let i = 0; i < elemAttr.length; i++){
        console.log(elemAttr[i].name+" -> "+elemAttr[i].value);
    }
}

const divA = document.getElementById("a");
printAttr(divA);
