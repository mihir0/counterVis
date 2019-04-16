from Map import *
from Hero import *


class Game:
    def __init__(self, team1, team2, the_map):
        assert isinstance(team1, Heroes)
        self.team1 = team1

        assert isinstance(team2, Heroes)
        self.team2 = team2

        assert isinstance(the_map, Map)
        self.the_map = the_map

    def team1_select(self, hero):
        if len(self.team1.heroes) <= 6:
            self.team1.hero_append(hero)

    def team2_select(self, hero):
        if len(self.team2.heroes) <= 6:
            assert isinstance(hero, Hero)
            self.team2.hero_append(hero)

    def calculate_points(self):
        team1_points = int(0)
        team2_points = int(0)

        team1_points += self.calculate_team1() + self.calculate_map_points1()
        team2_points += self.calculate_team2() + self.calculate_map_points2()

    def calculate_team1(self):
        ans = int(0)
        for hero in self.team2.heroes:
            for counter in self.team1.heroes:
                if hero.is_counter(counter):
                    ans += hero.return_counter_weight(counter)
        return ans

    def calculate_team2(self):
        ans = int(0)
        for hero in self.team1.heroes:
            for counter in self.team2.heroes:
                if hero.is_counter(counter):
                    ans += hero.return_counter_weight(counter)
        return ans

    def calculate_map_points1(self):
        ans = int(0)
        for hero in self.the_map.heroes:
            for each in self.team1.heroes:
                if hero.has_advantage(each):
                    ans += 1
        return ans

    def calculate_map_points2(self):
        ans = int(0)
        for hero in self.the_map.heroes:
            for each in self.team2.heroes:
                if hero.has_advantage(each):
                    ans += 1
        return ans

    def __str__(self):
        ans = "///////TEAM 1///////\n"
        ans += str(self.team1)
        ans += "\n///////TEAM 2///////\n"
        ans += str(self.team2)
        return ans

    def get_team1(self):
        return self.team1

    def get_team2(self):
        return self.team2
