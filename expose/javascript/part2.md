1. it will return the length of prices.length because var is not local, so it can be accessed anywhere.
2. the most recent discounted price is printed out, due to it being var.
3. It will return the most recent finalprice since it is a var, and thus is global.
4. the function will return an array of all the discounted prices, the one labeled discounted. It is because that is what is returned and it is inside the function as well as var.
5. There will be an error, the i is now local to the for loop and cannot be returned.
6. There will be an error, the discountedprice is inside the for loop and that is what is being returned, which is not possible since discountedprice is a local variable inside the for loop scope.
7. There will be no error, since finalPrice is inside the function scope and is what is being returned.
8. it will return the array inside discounted, since its inside the local scope and nothing is const.
9. i will return an error since the i is inside local scope of the for loop.
10. the number inside of length will be printed, since its a const and not being modified. It would be the length of the price variable.
11. the function would return an empty array, no errors since its not being directly changed. It just wouldn't change the contents of the array.
<!-- Picture then question -->

12a. student.name

12b. Student['grad year']

12c. student.greeting()

12d. student["Favorite Teacher"].name

12e. student.courseLoad[0]

13a. '32', converted it to a string

13b. 1, converted the 3 to a int

13c. 3, nothing is added

13d. "3null" , the null is a string

13e. 4 , true is a 1 inside since its boolean

13f. 0, nothing + false (which is a 0) is 0

13g. '3undefined' , undefined is a string

13h. NaN , no data is available in there 
==========================================
14a. True, the 2 is converted to a int

14b. false, the 1 comes before 2 as a string

14c. true, Both are converted to same numerical value

14d. false, different types

14e. false, different types

14f. true, boolean(parameter) only cares if its not zero

15. The === is a true equality, as in same type and everything

17. [2,4,6]
18. 