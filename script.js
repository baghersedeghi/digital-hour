function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    document.querySelector(".hour").innerHTML = h + ":" + m + ":" + s;
}function date(){

    setInterval(time, 1000);
}

