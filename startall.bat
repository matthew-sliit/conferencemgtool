cd server
start "SERVER" cmd /k "echo Starting Server... & npm start"
cd ..\
cd client\user
start "USER SERVICE" cmd /k "echo Starting User Service... & npm start"
cd ..\
cd visitor
start "VISITOR SERVICE" cmd /k "echo Starting Visitor Service... & npm start"
start "" "http://localhost:1234"