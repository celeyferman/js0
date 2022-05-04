let bt1 = document.getElementById("button1");
let m1 = document.getElementById("meter1");

function clickButton(){
    if(m1.value > 0) {
        m1.value = m1.value - 1;
    }
    if(m1.value===0){
        bt1.disabled = true;
    }
}
