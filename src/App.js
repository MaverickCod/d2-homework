import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="heading">
        <h1>Topics covered</h1>
        <p>The following is a list of all the topics we cover in the MDN learning area.</p>
      </header>
      <section>
        <h2 id="getting-started"><a href="#getting-started">Getting started with the web</a></h2>
        <p>
          Provides a practical introduction to web development for complete beginners.
        </p>
      </section>
      <section>
        <h2 id="html-structuring"><a href="#html-structuring">HTML — Structuring the web</a></h2>
        <p>
          HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
        </p>
      </section>
      <section>
        <h2 id="css-styling"><a href="#css-styling">CSS - Styling the web</a></h2>
        <p>
          CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
        </p>
      </section>
    </div>
  );
}

export default App;
