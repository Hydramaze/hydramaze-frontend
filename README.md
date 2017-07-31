##* Installation guide *##

1 - Install Node JS

https://nodejs.org/en/

* Validate on command line if the installation was successful running: npm --version


2 - Install Gulp / Bower

npm install -g bower gulp-install


Jonas: problema em gulp-install, no meu funcionou assim: npm install -g bower gulp

* Validate on command line if the instalattion was successfull running: bower --version && gulp --version


3 - Checkout project develop branch.


4 - Go to your local git project directory and start a Terminal or Command there. After run:

bower install
* It will take download of bower dependencies

npm install
* It will take download of node dependencies


5 - Some important tasks:

* (In progress) gulp build - It will generate a "dist" folder with all files on a deliverable structure.
* gulp start - It will start a local server with watching files (a real-time changes/creation watch)
* (In progress) gulp clear - Delete a "dist" and ".tmp" folders



"Stay Hungry. Stay Foolish." (Steve Jobs)