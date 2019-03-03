import csv

class Node:
    def __init__(self, name):
        self.name = name
    def getName(self):
        return self.name
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
    def addNode(self, node):
        self.nodes.append(node)

    # NOTE: this method will overwrite a previously existing edge
    def addEdge(self, edge):
        # delete preexisting edge if found in list
        # print "attempting to add", edge
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
        
if __name__ == "__main__": # main method
    graph = Graph()
    with open('Character Counter Spreadsheet - Sheet1.csv') as csvfile:
        topRowPosition = 1
        readRange = (2, 30) # inclusive range of rows to read
        readCSV = csv.reader(csvfile, delimiter =',')
        topRow = None
        # topRow = list(readCSV)[1][2:]
        # print "topRow: ", topRow
        for row_num, row in enumerate(readCSV):
            if row_num == topRowPosition:
                topRow = row[2:]
            if row_num >= readRange[0] and row_num <= readRange[1]:
                row = row[1:] #trim row
                # print "row: ", row
                node_a = Node(row[0])
                for item_position, item in enumerate(row[1:]):
                    if item == '1' or item == '2' or item == '3':
                        # create the edge
                        node_b = Node(topRow[item_position])
                        edge = Edge(node_a, node_b, item)
                        # print "updating with edge ", edge
                        # print "before\n", graph
                        graph.addEdge(edge)
                        # print "after\n", graph
                        # raw_input()
                    # raw_input()
    print graph
