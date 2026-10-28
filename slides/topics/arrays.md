---
marp: true
theme: cpp-course
title: Arrays
paginate: true
---
<!-- source-slide: 56; source-week: Week 8 -->
<!-- _class: content -->

# Sequences

- Game leaderboard
- Scores per test
- Temperature per hour of day
- …

---

<!-- source-slide: 57; source-week: Week 8 -->
<!-- _class: content -->

# Sequence of data types : Arrays

- int days[7];
  - Variables ‘days'
  - Memory locations : 7 x sizeof(int) = ?
  - 1st : day[0];
  - 7th : day [?]
- float avg[12]
  - Variable ‘avg'
  - Memory locations : 12 x sizeof(int) = ?
  - 1st : ?
  - 12th : ?

---

<!-- source-slide: 58; source-week: Week 8 -->
<!-- _class: content compact -->

# Array syntax

- int days[7];
  - one dimensional array
  - [ ] square backets require a constant value
  - Index starts from 0
  - Access nth value using days[n];
  - Initialization
    - Option 1
      - int days[7] = {1,2,3,4,5,6,7};
    - Option 2 : omit the size
      - int days[  ] =  {1,2,3,4,5,6,7};
    - Or GIGO ??
- * Array size is constant, cant change after creation.

---

<!-- source-slide: 59; source-week: Week 8 -->
<!-- _class: content compact -->

# Memory layout

- int days[7]  = {1,2,3,4,5,6,7};
  - Layout is Sequential
    - Next number is right after the previous … all the way to end
  - Caution
    - Do not go beyond the bound of array … that is GIGO

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |

| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- |

---

<!-- source-slide: 60; source-week: Week 8 -->
<!-- _class: exercise compact -->

# Lab

- Q1:average of 5 numbers
  - Get 5 numbers from user
    - Print the average of the 5 numbers
    - Hints
      - cin>>num[i];
      - sum = sum + num[i];
      - loops
    - * Consider the right data type for average…
- Q2 : search whether a number exists in above array
  - (After printing average In the above entered numbers )
  - Get user to enter a search num
  - Return at what index location it exists in the array.

---

<!-- source-slide: 61; source-week: Week 8 -->
<!-- _class: content -->

# Names are sequence of characters

- char name[100];
- Characters arrays are ‘null' terminated
  - E.g name = "ChatGPT";
  - if (name[7]== ‘\0') would be true.
- So if names are array of chars…
  - What is array of names ??

---

<!-- source-slide: 62; source-week: Week 8 -->
<!-- _class: content -->

# Double dimension arrays

- int nums[5][3] ;
  - 5 row of 3 integers each
  - 5 x 3 = 15 total integers
- char names[15][100];
  - 15 names … max size of 100 each.
  - 15 x 100 = 1500 characters
- How to create 10 rows of 100 floats each ?
  - What is the total number of floats used ?
  - What is the total memory size.

---

<!-- source-slide: 63; source-week: Week 8 -->
<!-- _class: content compact -->

# Memory layout : double dimension

- int nums[5][3] ;
  - 2 dimension = 2d Matrix
  - Rows are horizontal
  - Columns are vertical
  - Total 5x3 = 5 cells

| 0 | 1 | 2 |
| --- | --- | --- |

| 0 |
| --- |
| 1 |
| 2 |
| 3 |
| 4 |

|  |  |  |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

---

<!-- source-slide: 64; source-week: Week 8 -->
<!-- _class: exercise -->

# Assignment 1

- Get 5 numbers  from user
  - Print the highest number from the five.
  - E.g. user enters 5,6,2,3,7
  - Print
    - The highest number is : 7

---

<!-- source-slide: 65; source-week: Week 8 -->
<!-- _class: project challenge -->

# Boss :Assignment

- Get 5 numbers from user
  - Print all the numbers in sorted order
  - E.g. user enters 5,6,2,3,7
  - Print
    - 2,3,5,6,7
- Hint
  - * would need multiple loops
  - * may need to know how to SORT data
    - Sorts have not been taught ,do the best you can.
