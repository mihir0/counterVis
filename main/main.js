import {counters} from "./counters.js";
// console.log('succesfully imported');
// console.log(counters);
var teamOneSelection = '';
var teamTwoSelection = '';
var team1 = []; //stores selected characters
var team2 = [];
window.onload = buildHeroesList();

/*
This function generates the HTML list that contains all the hero names contained in arr. This list is made up of clickable buttons with a callback function.
*/
function buildHeroesList() {
    console.log("building list");
    console.log(counters);
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
window.filter = function filter(team) {
    if (team == 1) {
        var strFilter = $("#input1").val().toUpperCase();
        var heroes = document.getElementById("teamOneHeroes").getElementsByTagName("button");
    } else if (team == 2) {
        var strFilter = $("#input2").val().toUpperCase();
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
window.buttonClick = function buttonClick(id) {
    // console.log(id);
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked");
    }
 
    if (id.substring(id.length - 2, id.length) == "_1") {
        teamOneSelection = id.substring(0, id.length-2);
    } else if (id.substring(id.length - 2, id.length) == "_2") {
        teamTwoSelection = id.substring(0, id.length-2);
    }
    if (teamOneSelection !== '') { document.getElementById(teamOneSelection + "_1").classList.add("clicked"); }
    if (teamTwoSelection !== '') { document.getElementById(teamTwoSelection + "_2").classList.add("clicked"); }
}

/*
Connected to add button. Adds hero to team. Also creates an HTML pill badge with hero name.
*/
window.addClick = function addClick(team) {
    if (team == 1) {
        if (teamOneSelection === '') {return;}
        console.log(teamOneSelection);
        var element = "<span class='badge badge-pill badge-primary'>" + teamOneSelection + "</span>";
        // console.log(element);
        $("#teamOneSelectedHeroes").append(element);
        team1.push(teamOneSelection);
    } else if (team == 2) {
        if (teamTwoSelection === '') {return;}
        console.log(teamTwoSelection);
        var element = "<span class='badge badge-pill badge-danger'>" + teamTwoSelection + "</span>";
        // console.log(element);
        $("#teamTwoSelectedHeroes").append(element);
        team2.push(teamTwoSelection);
    }
    updateMeters();
}

/*
* Calculates the score of a team.
*/
window.calculateScore = function calculateScore(team) {
    var a = (team == 1) ? team1 : team2;
    var b = (team == 1) ? team2 : team1;
    // console.log(team1);
    // console.log(team2);
    // console.log(a);
    // console.log(b);
    var score = 0;
    a.forEach((a) => {
        b.forEach((b) => {
            console.log("a: " +  a + " b: " + b);
            let w = counters[a][b];
            console.log("w: " + w)
            if (w !== 'x') {
                score += Number(w);
            }
        });
    });
    return score;
}


window.updateMeters = function updateMeters() {
    let score1 = calculateScore(1);
    let score2 = calculateScore(2);
    // $("#progress1").width(score1 * 10).text(score1);
    // $("#progress2").width(score2 * 10).text(score2);
    $("#progress1_").width(String(score1 / (score1 + score2) * 100) + "%").text(score1);
    $("#progress2_").width(String(score2 / (score1 + score2) * 100) + "%").text(score2);
}
