---
marp: true
theme: cpp-course
title: Input, Output, and Processing
paginate: true
---
<!-- source-slide: 18; source-week: Week 3 -->
<!-- _class: content -->

# Input, Output, and Processing for Humans

| Activity | Input | Processing | Output |
| --- | --- | --- | --- |
| Speech | A thought | Form words | Spoken words |
| Reading | Written words | Understand meaning | Memory or response |
| Conversation | What you hear | Understand and decide | What you say |

---

<!-- source-slide: 19; source-week: Week 3 -->
<!-- _class: content -->

# I/O and Processing for Computers

| Program | Input | Processing | Output |
| --- | --- | --- | --- |
| Video game | Controller | Game logic | Screen and sound |
| Movie player | Network data | Decode video | Picture and audio |
| Console app | Keyboard values | Program logic | Printed text |

---

<!-- source-slide: 20; source-week: Week 3 -->
<!-- _class: content -->

# Standard Input

- `cin` reads keyboard input and stores it in variables
- `>>` is the extraction operator
- Works with types such as `char`, `int`, and `float`

```cpp
int age;
cin >> age;
```

---

<!-- source-slide: 21; source-week: Week 3 -->
<!-- _class: content -->

# Standard Output

- `cout` writes data to the console
- `<<` is the insertion operator
- Works with variables, literals, and constants

```cpp
int age = 172;
cout << age;
```

---

<!-- source-slide: 22; source-week: Week 3 -->
<!-- _class: content -->

# Operators >>,<<

- Extraction and insertion operators can be chained

```cpp
cin >> age >> name;
cout << age << name;
```

- `"\n"` starts a new line
- `endl` starts a new line and flushes the output stream

```cpp
cout << "\n";
cout << endl;
```

---

<!-- source-slide: 23; source-week: Week 3 -->
<!-- _class: exercise -->

# Lab

1. Define one `char`, one `int`, and one `float` variable.
2. Read all three values with one chained `cin` statement.
3. Print a label and value for each variable with `cout`.
4. Use both `"\n"` and `endl` in the output.

```cpp
cin >> letter >> count >> price;
cout << letter << " " << count << " " << price;
```

---

<!-- source-slide: 24; source-week: Week 3 -->
<!-- _class: exercise -->

# Assignment: Mad Libs Story

- Ask the user for two adjectives, two nouns, and one verb.
- Store each answer in a `string` variable.
- Insert the answers into a short story.
- Print the completed story with `cout`.

```cpp
string adjective1, noun1, verb, adjective2, noun2;
```

---

<!-- _class: exercise compact -->

# Mad Libs: Example Solution

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string adjective1, noun1, verb, adjective2, noun2;

    cout << "Adjective: "; cin >> adjective1;
    cout << "Noun: ";      cin >> noun1;
    cout << "Verb: ";      cin >> verb;
    cout << "Adjective: "; cin >> adjective2;
    cout << "Noun: ";      cin >> noun2;

    cout << "A " << adjective1 << " " << noun1
         << " loved to " << verb << ". Then it met a "
         << adjective2 << " " << noun2 << ".\n";
}
```

---

<!-- source-slide: 25; source-week: Week 3 -->
<!-- _class: project challenge compact -->

# Boss Assignment

- Input the student name, subject, and marks out of 100.

| Grade | C++ condition |
| --- | --- |
| A | `marks >= 90` |
| B | `marks >= 75 && marks < 90` |
| C | `marks >= 60 && marks < 75` |
| D | `marks < 60` |

- Output the student's grade.
- **Challenge:** Process multiple students and count each grade.
- **Hint:** Use `if` / `else if`; the challenge also needs a loop.
