---
marp: true
theme: cpp-course
title: C-Style Strings
paginate: true
---
<!-- source-slide: 75; source-week: Week 11 -->
<!-- _class: content compact -->

# Strings in C++

- String are made of characters
- Fundamentally it is array of char
  - char name[10];
- They are null terminated
  - Last character in array is null : ‘\0'
- Example
  - char greeting[20] = "hello;
  - char name[20] = "Adam";
- * there is a second advanced type of string in C++, std::string
  - This is fundamentally different from array of char above
  - (But it is also very similar)

---

<!-- source-slide: 76; source-week: Week 11 -->
<!-- _class: content -->

# String : fundamentals

```cpp
#include <iostream>
#include <string.h>

using namespace std;

void stringHello()
{
    char greeting[50] = "Hello World!";
    int index = 0;

    while (greeting[index] != '\0')
    {
        cout << greeting[index];
        index++;
    }

    cout << endl << "length of string: " << index;
    cout << endl << "length of string: " << strlen(greeting);
}
```

---

<!-- source-slide: 77; source-week: Week 11 -->
<!-- _class: content compact -->

# String operations : include<string.h>

- strlen(): Returns the length of a string (excluding the null terminator).
- strcpy(): Copies one string to another.
- strcat(): Concatenates two strings.
- strcmp(): Compares two strings.
- strstr(): Finds the first occurrence of a substring within a string.
- Some compiler will require to use _s versions of these functions
  - E.g. strcpy_s instead of strcpy

---

<!-- source-slide: 78; source-week: Week 11 -->
<!-- _class: content -->

# Using string functions

```cpp
#include <iostream>
#include <string.h>

using namespace std;

int main()
{
    char greeting[] = "Hello";
    char name[20];
    cin >> name;

    char fullMessage[50];
    strcpy_s(fullMessage, greeting);
    strcat_s(fullMessage, ", ");
    strcat_s(fullMessage, name);
    strcat_s(fullMessage, "!");

    cout << endl << fullMessage;
    return 0;
}
```

---

<!-- source-slide: 79; source-week: Week 11 -->
<!-- _class: content -->

# String operations

- How do you find string sizes ?
  - strlen
- How do you compare strings  ?
  - For <,>,==
  - *Use strcmp

---

<!-- source-slide: 80; source-week: Week 11 -->
<!-- _class: content -->

# Strcmp example

```cpp
void stringCompare()
{
    char first[] = "Hello";
    char second[] = "World";
    char third[] = "Hello";

    int result = strcmp(first, second);
    if (result == 0)
        cout << first << " is identical to " << second << endl;
    else if (result < 0)
        cout << first << " is less than " << second << endl;
    else
        cout << first << " is greater than " << second << endl;

    result = strcmp(first, third);
    if (result == 0)
        cout << first << " is identical to " << third << endl;
}
```

---

<!-- source-slide: 81; source-week: Week 11 -->
<!-- _class: exercise -->

# Assignment

- Convert string to upper cases
  - hello ->HELLO
  - ChatGPT -> CHATGPT
- Reverse a string
  - Hello -> olleH
  - six-seven -> neves-xis

---

<!-- source-slide: 82; source-week: Week 11 -->
<!-- _class: project challenge -->

# Boss Assignment

- Count words in a sentence
  - "A quick brown fox jumps over the lazy dog" -> 9
  - "Pa may we all go to" -> 6
- Reverse the words of the sentence in place
  - "A quick brown fox jumps over the lazy dog"
    - "A kciuq nworb xof spmuj revo eht yzal god"
  - "Pa may we all to go"
    - aP yam ew lla ot og"
