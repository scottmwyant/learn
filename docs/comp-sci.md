# General Computer Science

## Binary representation of integers

I'd argue that this is one of the most foundational concepts in computer science.  Learning how integers are translated to a binary string quickly surfaces another fundamental topic: data type.  Data types used to represent integers are defined by the number of bits used and whether or not negative values are permitted: *8-bit unsigned integer* and *32-bit signed integer* are examples of integer data types.  The *n-bit* part of the name of course tells you how many bits are used to store a single integer value and the *[un]signed* part of the name tells you if negative values are permitted; if an integer is unsigned, it is always positive.  Integers are most commonly stored in 8, 16, 32, 64 bits.

The data type used determines the range of values that can be represented.  In the following exapmles we'll focus on 8-bit integers for the sake of readibility.  The concepts discussed will scale to any size.  

### Unsigned integers

The 8-bit unsigned integer is probably the best place to start.  This is a series (think string or array) of 8 binary values.  The values are indexed 0-7.  The low index, 0, is the least significant and is on the right end.  The high index (7 for the 8-bit example), is the most significant and is on the left end.

|Description|Exapmle|
|---|---|
|binary values (b)|`01110101`|
|index (n)|`76543210`|

The unsigned integer value of a binary string is the summation of (b * 2^n).  Using the example above:

```
b = [0, 1, 1, 1, 0, 1, 0, 1]
n = [7, 6, 5, 4, 3, 2, 1, 0]
int = (1*2^0) + (0*2^1) + (1*2^2) + (0*2^3) + (1*2^4) + (1*2^5) + (1*2^6) + (0*2^7)
    = 1 + 4 + 16 + 32 + 64
    = 117
```

This means that the range of values that can be represented by an `8-bit unsigned int` data type are 0 to 255 (inclusive).  The min value is of course `0` and the max value is `(2*(2^(n-1))) -1` where `n` is the number of bits used.

Converting an integer to a binary string using the process illustrated with the table below.  The left column starts with the integer value.  The middle column is the int divided by 2 (disregard any fractional remainder, so "floor") and the right column is a 1 where the leftmost column is odd.

|int|int/2|binary|significance|
|---|---|---|---|
|117|58|1|least|
|58|29|0||
|29|14|1||
|14|7|0||
|7|3|1||
|3|1|1||
|1|0|1|most|

`binary = "1110101" = "01110101"`

The binary string can be padded with zeros on the left end to get the right number of bits in the string.

### Signed integers

When we specify that a binary string shall be interpreted as a signed integer, the most significant index (for an 8-bit string, index 7) is no longer interpreted as a `0 or 1` but a `0 or -1`.  This of course means that although the same number of bits are used, the fact that the computer is told to interpret the bits as a *signed* integer the range of integer values that can be represented by 8 bits is now -128 to 127.  Notice that the range is actually still 255, but shifted along the number line so that half of the range is below zero.

Converting an integer to binary is basically the same as the process used for unsigned integers, except the number of bit to be evaluated is one less.  The most significant bit has no bearing if it's value is `0`, and if the value is a `1`, the integer represented by the lower bits is negative.

## Converting binary to hexadecimal (base 16)

Start with a given binary string: `1111011111100`

### 1. Break the string up into groups of 4 bits.

Start from the right.  Should the last grouping not have four bits, fill in with `0`.

`1` `1110` `1111` `1100` = `0001` `1110` `1111` `1100`

### 2. Calculate the decimal equivalent for each 4-bit group

`1` `14`, `15` `12`

### 3. Replace numbers [10-15] with letters [A-F]

Replace two character integers with a single alphabetic character, 10=A, 11=B, 12=C, 13=D, 14=E, 15=F.  The maximum decimal value for a 4-bit grouping is 15, as demonstrated in this exapmle.

`1`, `E`, `F`, `C`

`1111011111100` = `#1EFC`

Reference https://www.youtube.com/watch?v=tSLKOKGQq0Y

