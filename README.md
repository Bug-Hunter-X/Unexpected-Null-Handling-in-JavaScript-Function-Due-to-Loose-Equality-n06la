# Unexpected Null Handling in JavaScript

This repository demonstrates a common JavaScript bug related to unexpected null handling stemming from the use of loose equality (==) instead of strict equality (===).  The bug arises when checking for null values but inadvertently catching falsy values, leading to incorrect results.

## Bug Description
The provided `foo` function intends to return `null` only when either `a` or `b` is explicitly `null`. However, due to the use of loose equality, it incorrectly returns `null` for other falsy values like 0, "", or `undefined`.  This can lead to unexpected behavior in applications.