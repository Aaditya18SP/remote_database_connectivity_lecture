# Hosting your project

## Todays Agenda
1. Hosting a project using MySQL
    1. Database and backend on a single machine
    2. Using separate machines
2. Hosting Project that uses MongoDB

## Introduction
We are going to cover how to get your project online, so that it can be accessed anytime and from anywhere. 
There are various technologies to do so. Today we will be covering the following:-
1. PHP+Mysql
2. Node+mysql
3. MongoDB

## Hosting a project using MySQL

Depending on hosting provider you use, there can be two scenarios. 
- In which the provider only allows access to the database via its own machine.
- In which provider allows external machines also to connect to the database. 

#### PHP+MYSQL hosting
Usually, in this scenario most free hosting providers only allow to the database via their machine.

![Same machine hosting image](https://raw.githubusercontent.com/Aaditya18SP/remote_database_connectivity_lecture/refs/heads/main/images/db_connect_localhost.png)

Hosting provider:[https://www.infinityfree.com/](https://www.infinityfree.com/)



#### Using separate machines
If the hosting provider allows access to the database from external machines and you choose to use it, this is how you can do it.

![separate machines image](https://raw.githubusercontent.com/Aaditya18SP/remote_database_connectivity_lecture/refs/heads/main/images/external_db_connect.png)

##### Using NodeJS and ExpressJS
Hosting provider: [www.webhostmost.com](https://www.webhostmost.com)

Backend Hosting: [https://render.com/](https://render.com/)

Code: In `node_mysql` directory

Backend site: [https://remote-database-connectivity-lecture.onrender.com/friends](https://remote-database-connectivity-lecture.onrender.com/friends)

**STEPS**
1. Create a free account on webhostmost.com
2. open the control/admin panel and create a database.
3. Add a user with remote access
4. Note down the `hostname`, `password`,`user`, `database name`.
5. Connect to the database from the backend code. 
6. Verify everything.


#### Hosting MongoDB 



