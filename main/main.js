// console.log('Hello world');
window.onload = buildHeroesList();
var teamOneSelection = '';
var teamTwoSelection = '';

/*
This function generates the HTML list that contains all the hero names contained in arr. This list is made up of clickable buttons with a callback function.
*/
function buildHeroesList() {
    var arr = ['Ana','Ashe','Bastion','Brigitte','D. Va','Doomfist','Genji','Hanzo','Junkrat','Lucio','Mccree','Mei','Mercy','Moira','Orisa','Pharah','Reaper','Reinhardt','Roadhog','Soldier: 76','Sombra','Symmetra','Torbjorn','Tracer','Widowmaker','Winston','Wrecking Ball','Zarya','Zenyatta'];
    for (var i in arr) {
        var id = arr[i]
        var id1 = id + '_1';
        var id2 = id + '_2';
        var element1 = "<button type='button' class='list-group-item list-group-item-action hero-item' id='" + id1 + "'onclick=\"buttonClick('" + id1 + "')\">" + id + "</button>";
        var element2 = "<button type='button' class='list-group-item list-group-item-action hero-item' id='" + id2 + "'onclick=\"buttonClick('" + id2 + "')\">" + id + "</button>";

        // console.log(element);
        $("#teamOneHeroes").append(element1);
        $("#teamTwoHeroes").append(element2);
    }
}

/*
Called when user types in search box. Filters which heroes are visible on list.
*/
function filter(team) {
    if (team == 1) {
        var strFilter = $("#myInput").val().toUpperCase();
        var heroes = document.getElementById("teamOneHeroes").getElementsByTagName("button");
    } else if (team == 2) {
        var strFilter = $("myInput").val().toUpperCase();
        var heroes = document.getElementById("teamTwoHeroes").getElementsByTagName("button");
    }
    // console.log(filter);
    for (i = 0; i < heroes.length; i++) {
        var strValue = heroes[i].textContent || heroes[i].innerText;
        if (strValue.toUpperCase().indexOf(strFilter) > -1) {
            heroes[i].style.display = "";
        } else {
            heroes[i].style.display = "none";
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
    if (id.substring(id.length - 2, id.length) == "_1") {
        teamOneSelection = id.substring(0, id.length-2);
    } else if (id.substring(id.length - 2, id.length) == "_2") {
        teamTwoSelection = id.substring(0, id.length-2);
    }
}

/*
Connected to add button. Adds hero to team. Also creates an HTML pill badge with hero name.
*/
function addClick(team) {
    if (team == 1) {
        console.log(teamOneSelection);
        var element = "<span class='badge badge-pill badge-primary'>" + teamOneSelection + "</span>";
        console.log(element);
        $("#teamOneSelectedHeroes").append(element);
    } else if (team == 2) {
        console.log(teamTwoSelection);
        var element = "<span class='badge badge-pill badge-warning'>" + teamTwoSelection + "</span>";
        console.log(element);
        $("#teamTwoSelectedHeroes").append(element);
    }
}