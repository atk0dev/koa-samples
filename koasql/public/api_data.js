define({ "api": [
  {
    "type": "post",
    "url": "/applications",
    "title": "",
    "group": "Applications",
    "name": "createApplication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>User must provide first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>User must provide last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User must provide email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "jobId",
            "description": "<p>User must provide Job Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"firstName\": \"John\",\n \"lastName\": \"Doe\",\n \"email\": \"email@domain.com\",\n \"jobId\": 1\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Application",
            "description": "<p>New application created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200OK\n{\n \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/applications",
        "type": "curl"
      }
    ],
    "description": "<p>Logged in user can apply a job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n \"authorization\": \"token value\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/application.controller.js",
    "groupTitle": "Applications"
  },
  {
    "type": "post",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "createJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>User must provide job title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CompanyId",
            "description": "<p>User must provide Compant Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"title\": \"Job Title\",\n \"CompantId\": 1\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Job",
            "description": "<p>New job created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200OK\n{\n \"id\": 1,\n \"CompanyId\": 1,\n \"title\": \"Job Title\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>Logged in user can create new job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n \"authorization\": \"token value\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "",
    "group": "Jobs",
    "name": "getJobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Job",
            "description": "<p>List of jobs with candidates</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>Logged in user can view all jobs</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n \"authorization\": \"token value\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "Users",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User must provide email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User must provide valid password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<p>JWT to access protecred routes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200OK\n{\n \"token\": \"Token\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>Authenticate User with email and password</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "signupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User must provide email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User must provide password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params:",
          "content": "{\n \"email\": \"test@email.com\",\n \"password\": \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup successfull</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200OK\n{\n \"msg\": \"Signup successfull\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create new account</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
