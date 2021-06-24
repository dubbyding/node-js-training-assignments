# node-js-training-assignments

Assignments on node js training. Codes are mentioned below as links and the output is shown below the links.

# Table of contents

- [Count repeated values in an array](#count-repeated-values-in-an-array)
- [Sum of array](#sum-of-array)
- [Remove repeated values from array](#remove-repeate-values-from-array)
- [Group an object by using it's attributes](#group-an-object-by-using-its-attributes)
- [Node Server and File handling using nodes inbuilt method](#node-server-and-file-handling-using-nodes-inbuilt-method)

# Count repeated values in an array

## Normal way

Code:<br />
[To count repeated values in an array and store it in an object](./count_repeated.js)

Output:<br />
![Counting Repeated Normal Way](./Outputs/count_repeated.png)

## Using reduce

Code:<br />
[To count repeated values in an array using reduce and store it in an object](./count_with_reduce)<br />
Output:<br />
![Counting Repeated using Reduce](./Outputs/count_with_reduce.png)

# Sum of array

Code:<br />
[To calculate the sum of array. I have used recursive way](./sum_of_loop.js)<br />
Output:<br />
![Sum of array](./Outputs/sum_of_array.png)

# Remove repeated values from array

Code:<br />
[To remove the repeated values from the array](./uniqueWithReduce.js)<br />
Output:

![Unique valued array](./Outputs/uniqueWithReduce.png)

# Group an object by using it's attributes

eg:- var res = groupBy(laptops, 'brand');

expected result {<br />
dell:[{}, {}, {}]<br />
}<br />
Code:<br />
[To group attributes of objects using the value of attributes](./grouping.js)<br />
Output:
![Grouping by attributes](./Outputs/grouping.png)

# Node Server and File handling using node's inbuilt method

Code:<br />
[To create a node server and file handling using 'fs' node's inbuilt method](./NodeApi/server.js) <br />
[File reading js module](./NodeApi/fileRead.js)<br />
[File write js module](./NodeApi/fileWrite.js)<br />
[Files Delete from files folder js module](./NodeApi/filesFolderClear.js)<br />
Outputs:<br />
![Noder Server and File Handling](./Outputs/nodeServerandFileHandling.png)
