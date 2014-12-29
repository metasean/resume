First things first, this application desperately needs refactoring.  It is far from DRY, has no tests, has a monstrosity for a mainController, and -while functional- the administrative page is ugly and non-Angular-ish.  But for recently learning MongoDB and Angular, this was a decent first go and I'm learning a ton from refactoring!



To run locally:

1. each in a new terminal tab, `cd` to project directory then:

	a. `sudo mongod`
	b. `mongo`
	c. `nodemon`

2. in web browser:
	- navigate to `localhost:4200` to access the main homepage (port is defined in server/app.js)