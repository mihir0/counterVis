import csv
from graph import *

if __name__ == "__main__": # main method
    graph = Graph()
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
    print (graph)
