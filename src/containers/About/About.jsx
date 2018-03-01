import React from "react";
import About from "./Style";

/* eslint-disable */
export default () => (
  <About>
    <div>
      <h2>Tin Marin App</h2>
      <p>
        Tin Marin is based on a Venezuelan 'tradition' for select randomly an
        option over the rest. Concretely is a random option selector which you
        can leave the responsability of deciding the a task randomly to the app.
        just add the tasks you want the app decide for you and then click on the
        "Tin Marin" green button. The selected option will be the one with green
        background color.
      </p>

      <h2>Motivation and inspiration</h2>

      <p>
        this webapp was thought to experiment with some pieces of technologies
        and features that we can integrate to React.js (V16) style-components
        (the most famous css-in-js library for React), flow type checker and
        Jest with enzyme, also enabling code-splitting with webpack and render
        the entire app from server side using <br />
        Sometimes we need to give the priority order of our task to the destiny.
        so with Tin Marin you will give that responsability to the power of
        React.js :)!
      </p>

      <h2>Visit the repo and live example</h2>
      <a href="https://github.com/luigi055/tin-marin">
        Github public Repository: https://github.com/luigi055/tin-marin
      </a>
      <a href="http://tinmarin.surge.sh/">
        Try Tín Marín App online: http://tinmarin.surge.sh/
      </a>
    </div>
  </About>
);

/* eslint-enable */
