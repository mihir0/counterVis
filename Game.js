export class Game {
    constructor(team1, team2, the_map) {
        self.team1 = team1;
        self.team2 = team2;
        self.the_map = the_map;
    }

    team1_select(hero) {
        if (self.team1.heroes.length <= 6) {
            self.team1.hero_append(hero);
        }
    }

    team2_select(hero) {
        if (self.team2.heroes.length <= 6) {
            self.team2.hero_append(hero);
        }
    }

    // Uncommented because not sure what this method is doing?
    // get calculate_points() {
    //     var team1_points = 0;
    //     var team2_points = 0;
    //     team1_points += self.calculate_team1() + self.calculate_map_points1();
    //     team2_points += self.calculate_team2() + self.calculate_map_points2();
    // }

    get calculate_team1() {
        var ans = 0;
        for (var hero in self.team2.heroes) {
            for (var counter in self.team1.heroes) {
                if (hero.is_counter(counter)) {
                    ans += hero.return_counter_weight(counter);
                }
            }
        }
        return ans;
    }

    get calculate_team2() {
        var ans = 0;
        for (var hero in self.team1.heroes) {
            for (var counter in self.team2.heroes) {
                if (hero.is_counter(counter)) {
                    ans += hero.return_counter_weight(counter);
                }
            }
        }
        return ans;
    }

    get calculate_map_points1() {
        var ans = 0;
        for (var hero in self.the_map.heroes) {
            for (var each in self.team1.heroes) {
                if (hero.has_advantage(each)) {
                    ans += 1;
                }
            }
        }
        return ans;
    }

    get calculate_map_points2() {
        var ans = 0;
        for (var hero in self.the_map.heroes) {
            for (var each in self.team2.heroes) {
                if (hero.has_advantage(each)) {
                    ans += 1;
                }
            }
        }
        return ans;
    }
    
    toString() {
        var ans = "///////TEAM 1///////\n";
        ans += self.team1.toString(); 
        ans += "\n///////TEAM 2///////\n";
        ans += self.team2.toString();
        return ans;
    }
    
    get get_team1() {
        return self.team1;
    }
    
    get get_team2() {
        return self.team2;
    }
}
