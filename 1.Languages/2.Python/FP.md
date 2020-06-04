# FP


### :m: Set Comprehensions

:pushpin: Mathematical Notation

![equation](http://www.sciweavers.org/tex2img.php?eq=S%3D%5Cbig%5C%7B2.x%5Cmid%20x%5Cin%20N%2Cx%5Cleq10%5Cbig%5C%7D%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

    The part before the pipe is called the output function, 
    x is the variable, N is the input set and x <= 10 is the predicate. 
    That means that the set contains the doubles of all natural numbers that satisfy the predicate.

| Math Feature      | Haskell <sup><img src="images/602px-Haskell-Logo.svg.png" width=37 height=26><img></sup> | Python <img src="images/python-logo.jpg" width=72px height=50px><img> |
|-------------------|-----------------------------------------|------------------------------------------------|
| Set Comprehension | List Comprehension                      | List Comprehension                             |
|                   | [x * 2 \| x <- [1..10]]                 | [x * 2 for x in range( 1, 10)]                 |
|                   | [x * 2 \| x <- [1..10], x * 2 >= 12]    | [x * 2 for x in range( 1, 10) if x * 2 >= 12]  |
|                   | [x\|x<-[50..100],x\`mod\`7==3]          | [x for x in range(50, 100) if x % 7 == 3]      |

### :m: Data Structure using Comprehensions

|  Source Code `Syntactic Sugar`| Type                           |
|-------------------------------|--------------------------------|
| `[ n*n for n in range(5) ]`   | [List]() comprehension `list()` same as `[]` |
| `{ n*n for n in range(5) }`   | [Set]() comprehension `set()` same as `{}` |
| `{ n: n*n for n in range(5)}` | [Dict]() comprehension `dict()` same as `{}` |

### :m: immutable Data Structure using Sequence Unpacking

:bulb: Immutability Tuple

```
>>> t3 = (1, 'a', 4.5)
```

:bulb: Sequence Unpacking

```
>>> i, s, f = t3
>>> lat, long = 43.653226, -79.3831843 # Toronto GPS Coordinates
```


:bulb: Iterable Unpacking [PEP-3132](https://www.python.org/dev/peps/pep-3132/)

```
>>> head, *tail = [x for x in range(10)]
```

### :m: Anonymous functions

```
>>> f = lambda x: x + 3
>>> [ f(x) for x in range(10) if x % 2 == 0]
>>> g = lambda x: x % 2 == 0
>>> [ f(x) for x in range(10) if g(x) ]
```

### :m: HoF (Higher Order Function)


```
def twice(function): 
   return lambda x: function(function(x))  

def f(x): 
   return x + 3 

g = twice(f)

print g(7)  
```


### :m: Functor [map](https://www.w3schools.com/python/ref_func_map.asp)

:pushpin: `map(function, iterables)`

```
>>> map(lambda x: x + 1, [ x for x in range(10) ])
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> map(lambda x, y: x + y, [ x for x in range(10) ], [ y for y in range(10, 20) ])
[10, 12, 14, 16, 18, 20, 22, 24, 26, 28]
```

:pushpin: `filter(function, iterables)`

```
>>> filter(lambda x: x >= 5, [ x for x in range(10) ])
[5, 6, 7, 8, 9]
```

:pushpin: `reduce(function, iterables)`

```
>>> from functools import reduce
>>> reduce(lambda x, y: x + y, [ x for x in range(10) ])
45
```



https://docs.python.org/2/tutorial/datastructures.html#tuples-and-sequences


# References: 

https://medium.com/@joshuapaulrobin/set-comprehension-in-python3-for-beginners-80561a9b4007

https://brilliant.org/wiki/list-comprehension/#set-builders

https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(list_comprehension)

### Unpacking

https://stackoverflow.com/questions/6967632/unpacking-extended-unpacking-and-nested-extended-unpacking/6968451#6968451
