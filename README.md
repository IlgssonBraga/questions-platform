# Questions platform using Node.js with EJS

<p align="center">
  <img src="https://www.kindpng.com/picc/m/338-3389065_redis-logo-svg-hd-png-download.png" alt="redis-caching" width="500"/>
</p>

[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)](https://www.npmjs.com/)
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](LICENSE.md)

# :page_with_curl: About

This project is a small full stack application using the Node.js renderer for
static files. Users can add questions, read and answer questions.

# :wrench: Technologies used

<ul>
  <a href="https://nodejs.org/en//"><li>Node.js</li></a>
  <a href="https://expressjs.com"><li>Express</li></a>
  <a href="https://www.npmjs.com/package/nodemon"><li>Nodemon</li></a>
  <a href="https://www.npmjs.com/package/sucrase"><li>Sucrase</li></a>
  <a href="https://www.npmjs.com/package/body-parser"><li>Body parser</li></a>
  <a href="https://ejs.co/"><li>Ejs</li></a>
  <a href="https://sequelize.org/"><li>Sequelize</li></a>
  <a href="https://www.docker.com/"><li>Docker</li></a>
  
</ul>

# :hammer: How to run

In this project, i used [mysql](https://hub.docker.com/_/mysql/) in a [docker](https://www.docker.com/) container.
To install docker just follow the steps [here](https://docs.docker.com/get-docker/).
After this, run:

```
$ docker run --name mysql-questions-platform -e MYSQL_ROOT_PASSWORD=your_password -p 3306:3306 -d mysql
```

Now, clone this repo, install all dependencies and run the server:

```
$ git clone https://github.com/IlgssonBraga/questions-platform.git
$ cd questions-platform
[redis-cache]$ npm install
[redis-cache]$ npm run dev
```

Now, enjoy!!! :rocket::rocket:

# :memo: License

This project is under MIT license. Look [License](LICENSE.md) for more details!

---

Made by [Ilgsson Braga](https://github.com/IlgssonBraga) with :heart:
