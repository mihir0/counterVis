

def inputTeams():
    heroArray = []
    for heroNum in range(1,6):
        while True:
            hero = input("Hero " + str(heroNum) + ": ")
            if checkValidity(hero, heroArray):
                heroArray.append(hero)
                break
            print ("Invalid hero. Try again")
    return heroArray

def checkValidity(hero, heroArray):
    if len(hero) == 0:
        return False
    if hero not in heroArray: #add - and hero name is a valid hero name
        return True
    return False

print("Team 1 - Enter your heroes: " )
team1 = inputTeams()
print()

print("Team 2 - Enter your heroes: ")
team2 = inputTeams()
print()

print(team1)
print(team2)
