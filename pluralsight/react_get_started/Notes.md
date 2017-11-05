1. npm install -g create-react-app
2. create-react-app my-app
3. npm start to start webpack
4. Debugger for chrome
5. lunch.json
	{
	    "version": "0.2.0",
	    "configurations": [
	        {
	            "type": "chrome",
	            "request": "launch",
	            "name": "Launch Chrome against localhost",
	            "url": "http://localhost:3000",
	            "webRoot": "${workspaceFolder}"
	        },
	        {
	            "type": "chrome",
	            "request": "attach",
	            "name": "Attach to Chrome",
	            "port": 9222,
	            "webRoot": "${workspaceFolder}"
	        }
	    ]
	}
6. npm install -g eslint
7. ESLint extension for VS Code
