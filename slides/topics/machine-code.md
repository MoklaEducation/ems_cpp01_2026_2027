---
marp: true
theme: cpp-course
title: Code and Machine Execution
paginate: true
---
<!-- source-slide: 39; source-week: Week 5 -->
<!-- _class: content -->

# From C++ Source to Machine Instructions

```cpp
std::cout << "Hello, world!\n";
```

- C++ source is written for people to read and maintain.
- A compiler translates it into instructions for a target processor.
- The processor executes machine-code instructions; assembly is a readable view of instructions.
- The exact instructions depend on the compiler and processor.

---

<!-- source-slide: 40; source-week: Week 5 -->
<!-- _class: content -->

# A Comparison Becomes a Branch

```cpp
if (left > right) {
    std::cout << left;
} else {
    std::cout << right;
}
```

One possible *conceptual* instruction sequence:

```text
COMPARE left, right
JUMP-IF-NOT-GREATER to_else
PRINT left
JUMP to_end
to_else: PRINT right
to_end:
```

- This is pseudocode, not real assembly syntax; processors differ.

---

<!-- source-slide: 41; source-week: Week 5 -->
<!-- _class: diagram -->

# Follow the Branch

```cpp
if (score >= 60) {
    std::cout << "Pass\n";
} else {
    std::cout << "Try again\n";
}
```

| `score` | Test `score >= 60` | Path taken | Output |
| --- | --- | --- | --- |
| `75` | true | first branch | `Pass` |
| `40` | false | `else` branch | `Try again` |

- The condition changes which instruction runs next.
