---
marp: true
theme: cpp-course
title: Week 06
paginate: true
---
<!-- unit: while-practice -->

<!-- source-slide: 48; source-week: Week 6 -->
<!-- _class: exercise -->

# While Loop Practice

Assume positive integer inputs unless a task says otherwise. Trace your loop before running it.

| Level | Task | Check your result |
| --- | --- | --- |
| Warm-up | Print the integers from `1` through `10`. | First `1`, last `10` |
| Warm-up | Read `N`; sum the integers from `1` through `N`. | `N = 5` gives `15` |
| Core | Sum the first `N` positive odd numbers: `1 + 3 + 5 + ...`. | `N = 4` gives `16` |
| Core | Find the greatest common factor of two positive integers. | `GCF(6, 9) = 3` |
| Challenge | Find the smallest positive integer divisible by every integer from `1` through `20`. | Result: `232792560` |

- Decide what your loop variable means and update it on every pass.
- Check boundary cases such as `N = 1` and equal GCF inputs.
