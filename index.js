
function add(num, id) {
    if (id == "btn-home") {
        let newnum = Number(document.getElementById("home-score").innerText) + num;
        document.getElementById("home-score").innerText = newnum;
        console.log("newNum: " + newnum);
    }
    else if (id == "btn-guest") {
        let newnum = Number(document.getElementById("guest-score").innerText) + num;
        document.getElementById("guest-score").innerText = newnum;
        console.log("newNum: " + newnum);
    }
    else
        console.log("button id not found");
}
