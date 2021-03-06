Basic gulp template
============

Starter Gulp + Browserify project with examples of how to accomplish some common tasks and workflows.

Includes the following tools, tasks, and workflows:

- [Babelify] (https://github.com/babel/babelify)
- [Browserify](http://browserify.org/)
- [Watchify](https://github.com/substack/watchify)
- [SASS](http://sass-lang.com/) maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap)!)
- [Handlebars](http://handlebarsjs.com/) (as a backbone dependency)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```


### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'sass', 'images', 'markup']`
