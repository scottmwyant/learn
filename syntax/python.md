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
print(3**2)     # 9
print(22 // 7)  # 3
print(22 % 7)   # 1

```

## Flow control

if / elif / else

```python
i =  1
if i > 0:
	print('Positive')
elif i < 0:
	print('Negative')
else:
	print('Zero')
```

while loop

```python
i = 0
while i < 3:   
    count = count + 1
    print("Hello Geek")
    
```

for-in loop (for-each in other languages)

```python
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
def my_function(name, place = 'USA'):
  return (name + ' is from ' + place)

print(my_function('John Doe'))
print(my_function('John Doe', 'Ohio'))
```
