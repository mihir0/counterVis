import csv
from graph import *
from Hero import *


class Game:
    def __init__(self, team1, team2):
        self.team1 = team1
        self.team2 = team2

    def team1_select(self, hero):
        if self.team1.size <= 6:
            self.team1.append(hero)

    def team2_select(self, hero):
        if self.team2.size <= 6:
            self.team2.append(hero)

    def print_team1(self):
        ans = ""
        for hero in self.team1:
            ans += hero.name + ", "
        return ans

    def print_team2(self):
        ans = ""
        for hero in self.team2:
            ans += hero.name + ", "
        return ans

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

    def __str__(self):
        ans = ""
        ans += self.print_team1()
        ans += "\n"
        ans += self.print_team2()
        return ans

    def get_team1(self):
        return self.team1

    def get_team2(self):
        return self.team2
