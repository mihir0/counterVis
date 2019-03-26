from Hero import *


class Map:
    def __init__(self, name, heroes):
        assert isinstance(name, str)
        self.name = name
        self.heroes = heroes

    def __str__(self):
        ans = ""
        ans += "////MAP////\n"
        ans += "Name: " + self.name + "\n"
        ans += str(self.heroes)

    def hero_append(self, hero):
        assert isinstance(hero, Hero)
        self.heroes.append(hero)

    def has_advantage(self, find_hero):
        assert isinstance(find_hero, Hero)
        for i in range(0, len(self.heroes)):
            if find_hero.name.lower() == self.heroes[i].name.lower():
                return True
        return False


class Maps:
    def __init__(self, maps):
        self.maps = maps

    def map_append(self, the_map):
        assert isinstance(the_map, Map)
        self.maps.append(the_map)
