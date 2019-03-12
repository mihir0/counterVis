import csv
from graph import *

class Game:
    def __init__(self, team1, team2):
        self.team1 = team1
        self.team2 = team2

    def game(team1[], team2[]):
        team1Total = 0
        team2Total = 0
        for x in range(0,6):
            for y in range(0,6):
                if team1[x].isCounter(team2[y]):
                    team1Total += team1[x].returnCounterWeight(team2[y])
                else if team2[y].isCounter(team1[x]):
                    team2Total += team2[y].returnCounterWeight(team1[x])
        print("Team 1 Score: " + team1Total)
        print("Team 2 Score: " + team2Total)
        difference = team1Total - team2Total
        if difference==0:
            print("The teams are evenly matched.")
        else if difference > 0:
            print("Team 1 has the advantage by " + difference + " points.")
        else:
            print("Team 2 has the advantage by " + (difference * -1) + " points.")
    
