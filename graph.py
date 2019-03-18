class Heroes:
    def __init__(self, heroes):
        self.heroes = heroes

    def is_hero(self, hero):
        for each in self.heroes:
            if hero.lower() == each.name.lower():
                return True
        return False

    def hero_append(self, hero):
        self.heroes.append(hero)

    def __str__(self):
        node_str = ""
        for hero in self.heroes:
            node_str += str(hero) + "\n"
        return "HEROES:\n" + node_str


class Hero:
    def __init__(self, name, counters):
        self.name = name
        self.counters = counters;  # would receive another list of hero and weight

    # checks if a hero is counter of the current one
    def is_counter(self, find_hero):
        for i in range(0, len(self.counters)):
            if find_hero.lower() == self.counters[i][0].lower():
                return True
        return False

    # returns the counter weight of a hero
    def return_counter_weight(self, find_hero):
        for i in range(0, len(self.counters)):
            if find_hero.name.lower() == self.counters[i][0].name.lower():
                return self.counters[i][1]
        return None

    # prints hero's name and counters
    def __str__(self):
        ans = "<" + self.name + ">: "
        for i in range(0, len(self.counters)):
            ans += "(" + self.counters[i][0].name + " | " + self.counters[i][1] + ")"
        return ans

    # appends a counter to the list
    def add_counter(self, hero_counter, weight):
        self.counters.append([hero_counter, weight])

    # setters and getters
    def get_name(self):
        return self.name

    def set_counters(self, counters_list):
        self.counters = counters_list

    def get_counters(self):
        return self.counters


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
        ans = 0
        for hero in self.team2:
            for counter in self.team1:
                if hero.is_counter(counter):
                    ans += hero.return_counter_weight(counter)
        return ans

    def calculate_team2(self):
        ans = 0
        for hero in self.team1:
            for counter in self.team2:
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


class Node:
    def __init__(self, name):
        self.name = name

    def getName(self):
        return self.name

    def setName(self, nameT):
        name = nameT

    def __str__(self):
        return "<" + self.name + ">"


class Edge:
    def __init__(self, pointA, pointB, weight):
        self.a = pointA
        self.b = pointB
        self.weight = weight

    def __str__(self):
        return "<" + str(self.a) + ", " + str(self.b) + ", w: " + str(self.weight) + ">"

    def getNodes(self):
        return (self.a, self.b)

    def edgePointsMatch(self, pointA, pointB):
        if pointA == self.a and pointB == self.b:
            return True
        if pointA == self.b and pointB == self.a:
            return True
        return False


class Graph:
    def __init__(self):
        self.nodes = []
        self.edges = []

    def __str__(self):
        node_str = ""
        edge_str = ""
        for node in self.nodes:
            node_str += str(node) + ", "
        for edge in self.edges:
            edge_str += str(edge) + "\n"
        return "NODES:\n" + node_str + "\nEDGES:\n" + edge_str

    def hasNode(self, node):
        return node in self.nodes

    def addNode(self, node):
        self.nodes.append(node)

    def containsEdgePoints(self, pointA, pointB):
        # checks if edge already exists that contains the same edge points, disregards weight check
        for edge in self.edges:
            if edge.edgePointsMatch(pointA, pointB):
                return True
        return False

    def getEdgeByIndex(self, index):
        return self.edges[index]

    def getNodeByIndex(self, index):
        return self.nodes[index]

    def getNodeByName(self, name):
        for node in self.nodes:
            if node.getName() == name:
                return name
        return None

    # NOTE: this method will overwrite a previously existing edge
    def addEdge(self, edge):
        # delete preexisting edge if found in list
        for index, currentEdge in enumerate(self.edges):
            if edge.edgePointsMatch(currentEdge.getNodes()[0], currentEdge.getNodes()[1]):
                del self.edges[index]
                break
        self.edges.append(edge)
        # if we need to, add corner nodes to node list
        if not self.hasNode(edge.getNodes()[0]):
            self.addNode(edge.getNodes()[0])
        if not self.hasNode(edge.getNodes()[1]):
            self.addNode(edge.getNodes()[1])
