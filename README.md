# node-js-training-assignments

Assignments on node js training. Codes are mentioned below as links and the output is shown below the links.

# Table of contents

- [Count repeated values in an array](#count-repeated-values-in-an-array)
- [Sum of array](#sum-of-array)
- [Remove repeated values from array](#remove-repeate-values-from-array)
- [Group an object by using it's attributes](#group-an-object-by-using-its-attributes)
- [Node Server and File handling using nodes inbuilt method](#node-server-and-file-handling-using-nodes-inbuilt-method)
- [Express Server and Middlewares](#express-server)

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
[To group attributes of objects using the value of attributes](./grouping.js)

Output:

![Grouping by attributes](./Outputs/grouping.png)

# Node Server and File handling using node's inbuilt method

Code:<br />
[To create a node server and file handling using 'fs' node's inbuilt method](./NodeApi/server.js) <br />
[File reading js module](./NodeApi/fileRead.js)<br />
[File write js module](./NodeApi/fileWrite.js)<br />
[Files Delete from files folder js module](./NodeApi/filesFolderClear.js)<br />
Outputs:<br />
![Node Server and File Handling](./Outputs/nodeServerandFileHandling.png)

![Node Server Write File Default](./Outputs/nodeServerWrite.png)

![Node Server Write File Specific](./Outputs/nodeServerWriteSpecific.png)

![Node Server Read File Default](./Outputs/nodeServerRead.png)

![Node Server Read File Specific](./Outputs/nodeServerReadSpecific.png)

![Node Server Clear Folder](./Outputs/nodeServerClearFolder.png)

# Express Server

Code:<br />
[To create a basic express server with application level middlewares](./ExpressApi/index.js)<br />
[MiddleWare Folder](./ExpressApi/middlewares)<br />

Outputs: <br />
![With Params and query name](./Outputs/Express-Outputs/params-query-name.png)<br />
![With params without query name stopped by middleware](./Outputs/Express-Outputs/stoppedByMiddlewareWithParams.png)<br />
![Without params and query name stopped by middleware](./Outputs/Express-Outputs/stoppedByMiddleware.png)<br />
![With query name in home](./Outputs/Express-Outputs/getRequestInHomeWithParams.png)<br />
![Passing Request To another middleware](./Outputs/Express-Outputs/passingRequestToAnotherMiddleware.png)
