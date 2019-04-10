// console.log('Hello world');
window.onload = buildHerosList();
var teamOneSelection = '';

/*
This function generates the HTML list that contains all the hero names contained in arr. This list is made up of clickable buttons with a callback function.
*/
function buildHerosList() {
    var arr = ['Ana','Ashe','Bastion','Brigitte','D. Va','Doomfist','Genji','Hanzo','Junkrat','Lucio','Mccree','Mei','Mercy','Moira','Orisa','Pharah','Reaper','Reinhardt','Roadhog','Soldier: 76','Sombra','Symmetra','Torbjorn','Tracer','Widowmaker','Winston','Wrecking Ball','Zarya','Zenyatta'];
    for (var i in arr) {
        var id = arr[i]
        var element = "<button type='button' class='list-group-item list-group-item-action hero-item' id='" + id + "'onclick=\"buttonClick('" + id + "')\">" + id + "</button>";
        // console.log(element);
        $("#teamOneHeros").append(element);
    }
}

/*
Called when user types in search box. Filters which heros are visible on list.
*/
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

/*
When hero is clicked, make sure they are selected.
*/
function buttonClick(id) {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked");
    }
    document.getElementById(id).classList.add("clicked");
    teamOneSelection = id;
}

/*
Connected to add button. Adds hero to team. Also creates an HTML pill badge with hero name.
*/
function addClick(team) {
    console.log(teamOneSelection);
    var element = "<span class='badge badge-pill badge-primary'>" + teamOneSelection + "</span>";
    console.log(element);
    $("#teamOneSelectedHeros").append(element);
}