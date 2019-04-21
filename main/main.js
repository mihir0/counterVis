import {counters} from "./counters.js";
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
    for (var i = 0; i < heroes.length; i++) {
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
    let noLimitsActivated = ($("#noLimitsCheck").prop("checked") == true); //boolean: is noLimits checked or not
    if (team == 1) {
        if (teamOneSelection === '') {return;}
        console.log(teamOneSelection);
        var element = "<span class='badge badge-pill badge-primary'>" + teamOneSelection + "</span>";
        $("#teamOneSelectedHeroes").append(element);
        team1.push(teamOneSelection);
        // console.log(element);
        //CLEAR
        var buttons = $("#teamOneHeroes").children();
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("clicked");
        }
        if (!noLimitsActivated) { document.getElementById(teamOneSelection + "_1").setAttribute("disabled", true); }
        teamOneSelection = "";

    } else if (team == 2) {
        if (teamTwoSelection === '') {return;}
        console.log(teamTwoSelection);
        var element = "<span class='badge badge-pill badge-danger'>" + teamTwoSelection + "</span>";
        // console.log(element);
        $("#teamTwoSelectedHeroes").append(element);
        team2.push(teamTwoSelection);
        //CLEAR
        var buttons = $("#teamTwoHeroes").children();
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("clicked");
        }
        if (!noLimitsActivated) { document.getElementById(teamTwoSelection + "_2").setAttribute("disabled", true) };
        teamTwoSelection = "";
    }
    updateMeters();
}

/*
Called when "no limits" checkbox is clicked. When no limits mode is enabled, the same hero can be added infinitely to a team.
*/
window.noLimitsClicked = function noLimitsClicked() {
    if ($("#noLimitsCheck").prop("checked") == true) {
        //Clear all disabled buttons
        var buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            // buttons[i].setAttribute("disabled", false);
            buttons[i].disabled = false;
        }
    } else {
        // console.log('unchecked');
        // disable buttons if hero is already on team
        team1.forEach((hero) => {
            document.getElementById(hero + "_1").setAttribute("disabled", true);
        });
        team2.forEach((hero) => {
            document.getElementById(hero + "_2").setAttribute("disabled", true);
        });
    }
    updateMeters() //calling this to update suggested field
}


/*
* Calculates the score of a team.
*/
window.calculateScore = function calculateScore(teamA, teamB) {
    var a = teamA;
    var b = teamB;
    var score = 0;
    a.forEach((a) => {
        b.forEach((b) => {
            // console.log("a: " +  a + " b: " + b);
            let w = counters[a][b];
            // console.log("w: " + w)
            if (w !== 'x') {
                score += Number(w);
            }
        });
    });
    return score;
}

/*
* Calculates the strength of both teams and updates the meter in the middle.
*/
window.updateMeters = function updateMeters() {
    let score1 = calculateScore(team1, team2);
    let score2 = calculateScore(team2, team1);
    $("#progress1_").width(String(score1 / (score1 + score2) * 100) + "%").text(score1);
    $("#progress2_").width(String(score2 / (score1 + score2) * 100) + "%").text(score2);

    // Suggested code:
    $("#suggested1").text("Suggested: " + findOptimal(1));
    $("#suggested2").text("Suggested: " + findOptimal(2));

}

window.findOptimal = function findOptimal(team) {
    let a = (team == 1) ? team1 : team2;
    let b = (team == 1) ? team2 : team1;
    let score = calculateScore(a, b) - calculateScore(b, a); //NOTE: this is not RAW score. This is score of team A - score of team B.
    let suggested = "";
    let noLimitsActivated = ($("#noLimitsCheck").prop("checked") == true);
    for (var item in counters) {
        let temp = a.slice();
        temp.push(item);
        // console.log("a: " + a);
        // console.log("temp: " + temp);
        if ((a.indexOf(item) == -1) || (noLimitsActivated)) { //if noLimits is not active, then ensure item does not exist in team already.
            let currentScore = calculateScore(temp, b) - calculateScore(b, temp);
            if (currentScore > score) {
                score = currentScore;
                suggested = item;
            }
        }
    }
    // console.log("Suggested: " + suggested + " new score: " + score);
    return suggested;
}