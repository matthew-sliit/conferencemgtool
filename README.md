# conference Management Tool
Group project for Application Frameworks Assignment

How to configure:   
In directories;   
&nbsp;1.client/user   
&nbsp;2.client/visitor   
&nbsp;3.server  
<pre>$ npm install</pre>

### Project Architecture
```bash
│   README.md
│
├───.idea
├───client
│   ├───user
│   │   │   index.html
│   │   │   index.jsx
│   │   │   package-lock.json
│   │   │   package.json
│   │   │   resource.config.js
│   │   │
│   │   ├───assets
│   │   ├───Component
│   │   │   ├───Admin
│   │   │   ├───Editor
│   │   │   ├───Reviewer
│   │   │   └───User
│   │   └───tests
│   └───visitor
│       │   App.jsx
│       │   index.html
│       │   index.jsx
│       │   package-lock.json
│       │   package.json
│       │   resource.config.js
│       │
│       ├───assets
│       ├───Component
│       └───tests
└───server
    │   .env
    │   package-lock.json
    │   package.json
    │   server.js
    │
    ├───api
    │   │   adminlogin.api.js
    │   │   login.api.js
    │   │
    │   ├───common
    │   │       roles.js
    │   │
    │   ├───db
    │   │       mongodb.api.js
    │   │
    │   └───util
    │           username-generator.js
    │
    ├───cert
    ├───config
    ├───files
    │   ├───temp
    │   └───user
    ├───routes
    │       home.router.js
    │       login.router.js
    │
    └───tests
            login.api.test.js
```
