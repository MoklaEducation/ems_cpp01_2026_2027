---
marp: true
theme: cpp-course
title: Week 04
paginate: true
---
<!-- unit: computer-review -->

<!-- source-slide: 26; source-week: Week 4 -->
<!-- _class: content -->

# Quick Review: Bits, Types, and Time

- A bit is one binary digit: `0` or `1`.
- C++ types describe how a value is represented and used.
  - Examples: `int`, `float`, `char`, `bool`
  - Type modifiers include `signed`, `unsigned`, `short`, and `long`.
- A hertz (Hz) is one cycle per second.
  - `1 kHz = 1,000 Hz`; `1 MHz = 1,000,000 Hz`.
- Clock rate is one measure of a processor, not a complete speed score.

---

<!-- source-slide: 27; source-week: Week 4 -->
<!-- _class: content -->

# Measuring Computer Work

| Measure | What it counts | Example context |
| --- | --- | --- |
| FLOPS | Floating-point operations per second | Scientific calculations |
| IOPS | Input/output operations per second | Storage devices |
| Hz | Cycles per second | A clock signal |

- FP16, FP32, and FP64 describe floating-point precision formats.
- Floating-point values approximate many decimal fractions; they are useful, not forbidden.
- Division is supported too; its cost depends on the processor and the operation.

---

<!-- source-slide: 28; source-week: Week 4 -->
<!-- _class: content -->

# Computer Trends

| Trend | What it means |
| --- | --- |
| More transistors | More components can fit in a chip generation |
| More cores | A processor can work on multiple instruction streams |
| More connected | Devices exchange data over networks |
| More efficient | Designers aim for more work per unit of energy |

- These are broad trends, not guarantees for every computer or chip.
- A fast processor is only one part of overall system performance.
---

<!-- unit: conditionals -->

<!-- source-slide: 29; source-week: Week 4 -->
<!-- _class: content -->

# Decisions in C++

- A conditional chooses which statements run.
- Use `if` / `else` for conditions and ranges.
- Use `switch` when one value is matched against exact choices.
- Structured branches keep the path through a program readable.

---

<!-- source-slide: 30; source-week: Week 4 -->
<!-- _class: content -->

# One-Way Decision: `if`

Run the body only when the condition is true.

```cpp
int temperature = 32;

if (temperature > 30) {
    cout << "It is warm.\n";
}
```

- If the condition is false, execution continues after the closing brace.
- A comparison produces `true` or `false`.

---

<!-- source-slide: 31; source-week: Week 4 -->
<!-- _class: content -->

# Two-Way Decision: `if` / `else`

Exactly one branch runs.

```cpp
int age = 16;

if (age >= 18) {
    cout << "Adult\n";
} else {
    cout << "Not an adult yet\n";
}
```

- The `else` branch handles every case not accepted by the `if` condition.

---

<!-- source-slide: 32; source-week: Week 4 -->
<!-- _class: content -->

# Several Outcomes: `if` / `else if`

Conditions are tested from top to bottom; the first true branch runs.

```cpp
if (score >= 90) {
  cout << "A\n";
} else if (score >= 75) {
  cout << "B\n";
} else if (score >= 60) {
  cout << "C\n";
} else {
  cout << "Keep practicing\n";
}
```

- Put the most restrictive threshold first.

---

<!-- source-slide: 33; source-week: Week 4 -->
<!-- _class: content -->

# Relational Operators

| Meaning | Operator | Example |
| --- | --- | --- |
| Less than | `<` | `3 < 5` |
| Greater than | `>` | `8 > 2` |
| Less than or equal | `<=` | `4 <= 4` |
| Greater than or equal | `>=` | `7 >= 6` |
| Equal to | `==` | `age == 18` |
| Not equal to | `!=` | `choice != 0` |

- Use `==` to compare; a single `=` assigns a value.

---

<!-- source-slide: 34; source-week: Week 4 -->
<!-- _class: exercise -->

# Lab: Say a Digit

Write a program that reads one integer and prints its English name.

| Input | Expected output |
| --- | --- |
| `0` | `zero` |
| `6` | `six` |
| `9` | `nine` |
| `-1` or `10` | `Not a single digit` |

- Use an `if` / `else if` chain and one final `else` for invalid input.
- Test both ends of the valid range and at least one invalid value.

---

<!-- source-slide: 35; source-week: Week 4 -->
<!-- _class: content -->

# Exact Choices: `switch`

Use `switch` when one integral value selects among exact cases.

```cpp
switch (day) {
    case 1: cout << "Sunday\n"; break;
    case 2: cout << "Monday\n"; break;
    case 3: cout << "Tuesday\n"; break;
    default: cout << "Invalid day\n";
}
```

- `break` exits the switch; without it, execution can continue into the next case.
- `default` handles values that do not match a listed case.

---

<!-- source-slide: 36; source-week: Week 4 -->
<!-- _class: exercise -->

# Lab: Day of the Week

Read an integer from `1` through `7` and print its day using `switch`.

| Input | Expected output |
| --- | --- |
| `1` | `Sunday` |
| `4` | `Wednesday` |
| `7` | `Saturday` |
| `0` or `8` | `Invalid day` |

- Add a `break` to each day case and a `default` case.
- Check an ordinary case, the last case, and invalid input.

---

<!-- source-slide: 37; source-week: Week 4 -->
<!-- _class: content compact -->

# Assignment: Three-Question Quiz

- Write three questions; give each exactly four numbered choices.
- Read the player's choice and report whether it is correct.
- Add one point for each correct answer; the final score is out of 3.
- Reject choices outside `1` through `4` without awarding a point.

**Example question:** Which city is the capital of the United States?

1. Seattle
2. Los Angeles
3. Washington, D.C.
4. Chicago

- For this first version, ask the three questions one at a time; loops are a later topic.

---

<!-- source-slide: 38; source-week: Week 4 -->
<!-- _class: project challenge -->

# Challenge: Binary Text to Decimal

- Read a non-empty string containing only `0` and `1`.
- Convert it to a base-10 integer; reject any other character.
- Example: `1011` represents decimal `11`.

**Hint:** Read digits left to right. For each digit, update the value with
`value = value * 2 + digit`.

- This challenge combines strings, loops, and branching.
- Test `0`, `1`, `1011`, and an invalid input such as `10a1`.
---

<!-- unit: std-string -->

<!-- source-slide: 89; source-week: Week 4 -->
<!-- _class: content -->

# Text with `std::string`

- Include `<string>` to use the standard string type.
- A string stores a sequence of characters, such as a name or sentence.
- `cin >> name` reads one word; `getline` can read spaces too.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    std::cout << "Your name: ";
    std::getline(std::cin, name);
    std::cout << "Hello, " << name << "!\n";
}
```

- If you use `getline` after `cin >>`, handle the leftover newline first.
