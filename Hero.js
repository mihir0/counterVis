// Transcrypt'ed from Python, 2019-04-14 15:30:38
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var Heroes =  __class__ ('Heroes', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, heroes) {
		self.heroes = heroes;
	});},
	get is_hero () {return __get__ (this, function (self, hero) {
		for (var each of self.heroes) {
			if (hero.lower () == each.py_name.lower ()) {
				return true;
			}
		}
		return false;
	});},
	get hero_append () {return __get__ (this, function (self, hero) {
		self.heroes.append (hero);
	});},
	get __str__ () {return __get__ (this, function (self) {
		var node_str = '';
		for (var hero of self.heroes) {
			node_str += str (hero) + '\n';
		}
		return 'HEROES:\n' + node_str;
	});},
	get py_get () {return __get__ (this, function (self, i) {
		return self.heroes [i];
	});},
	get return_hero () {return __get__ (this, function (self, hero_str) {
		for (var each of self.heroes) {
			if (hero_str.lower () == each.py_name.lower ()) {
				return each;
			}
		}
		var __except0__ = py_TypeError ("What you typed isn't a hero: " + hero_str);
		__except0__.__cause__ = null;
		throw __except0__;
	});}
});
export var Hero =  __class__ ('Hero', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name, counters) {
		self.py_name = str (py_name);
		self.counters = counters;
	});},
	get is_counter () {return __get__ (this, function (self, find_hero) {
		for (var i = 0; i < len (self.counters); i++) {
			if (find_hero.py_name.lower () == self.counters [i].counter.py_name.lower ()) {
				return true;
			}
		}
		return false;
	});},
	get return_counter_weight () {return __get__ (this, function (self, find_hero) {
		for (var i = 0; i < len (self.counters); i++) {
			if (find_hero.py_name.lower () == self.counters [i].counter.py_name.lower ()) {
				return self.counters [i].weight;
			}
		}
		return 0;
	});},
	get __str__ () {return __get__ (this, function (self) {
		var ans = ('<' + self.py_name) + '>: ';
		for (var each of self.counters) {
			ans += str (each);
		}
		return ans;
	});},
	get add_counter () {return __get__ (this, function (self, hero_counter, weight) {
		self.counters.append (Counter (hero_counter, weight));
	});},
	get get_name () {return __get__ (this, function (self) {
		return self.py_name;
	});},
	get set_counters () {return __get__ (this, function (self, counters_list) {
		self.counters = counters_list;
	});},
	get get_counters () {return __get__ (this, function (self) {
		return self.counters;
	});}
});
export var Counter =  __class__ ('Counter', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, counter, weight) {
		self.counter = counter;
		self.weight = int (weight);
	});},
	get __str__ () {return __get__ (this, function (self) {
		return ((('(' + self.counter.py_name) + ' | ') + str (self.weight)) + ')';
	});}
});

//# sourceMappingURL=Hero.map