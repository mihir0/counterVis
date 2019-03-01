import csv

if __name__ == "__main__": # main method
    with open('Character Counter Spreadsheet - Sheet1.csv') as csvfile:
        readRange = (2, 30) # inclusive range of rows to read
        readCSV = csv.reader(csvfile, delimiter=',')
        for row_num, row in enumerate(readCSV):
            if row_num >= readRange[0] and row_num <= readRange[1]:
                print(row[1:])