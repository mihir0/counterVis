//don't know what needs to be imported
//also should line 3 be export var or just var
var Game = __class__ ('Game', [object], {
    get __init__ () {return __get__ (this, function (self, team1, team2, the_map) {
        self.team1 = team1;
        self.team2 = team2;
        self.the_map = the_map;
    });},
    get team1_select () {return __get__ (this, function (self, hero) {
        if (self.team1.heroes.length <= 6) {
            self.team1.hero_append(hero);
        }
    });},
    get team2_select () {return __get__ (this, function (self, hero) {
        if (self.team2.heroes.length <= 6) {
            self.team2.hero_append(hero);
        }
    });},
    get calculate_points () {return __get__ (this, function (self) {
        team1_points = int (0); //not sure how to write int(0) from python
        team2_points = int (0);

        team1_points += self.calculate_team1() + self.calculate_map_points1();
        team2_points += self.calculate_team2() + self.calculate_map_points2();
    });},
    get calculate_team1 () {return __get__ (this, function (self) {
        ans = int (0);
        for (var hero in self.team2.heroes) {
            for (var counter in self.team1.heroes) {
                if (hero.is_counter(counter)) {
                    ans += hero.return_counter_weight(counter);
                }
            }
        }
        return ans;
    });},
    get calculate_team2 () {return __get__ (this, function (self) {
        ans = int (0);
        for (var hero in self.team1.heroes) {
            for (var counter in self.team2.heroes) {
                if (hero.is_counter(counter)) {
                    ans += hero.return_counter_weight(counter);
                }
            }
        }
        return ans;
    });},
    get calculate_map_points1 () {return __get__ (this, function (self) {
        ans = int (0);
        for (var hero in self.the_map.heroes) {
            for (var each in self.team1.heroes) {
                if (hero.has_advantage(each)) {
                    ans += 1;
                }
            }
        }
        return ans;
    });},
    get calculate_map_points2 () {return __get__ (this, function (self) {
        ans = int (0);
        for (var hero in self.the_map.heroes) {
            for (var each in self.team2.heroes) {
                if (hero.has_advantage(each)) {
                    ans += 1;
                }
            }
        }
        return ans;
    });},
    get __str__ () {return __get__ (this, function (self) {
        ans = "///////TEAM 1///////\n";
        ans += str (self.team1); //also not sure how to do str()
        ans += "\n///////TEAM 2///////\n";
        ans += str (self.team2);
        return ans;
    });},
    get get_team1 () {return __get__ (this, function (self) {
        return self.team1;
    });},
    get get_team2 () {return __get__ (this, function (self) {
        return self.team2;
    });}
});