# Simple Node.js API Skills Assessment 

A simple skills assesment task to pull data from an API \([https://api.publicapis.org/entries](https://api.publicapis.org/entries)\), manipulate the data based on arguments passed to the program at run-time and return the number of entries and the entries themselves that match the query as a JSON object.

This repository containers the entire code based used to achieve this goal including all source code, full documentation on the contents of this repository and instructions on how to setup a development environment and run the program.

Also included in this repository is a simple SQL file that contains my response to the third task in the skills assessment to return a sorted list of the number of customers each broker has in a mock database containing a customer and a broker table.

## Setting up a Development Environment

To set up the development environment for this project you must first create a Github account, you can do this by following the link [here](https://github.com/signup).

Next you must make sure several programs are installed on your computer, these programs include:
- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)
- A software development environment e.g. [Visual Studio](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16)

Once you have these programs installed you can download, modify and run the code contained in this repository.

### Using the the Command Line/Terminal

To connect to Github via the command line you must run a few commands on the command line/terminal. First you must ensure git is added to your environment variables, the process for doing this can be found [here](https://docs.alfresco.com/4.2/tasks/fot-addpath.html).

Then you must create a folder where you wish to store the project and then open this folder in the command line/terminal. Once in this directory you can run the following command.

You can clone the repository to your project folder by running the following command.
```
git clone https://github.com/Niten001/xxxx.git
```
You should now have a copy of the master branch of this repository stored locally on your machine for you to edit and run as required.

## Running the project

To run the project on your local machine once you have downloaded a copy of the latest master branch all you have to do is open a command line/terminal window in the folder containing the code for the master branch (Visual Studio has this built into the *Package Manager Console*). From here all you need to do is run the following line of code, to execute the project, adding the arguments as outlined below to specify the requested response.
```
node ./index.js <category> <limit>
```
The output from this project will be printed to the Command Line/Terminal as a json object in the following format.
```
{
    "count": <int>,
    "entries": [
        <String>
    ]
}
```

## Author
- Timothy Martin \([Niten001](https://github.com/Niten001)\)
