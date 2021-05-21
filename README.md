# Why NoSQL

reason for using NoSQL is that its support not fixed schema model , the structer of table is not fixed.
You can modify the schema according to the current need and you don't have to change the previous stored data.
means if your data is unstructered than NoSQL is best choice for your system.

# schema used in

Basicaly i haved used two schema . One for storing blog and other for comments.

In blog schema i have defined 5 fields id,title,description,date and markdown. it is defined in blogmodels.js file.

In comment schema there are only two fields id and content. It is defined in commentmodels.js file.

# I have used mongodb Atlas online databse for this project.


# UI for all given operation
For the mention operation i have design user interface , So we don't need postman for Api testing . you can validate directly here.

while creating new post there is field for entering id which will be unique for each post.

By using that id you can search, delete and update post.

By using that id you can comment on that post.
s
By using that id you can fetch all comments on that post.
