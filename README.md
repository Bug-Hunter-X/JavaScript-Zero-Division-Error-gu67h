# JavaScript Zero Division Bug

This repository demonstrates a common yet easily missed bug in JavaScript related to division by zero. The bug occurs when a function is designed to handle zero values in its input parameters, but it doesn't correctly account for the scenario when both parameters are zero. 

## Bug Description:
The `myFunction` function intends to return 0 if either `a` or `b` is 0. However, if both `a` and `b` are 0, the division operation still takes place, resulting in an error, specifically `Infinity`.

## Solution:
The solution involves adding an explicit check for the case where both `a` and `b` are 0 before performing the division.