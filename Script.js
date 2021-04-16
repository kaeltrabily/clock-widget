var hour = 0;
var min = 0;

function round5(x) {
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}

setInterval(() => {
    var timeNow = new Date();
    document.querySelectorAll("span").forEach((x) => {
        x.className = "";
    })
    document.querySelector("#it").className = "white"
    document.querySelector("#is").className = "white"
    min = round5(timeNow.getMinutes());
    // min = round5(58);
    hour = timeNow.getHours();
    // hour = 13 ;
    min > 30 ? hour += 1 : hour = hour;
    min == 60 ? min -= 60 : min = min;
    hour >= 12 ? hour -= 12 : hour = hour;
    switch (hour) {
        case 0:
            document.querySelector("#twelve").className = "white"
            break;
        case 1:
            document.querySelector("#one").className = "white"
            break;
        case 2:
            document.querySelector("#two").className = "white"
            break;
        case 3:
            document.querySelector("#three").className = "white"
            break;
        case 4:
            document.querySelector("#four").className = "white"
            break;
        case 5:
            document.querySelector("#five").className = "white"
            break;
        case 6:
            document.querySelector("#six").className = "white"
            break;
        case 7:
            document.querySelector("#seven").className = "white"
            break;
        case 8:
            document.querySelector("#eight").className = "white"
            break;
        case 9:
            document.querySelector("#nine").className = "white"
            break;
        case 10:
            document.querySelector("#ten").className = "white"
            break;
        case 11:
            document.querySelector("#eleven").className = "white"
            break;
    }
    min > 30 ? document.querySelector("#to").className = "white" : min == 0 ? document.querySelector("#zero").className = "white" : document.querySelector("#past").className = "white";
    switch (min) {
        case 5:
            document.querySelector("#fiveM").className = "white"
            break;
        case 10:
            document.querySelector("#tenM").className = "white"
            break;
        case 15:
            document.querySelector("#quarter").className = "white"
            break;
        case 20:
            document.querySelector("#twenty").className = "white"
            break;
        case 25:
            document.querySelector("#twenty").className = "white"
            document.querySelector("#fiveM").className = "white"
            break;
        case 30:
            document.querySelector("#half").className = "white"
            break;
        case 35:
            document.querySelector("#twenty").className = "white"
            document.querySelector("#fiveM").className = "white"
            break;
        case 40:
            document.querySelector("#twenty").className = "white"
            break;
        case 45:
            document.querySelector("#quarter").className = "white"
            break;
        case 50:
            document.querySelector("#tenM").className = "white"
            break;
        case 55:
            document.querySelector("#fiveM").className = "white"
            break;
    }
}, 500)