import csv
#  from Map import *
from game import *
from Hero import *

if __name__ == "__main__":  # main method
    """graph = Graph()
    with open('Character Counter Spreadsheet - Sheet1.csv') as csvfile:
        topRowPosition = 0 # position of header row
        readRange = (2, 30) # inclusive range of rows to read
        readCSV = csv.reader(csvfile, delimiter =',')
        topRow = None
        for row_num, row in enumerate(readCSV):
            if row_num == topRowPosition:
                topRow = row[2:]
            if row_num >= readRange[0] and row_num <= readRange[1]:
                row = row[1:] #trim row
                node_a = Node(row[0])
                for item_position, item in enumerate(row[1:]):
                    if item == '1' or item == '2' or item == '3':
                        # create the edge
                        node_b = Node(topRow[item_position])
                        edge = Edge(node_a, node_b, item)
                        graph.addEdge(edge)
    #print (graph)"""

    with open('Character Counter Spreadsheet - Sheet1.csv') as csvfile:
        # creating list of heroes with counters

        list_heroes = []
        topRowPosition = 0  # position of header row
        readRange = (1, 29)  # inclusive range of rows to read
        readCSV = csv.reader(csvfile, delimiter=',')
        topRow = None
        for row_num, row in enumerate(readCSV):
            if row_num == topRowPosition:
                topRow = row[2:]
            if readRange[0] <= row_num <= readRange[1]:
                row = row[1:]  # trim row
                hero = Hero(row[0], [])
                for item_position, item in enumerate(row[1:]):
                    if item == '1' or item == '2' or item == '3':
                        # create the edge
                        counter = Hero(topRow[item_position], [])
                        hero.add_counter(counter, int(item))
                list_heroes.append(hero)
        heroes = Heroes(list_heroes)
        #  print(heroes)
        #  creating game

        teamFake1 = Heroes([])
        teamFake1.hero_append(heroes.return_hero("Mei"))
        teamFake1.hero_append(heroes.return_hero("Tracer"))
        teamFake1.hero_append(heroes.return_hero("Bastion"))
        teamFake1.hero_append(heroes.return_hero("Symmetra"))
        teamFake1.hero_append(heroes.return_hero("Soldier: 76"))
        teamFake1.hero_append(heroes.return_hero("Reinhardt"))

        teamFake2 = Heroes([])
        teamFake2.hero_append(heroes.return_hero("Ana"))
        teamFake2.hero_append(heroes.return_hero("Soldier: 76"))
        teamFake2.hero_append(heroes.return_hero("Lucio"))
        teamFake2.hero_append(heroes.return_hero("Genji"))
        teamFake2.hero_append(heroes.return_hero("Widowmaker"))
        teamFake2.hero_append(heroes.return_hero("Hanzo"))

        #  does individual input
        """team1 = Heroes([])
        team2 = Heroes([])
        for i in range(0, 6):
            hero = raw_input("Choose a Hero for team 1: ")
            if heroes.is_hero(hero):
                type(hero)
                team1.hero_append(heroes.return_hero(hero))
            else:
                print("invalid hero")
                i = i - 1

        for i in range(0, 6):
            hero = raw_input("Choose a Hero for team 2: ")
            if heroes.is_hero(hero):
                type(hero)
                team2.hero_append(heroes.return_hero(hero))
            else:
                print("invalid hero")
                i = i - 1
        #game = Game(team1, team2)"""
        maps = Maps([])
        the_map = Map("A map", [])
        game = Game(teamFake1, teamFake2, the_map)

        print(game.calculate_team1())
        print(game.calculate_team2())
