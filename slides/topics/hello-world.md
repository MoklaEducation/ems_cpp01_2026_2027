---
marp: true
theme: cpp-course
title: Hello World
paginate: true
---
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
