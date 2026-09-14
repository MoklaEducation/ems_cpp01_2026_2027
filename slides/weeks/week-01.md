---
marp: true
theme: cpp-course
title: Week 01
paginate: true
---
<!-- unit: introduction -->

<!-- source-slide: 1; source-week: Week 1 -->
<!-- _class: title -->

# Intro to Programming

- C/C++
- Sankalp Gupta
- moklaeducation@gmail.com

---

<!-- source-slide: 2; source-week: Week 1 -->
<!-- _class: content -->

# Learning Goals

- Comfort with
  - Basics of C/C++
  - Basics of Computer Science
- Familiarity with IDE
  - Visual Studio Community Edition
- Thinking logically
  - i.e. One step at a time
  - And Visualizing how computer works
- Independence of technology

---

<!-- source-slide: 3; source-week: Week 1 -->
<!-- _class: content -->

# Why C/C++

- Foundational understanding
  - Understand Computer Science
- Speed and control
  - Fastest programming language
- Really small programming language
  - C has 32 keywords
  - C++ has 92 keywords as of 2023
- Makes you digital native

---

<!-- source-slide: 4; source-week: Week 1 -->
<!-- _class: content -->

# When NOT C/C++?

- Slower manual speed of writing code
- Don't care about speed
- Don't care about deep Computer Science
  - Although this may not be achievable
---

<!-- unit: computer-foundations -->

<!-- source-slide: 5; source-week: Week 1 -->
<!-- _class: content -->

# Bit : Smallest unit of memory

- Bits are used for representing everything
- Have 2 states : 0 and 1 , like a  bulb
  - On : 1
  - Off : 0
- Nibble : 4 bits
- Byte : 8 bits
- int (integer ) 4 bytes
- char (character ) 1 byte

---

<!-- source-slide: 6; source-week: Week 1 -->
<!-- _class: content -->

# Hertz : Unit of time and speed in Computers

- 1 Hertz : once per second
  - 1 unit of work per clock instruction
- Modern processors
  - Measured in Giga hertz
  - High Core Counts
  - More instructions
---

<!-- unit: hello-world -->

<!-- source-slide: 7; source-week: Week 1 -->
<!-- _class: content -->

# Hello World

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World";
    return 0;
}
```

---

<!-- source-slide: 8; source-week: Week 1 -->
<!-- _class: content -->

# Print a diamond pattern

```text
  *
 ***
*****
 ***
  *
```

---

<!-- source-slide: 9; source-week: Week 2 -->
<!-- _class: diagram -->

# Running the program : model

<div class="system-model">
  <div class="component cpu"><strong>CPU</strong><span>Executes instructions</span></div>
  <div class="component ram"><strong>RAM</strong><span>Active programs and data</span></div>
  <div class="component storage"><strong>Storage</strong><span>Files and saved programs</span></div>
</div>

Data and instructions move from storage into RAM so the CPU can execute them.
