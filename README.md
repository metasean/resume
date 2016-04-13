---
NOTE
----

I recently tried to make some updates to my hosted Heroku version of this app, and things started failing.  I believe this is happening because MongoLab (the Heroku MongoDB provider I used) has forced an upgrade to MongoDB 3 (per http://stackoverflow.com/a/36181950), but I haven't had a chance to upgrade the app itself.

As a result, the demonstration site does not work and, obviously, the deployment notes won't work.

---


First things first, this application desperately needs refactoring.   It is far from DRY, has no tests, has a monstrosity for a mainController, and -while functional- the administrative page is ugly and non-Angular-ish.  ("If you're not embarrassed by the first version of your product, you've launched too late." ~Reid Hoffman)  But for recently learning MongoDB and Angular, this was a decent first go and I'm learning a ton from refactoring!

Demonstration
-------------
 - Initial Demo Resume based on Dr. Who (may have been changed based on others looking at the demo) - https://metasean-resume.herokuapp.com/#/resume
 - Administrative interface - https://metasean-resume.herokuapp.com/#/admin


Running Locally
---------------

To run locally:

1. each in a new terminal tab, `cd` to project directory then:

	a. `sudo mongod`
	b. `mongo`
	c. `nodemon`

2. in web browser:
	- navigate to `localhost:4200` to access the main homepage (port is defined in server/app.js)


Heroku Deployment Notes
-----------------------

At some point or another I tried to deploy versions of this app on RedShift, Heroku, and NodeJitsu with Compose MongoDB and ran into a range of problems.  In the end, Heroku with MongoLab was the hands-down winning combination!

### Add-on a MongoLab instance
1. in an unused terminal tab, `cd` to project directory
2. `heroku addons:add mongolab`
The database should automagically be connected.
