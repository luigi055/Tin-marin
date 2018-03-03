require("babel-register")({
  presets: [
    "react",
    [
      "env",
      {
        targets: {
          browsers: "last 2 versions"
        },
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    "react-hot-loader/babel",
    "babel-plugin-syntax-dynamic-import",
    "babel-plugin-dynamic-import-webpack",
    "babel-plugin-transform-decorators-legacy",
    "babel-plugin-transform-class-properties"
  ],
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"]
    },
    production: {
      plugins: ["transform-es2015-modules-commonjs"]
    }
  }
}); // Needed to translate .jsx files

const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactRouter = require("react-router-dom");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const compression = require("compression"); //gzipping our frontend code from server
const webpack = require("webpack");
const _ = require("lodash");
const webpackConfig = require("./webpack.config.js");

const app = express();
const baseTemplate = fs.readFileSync("./template.html");
const compiler = webpack(webpackConfig); // activate hmr in this server
const ClientApp = require("./src/App").default; //since we're using ES6 and we're exporting default
const StaticRouter = ReactRouter.StaticRouter;
const template = _.template(baseTemplate);

const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.send('Maintainance Mode');
// });

// although it is not recommended nor needed to use hmr in server. (because this server should be just for production) it's posible to activate it for development
app.use(
  // hmr in dev
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler)); // hmr

app.use(compression());
// if (process.env.NODE_ENV === 'development') {
//   // hmr only for development mode
//   const compiler = webpack(config);
//   server.use(
//     webpackDevMiddleware(compiler, {
//       publicPath: config.output.publicPath
//     })
//   );
//   server.use(webpackHotMiddleware(compiler));
// }

app.use("./public", express.static(`${__dirname}/public`));

app.use((req, res) => {
  console.log(req.url);
  const context = {}; // for redirecting
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(ClientApp)
    )
  );

  // in cas of redirection
  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

//Default 404 page
// app.use((req, res) => {
//   res.type("text/html");
//   res.status(404);
//   res.send("404 - Not Found :(");
// });

// Default 500 Error page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("text/html");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is up on port ${PORT}`);
});
