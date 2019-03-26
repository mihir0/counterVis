// console.log('Hello world');

function filter() {
    var strFilter = $("#myInput").val().toUpperCase();
    // console.log(filter);
    var heros = document.getElementById("teamOneHeros").getElementsByTagName("button");
    for (i = 0; i < heros.length; i++) {
        var strValue = heros[i].textContent || heros[i].innerText;
        if (strValue.toUpperCase().indexOf(strFilter) > -1) {
            heros[i].style.display = "";
        } else {
            heros[i].style.display = "none";
        }
    }
}

function buttonClick(id) {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked");
    }
    document.getElementById(id).classList.add("clicked");
}