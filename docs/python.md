<img class="logo" src="https://user-images.githubusercontent.com/29161635/96948712-46d58800-14b4-11eb-8952-cd5df50a0ab0.png" width="100px" height="100px">

# Python

Python is a high level interpreted language making immense gains in populatiry over the past few years.

## Official resources
- **[Home](https://www.python.org/)**
- **[Documentation](https://www.python.org/doc)**
- **[Downloads](https://www.python.org/downloads)**
- **[Packages](https://pypi.org/)**

## Packages

Developers share code through the [Python Package Index](https://pypi.org/).

Find the official documentation here: https://docs.python.org/3/library/

## Operators

- https://docs.python.org/3/library/operator.html#mapping-operators-to-functions
- https://www.w3schools.com/python/python_operators.asp

```python
a = 1
b = (5-3)
print(a == b)   # False
print(a > b)    # False
print(a <= b)   # True
print(a + b)    # 3
print(b - a)    # 1
print(a * b)    # 2
print(a / b)    # 0.5
print(3**2)     # 9     : Exponent, same as pow(3,2)
print(22 // 7)  # 3     : Floor division
print(22 % 7)   # 1     : Modulus

```

## Flow control

```python
# if...elif...else

i =  1
if i > 0:
	print('Positive')
elif i < 0:
	print('Negative')
else:
	print('Zero')
```

```python
# while 

i = 0
while i < 3:   
    count = count + 1
    print("Hello Geek") 
```

```python
# for-in loop (for-each in other languages)

my_list = ["a", "b", "c"]
for item in my_list:
    print(item)
    
# or go by index by using the range() and len() methods
# https://docs.python.org/3/library/functions.html#func-range
# https://docs.python.org/3/library/functions.html#len

for item in range(len(my_list)):
    print list[index]
```

## Functions

```python
# Define a function with the 'def' keyword

def my_function(name, place = 'USA'):
  return (name + ' is from ' + place)

print(my_function('John Doe'))
print(my_function('John Doe', 'Ohio'))
```

## String manipulation

```python
s = 'foo bar'
s.startswith('foo')           # True
s.endswith('bar')             # True
s.repalce('bar', 'bat')       # 'foo bat'
s.find('b')                   # 0
s.rfind('o')                  # 2
s[0].upper() + s[1:].lower()  # 'Foo bar'
```
## Using String`.format()`

- [docs.python.org | Format String Syntax](https://docs.python.org/3/library/string.html#formatstrings)
- [docs.python.org | Format Specification Mini-Language](https://docs.python.org/3/library/string.html#formatspec)
- [LearnPython.com | String format() cheat sheet](https://learnpython.com/blog/python-string-formatting/)
- [RealPython.com | Python string format techniques](https://realpython.com/python-formatted-output/)

```python
# Template strings using string.format()

txt = "My name is {fname}, I'm {age}."
txt = txt.format(fname = "John", age = 34)
print(txt) # My name is John, I'm 34.
```

The `.format()` method is called on a template string that contains *replacement fields*.  A replacement field is identified by a pair of curly braces; a simple pair of braces with nothing inbetween, literally `{}`, is a valid replacement field. Replacement fields have three optional parts: *name*, *conversion*, and *format_spec*.  The first part, the name, does not need a delimiter. The second part, the conversion directive, starts with a `!` (exclaimation).  The final part, the format_spec, starts with a `:` (colon).

`{[<name>][!<conversion>][:<format_spec>]}`

### The replacement field's `<name>` component 

The `<name>` component simply indicates which argument from the argument list is inserted into the given location.  The value provided may be a scalar value, a dict or a list.

### The replacement field's `<conversion>` component

This part is identifed by an exclaimation point followed by either an s, r, or a.  This specifies which method is used to convert the passed value to a string.  The default is the `str()` method, which is denonted with `!s`.

|Value|Meaning|
|---|---|
|`!s`|(default) convert string using `str()`.|
|`!r`|convert to string using `repr()`.|
|`!a`|convert to string using `ascii()`.|

### The replacement field's `<format_spec>` component

The last part is the `<format_spec>`. This component has a rather complex format itself.  Note that it is quite common to only use this component.  The component is identified with a `:` (colon).

`:[[<fill>]<align>][<sign>][#][<padUsing>][<width>][<group>][.<precision>][<type>]`

|Subcomponent|Effect|
|---|---|
|`:`| Separates the `<format_spec>` from teh rest of the replacement field.|
|`<fill>`|Specifies how to pad values that don't occupy the entire field width.|
|`<align>`|Specifies how to justify values that don't occupy the entire field width.|
|`<sign>`|Controls whether a leading sign is included for numeric values.|
|`#`|Selects an alternate output form for certain presentation types.|
|`<padUsing>`|Causes values to be padded on the left with this character instead of ASCII space.|
|`<width>`|Specifies the minimum width of the output.|
|`<group>`|Specifies a grouping character (thousands separator) for numeric output.|
|`<precision>`|Specifies the number of digits after the decimal point for floating-point presentation types, and the maximum output width for string presentation types.|
|`<type>`|Specifies presentation type, which is the type of conversion performed on the corresponding argument.|

The `<type>` subcomponent:

|Value|Presentation Type|
|---|---|
|`b`|binary integer|
|`c`|single character|
|`d`|decimal integer|
|`e` or `E`|scientific notation|
|`f` or `F`|floating point|
|`g` or `G`|floating point or scientific|
|`o`|octal integer|
|`s`|string|
|`x` or `X`|hexidecimal integer|
|`%`|percentage|

## Regular Expressions

```python
import re
s = 'lorem ipsum dolor 123'
match = re.search("/d{1,3}$", s)
print(match is None)              # False
print(match.group())              # 123
```
