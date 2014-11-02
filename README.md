# Beer O'clock

[beeroclock.in](http://beeroclock.in)

By [@jamesrwhite](https://twitter.com/jamesrwhite) and [@benhodgson](https://twitter.com/benhodgson)

A tool to count down to the most important time of the day.



## Requirements

The codebase makes use of the following tools, with which you should hopefully be familiar:

* Node
* AngularJS
* Grunt
* Bower
* Sass *(.scss flavoured)*


## Setup

1. Clone this repo
2. Make sure you have Node + NPM installed
3. Run ```npm install``` - the postinstall task should also pull down all Bower deps into ```/src/libs```
4. Check that both ```/node_modules``` and ```/src/libs``` have been built.
5. Run ```grunt serve``` and navigate to ```http://localhost:1664```

## Grunt Tasks

### ```grunt serve```

Will spin up a local development version of the app on ```localhost:1664```, and watch for changes.


### ```grunt dist```
Builds a fully production ready (minified, etc…) version of the app into ```/dist```.


## Contributing

Pull Requests, Issues & Suggestions are all greatly appreciated!

Please follow the existing coding style when contributing - use 4-space soft tabs for indentation.

If your code editor has support, the included [EditorConfig](http://editorconfig.org) file should set you on your way.
