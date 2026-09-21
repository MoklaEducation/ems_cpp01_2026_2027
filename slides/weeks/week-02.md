---
marp: true
theme: cpp-course
title: Week 02
paginate: true
---
<!-- unit: data-types -->

<!-- source-slide: 10; source-week: Week 2 -->
<!-- _class: content -->

# Data Types(Primitive/built in)

- bool
- int
  - short(2), long(4)
  - signed,unsigned
- float
  - float(4), double(8) , long double(8,10,16)
- char(1)
  - signed,unsigned
  - wchar_t(2)
- void

---

<!-- source-slide: 11; source-week: Week 2 -->
<!-- _class: content -->

# Variables

- Containers for storing data
- Value can change during execution (unless you don't want it to)

```cpp
int birthyear;
float weight;
char courseGrade;
```

---

<!-- source-slide: 12; source-week: Week 2 -->
<!-- _class: content -->

# Data Types (Derived)

Arrays store multiple values of the same type.

```cpp
char name[100];   // 100 chars, indexes 0-99
int age[10];      // 10 ints, indexes 0-9
float power[20];  // 20 floats, indexes 0-19
```

---

<!-- source-slide: 13; source-week: Week 2 -->
<!-- _class: content -->

# Integer vs floating math

- Floating-point division keeps the fractional part
- Integer division truncates the fractional part

```cpp
float f = 10;
cout << f / 3;  // 3.33333

int i = 10;
cout << i / 3;  // 3
```

---

<!-- source-slide: 14; source-week: Week 2 -->
<!-- _class: content compact -->

# Built-in Type Reference

<div class="callout">For  reference ….</div>

| Type Name | Bytes | Other Names | Range of Values |
| --- | --- | --- | --- |
| int | 4 | signed | -2,147,483,648 to 2,147,483,647 |
| unsigned int | 4 | unsigned | 0 to 4,294,967,295 |
| bool | 1 | none | false or true |
| char | 1 | none | -128 to 127 by default |
| signed char | 1 | none | -128 to 127 |
| unsigned char | 1 | none | 0 to 255 |
| short | 2 | short int, signed short int | -32,768 to 32,767 |
| unsigned short | 2 | unsigned short int | 0 to 65,535 |
| long | 4 | long int, signed long int | -2,147,483,648 to 2,147,483,647 |
| unsigned long | 4 | unsigned long int | 0 to 4,294,967,295 |
| long long | 8 | None | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| unsigned long long | 8 | none | 0 to 18,446,744,073,709,551,615 |
| enum | varies | None |  |
| float | 4 | None | 3.4E +/- 38 (seven digits) |
| double | 8 | None | 1.7E +/- 308 (fifteen digits) |
| long double | 8 | None | Same as double |
| wchar_t | 2 |  | 0 to 65,535 |

---

<!-- source-slide: 15; source-week: Week 2 -->
<!-- _class: content -->

# User Defined Data Type

- Enum
  - Short for enumeration
  - Define a set of named, integer constants

```cpp
enum ESpeed {
    low,
    medium,
    high
};

ESpeed fanSpeed;
fanSpeed = low;
```

---

<!-- source-slide: 16; source-week: Week 2 -->
<!-- _class: content -->

# Code : Greeting with name/age

- Given `char name[100]`, `int birthyear`, and `int currentYear`
- Calculate the age, then print the name and age

```cpp
int age = currentYear - birthyear;

cout << "Hello " << name
     << ", I know your age is: " << age;
```

---

<!-- source-slide: 17; source-week: Week 2 -->
<!-- _class: content -->

# Advanced : Count digits in a number

- Define a number
- Return the number of digits, (assume positive)
  - 129  -> 3
  - 34     -> 2
  - 0        -> 1
- Hints
  - You need to know loops
    - while
  - You need to know integer maths
    - division
