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