// console.log('Hello world');
window.onload = buildHerosList();
var teamOneSelection = '';


function buildHerosList() {
    var arr = ['Ana','Ashe','Bastion','Brigitte','D. Va','Doomfist','Genji','Hanzo','Junkrat','Lucio','Mccree','Mei','Mercy','Moira','Orisa','Pharah','Reaper','Reinhardt','Roadhog','Soldier: 76','Sombra','Symmetra','Torbjorn','Tracer','Widowmaker','Winston','Wrecking Ball','Zarya','Zenyatta'];
    for (var i in arr) {
        var id = arr[i]
        var element = "<button type='button' class='list-group-item list-group-item-action hero-item' id='" + id + "'onclick=\"buttonClick('" + id + "')\">" + id + "</button>";
        // console.log(element);
        $("#teamOneHeros").append(element);
    }
}

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
    teamOneSelection = id;
}

function addClick(team) {
    console.log(teamOneSelection);
    var element = "<span class='badge badge-pill badge-primary'>" + teamOneSelection + "</span>";
    console.log(element);
    $("#teamOneSelectedHeros").append(element);
}