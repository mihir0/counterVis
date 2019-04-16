// import { Heroes } from './Hero.js'; uncomment once this is working
import { Game } from './Game.js';
window.onload = main();
function main() {
    console.log("Main Function Started");
    var game = new Game('team1', 'team2', 'map');
    // var hereos = Heroes();
    console.log(game.toString());
}