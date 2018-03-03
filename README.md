# Tin Marin App
  this webapp was thought to experiment with some pieces of technologies and features that we can integrate to React.js (V16) style-components (the most famous css-in-js library for React), flow type checker and Jest with enzyme, also enabling code-splitting with webpack and render the entire app from server side using
  Sometimes we need to give the priority order of our task to the destiny. so with Tin Marin you will give that responsability to the power of React.js :)!

# Repository
[https://github.com/luigi055/tin-marin](https://github.com/luigi055/tin-marin)

# Project URL
Frontend Only React app on surge.sh [http://tinmarin.surge.sh/](http://tinmarin.surge.sh/)
Full React App with Server side rendering on Heroku [https://tin-marin.herokuapp.com/](https://tin-marin.herokuapp.com/)

## Table of contents
- [Vistual Studio Code Extensions](#visual-studio-code-extensions)
- [OS Compatibility](#os-compatibility)
- [Installation](#installation)
  - [Global Packages](#global-packages)
- [Tech Stack](#tech-stack)
- [Enviroments](#enviroments)
  - [Production](#production)
  - [Development](#development)
  - [Test](#test)
- [prettier](#prettier)
- [Babel](#babel)
- [eslint](#eslint)
- [Flow](#flow)
- [Styled Components](#styled-components)
- [HTML](#html)
- [Jest with enzyme](#jest-with-enzyme)
- [Favicon and static files](#favicon-and-static-files)
- [Clearing Public Folder](clearing-public-folder)
- [Software used](#software-used)
- [Author](#author)
- [license](#license)

## Visual Studio Code Extensions
- Babel ES6 / ES7
- Beautify css/sass/scss/less
- Color Highlight
- ESLint
- expand-region
- Git History (git log)
- open in browser
- prettier - javascript formatter
- stylelint

## OS Compatibility

This boilerplate is thought to be use in multi platform specificlly in windows 7, 8, 10, linux (tested in ubuntu, antergos), and in OSX.

any problem related with Operating System please i'll be glad to know about it. so, create an issue.

## Installation

First step clone this repo
```
$git clone https://github.com/luigi055/tin-marin.git
```
And then dependning wheather you use npm or yarn

Case using __yarn__:
```
$cd tin-marin && yarn
```
Case using __npm__
```
$cd tin-marin && npm install
```

### Global Packages
In order to have all the power of this boilerplate you can donwload the following packages
- [nodemon](https://nodemon.io/) (node reload on save)
- [eslint](https://eslint.org/) (linter)
- [prettier](https://github.com/prettier/prettier) (auto formatter)
- [babel](https://babeljs.io/) (Javascript compiler)
- [stylelint](https://stylelint.io/) (linter for css)
- [webpack](https://webpack.js.org/) (Module bundler)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [flow](https://flow.org/) (Static type checker)
- [flow-typed](https://github.com/flowtype/flow-typed) (A central repository for Flow library definitions)
- [jest](https://facebook.github.io/jest/) (Test Runner)

## Tech Stack

### Webpack

This App uses Webpack as a module bundler 

### React
we're using the latest verison of react which is React Fiber or React V16 with also react-router-dom.

## Enviroments
this app enviroment have by default 3 enviroments
- production: which build webpack to production and run the express server with server side rendering
- development: used by default for develop the entire app
- test: which run our tests using mocha, chai, sinon, enzyme

### Production
  in case you want to emulate a production enviroment use
```
$yarn run start
```

make sure the start script look like this when deploy:
```
"start": "export NODE_ENV=production || SET \"NODE_ENV=production\" && node server.js"
```

which runs our local express server and run webpack which build the public folder

In case you just want to build the app inproduction use
```
$yarn run build
```
visit http://localhost:3000 in any browser

### Development
the development enviroment use all the power of webpack dev server. the next script runs the dev server
```
$yarn run dev
```

to build a development package use
```
$yarn run dev
```

visit http://localhost:3000 in any browser

### Test
run test
```
$yarn run test
```


```
$yarn run test:watch
```

## Babel
modern EcmaScript features is all support thanks to babel which compile and transpile our ES6+ (latest versions of the language), JSX, Flow  to ES5 or which ever version we want

Additional you could use modern syntax when creating stateful components with transform-class-plugin
which allow you to use this syntax in addition to the clasical ES6 class Syntax:

```
class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState ({
      searchTerm: event.target.value,
    });
  };

  render () {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder="Searh and try HOT MODULE REPLACEMen"
        />
        <h2>{this.state.searchTerm}</h2>
      </div>
    );
  }
}
```

## ESLint

ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.
Eslint is completely enable and properly setted to use with React using the popular airbnb eslint rules and also with react, prettier and flow linting

You can also run the following script to check linting of all your code

```
$yarn run lint
```

## Prettier
the popular autoformatter is also available for development so to take the most out of this feature you should install the equivalent plugin or extension to your favourite IDE or Text Editor. [Read more about prettier editor integration](https://github.com/prettier/prettier#editor-integration)

use this script in order to autoformat your code
```
$yarn run format
```

## Flow
Flow is open-source static type checker for JavaScript developed at Facebook. Flow checks for errors in JavaScript programs before they run but unlike TypeScript, Flow can be implemented in your existing JavaScript code.

Also, TypeScript forces you to add a type annotation to the code in order to implement its type checking, while Flow can still check the code for type errors without having to explicitly annotate that code with types. Though you can if you want to.

[Read More](https://medium.com/netscape/type-checking-with-flow-4db5ef9b3095)

init flow 
```
$yarn runt flow:init
```

This will create a .flowconfig file for you which is often enough.

Other scripts
```
$yarn run flow:start
$yarn run flow:stop
$yarn run flow:status // default $flow
$yarn run flow:coverage
```

.flowconfig commonly, isnt necesary to configure anything else but sometimes there's some cases in which any package throw flow type errors from node_modules or in your code.

Unlike ESLint, you do typically want to have Flow run on your dependencies to get those typings. However sometimes libraries ship broken types so you can just ignore them (like I did with styled-components.)

for example a very common error at the time im writting this documentation there's types error with styled-components package. so the common fix is add the route to the ignore section of .flowconfig

```
[ignore]
<PROJECT_ROOT>/node_modules/styled-components/* under 

...
```

of course a better solution is not ignoring at all so. for that reason exist flow-typed node package. flow-typed is a repo of pre-typed common libraries.

styled-components has being pre-typed be the group behind this awesome repo.

```
$yarn global add flow-typed
``` 
now look for if there is your package already typed:

```
flow-typed search styled-components
```

and then if any install the one according to your flow-bin version package:
i.e. 
for flow-bin0.56.0 use

```
$flow-typed install styled-components@2.x.x 
```
__(or whatever version you have installed.)__ 

This will create a flow-typed directory that Flow already knows how to read from. In fact, check out the various type available to you.


### Styled Components
styled-components is the most popular css-in-js solution which you can have the best of global styles and the component local styles using styled-components syntax. install and set up is really straight-forward to use and to install. you don't need to add something to webpack configuration. just install and start using it directly in your js.

```
yarn add styled-components
```

and now you can use it in your components like

```
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;
```

to learn more about styled-components go to the official [website](https://www.styled-components.com/)


## HTML
since we're working with react is normal to have just a html file as template. but sometimes there's some exceptions to the rule and you have to add more html. 

if you want to add a new html you just have to create a new file  in any directory and then go to webpack dev server and register this with the HTML webpack plugin.

go to webpack plugin option and add a new one

```
...
new HTMLWebpackPlugin ({
  title: 'New Project',
  filename: 'other.html',
  template: 'other.html',
}),
...
```

in [multiporpuse-webpack-boilerplate](https://github.com/luigi055/Multi-purpose-webpack3-boilerplate) since is thought to work mainly with html files. i created a html generator within webpack.config.js. in there i got a file calls /views here i put all of my html files and webpack automatically add those. if you want to know how this work. check that repo.

## Jest with Enzyme
"Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases."
[Read More](https://facebook.github.io/jest/
)

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

[Read More](http://airbnb.io/enzyme/)


## Favicon and Static Files

This is mostly useful for loading files into your production build dist folder. Examples include:

robots.txt
.htaccess
sitemap.xml
background images
favicon.ico

so, if you want to add some of these files just import it globally in App.jsx

```
...
/* eslint-disable */
require("static?!path/realFilename.ext?output=path/newFilename.ext");
// example 
require("static?!./favicon.ico?output=favicon.ico");
/* eslint-enable */
...
```

remember to disable eslint since this will not understand the syntax and will send a linting error



## Clearing Public Folder
There's an easy way to remove the public folder via npm or yarn script. sometimes we need to build it and we forget or ir annoying being removing it manually so you can remove this using the following script

```
$yarn run clear
```

## Code Splitting
As our app grows our bundle is getting bigger in file size. 
Code splitting is a webpack's new technique which detect which files are required by which other files and thus. Using the async loading API (import(...)) webpack will automatically start chunking the javascript file for each route that require the file.

for example in the About section will only load the code that it needs. and ignore the one from Tinmarin section.

for achieve code splitting you will need to install a couple of babel plugins

```
  "babel-plugin-syntax-dynamic-import",
  "babel-plugin-dynamic-import-webpack",
```

and add the development and production env to your .babelrc

```
"production": {
  "plugins": ["transform-es2015-modules-commonjs"]
},
"development": {
  "plugins": ["transform-es2015-modules-commonjs"]
},
```
finally create a new component called AsyncRoutes.jsx
```
// @flow

import React, { Component } from "react";
import Spinner from "./components/Spinner/Spinner";

// HOC for loading files from code-splitting
class AsyncRoutes extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    // this is from webpack
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  props: {
    props: mixed,
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  };
  component = null;

  render() {
    if (!this.state.loaded) {
      return <Spinner />;
    }
    return <this.component {...this.props.props} />;
  }
}

export default AsyncRoutes;
```
And then each time you're going to set a new route with react-router
you first pass in the component through the new async route component with its props. using the dynamic import babel plugin (stage 3) this will enable automatically code-splitting and will split your bundle.js in chunks of code that will be loaded depending the active route that need it.

```
<Route
          exact
          path="/"
          component={props => (
            <AsynchRoutes
              props={props}
              loadingPromise={import("./containers/TinMarin/TinMarin")}
            />
          )}
        />
```

## Server Side Rendering

your server's response to the browser is the HTML of your page that is ready to be rendered so the browser can start rendering without having to wait for all the JavaScript to be downloaded and executed. There's no "white page" while the browser downloads and executes the JavaScript and other assets needed to render the page, which is what might happen in an entirely client-rendered React site. Also it's SEO Friendly.

## Software Used

- [Hyper CLI](https://hyper.is/)
- [visual studio code](https://code.visualstudio.com/)
- [git with git flow](https://git-scm.com/)
- [Haroopad](http://pad.haroopress.com/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Surge.sh](http://surge.sh/)
- [heroku](https://heroku.com)

## Author
-  __[Luigi055](https://github.com/luigi055)__


## License
This project is licensed under the MIT License.