import React from "react";
import { Helmet } from "react-helmet";
import "./index.css"
function AboutMePage() {
  return (
    <>
      <Helmet>
        <title>About Me Page</title>
      </Helmet>
        <div id="about_me_container">
          <h1>About Me</h1>
          <article className="greeting_article">
            <h4>Hi there! 👋</h4>
            <p>
              I’m an aspiring Frontend Developer on a mission to craft the
              future, one line of code at a time. With a curious mind and a
              keyboard as my toolkit, I’m exploring the vast world of tech,
              where creativity meets logic and ideas turn into reality.
            </p>
          </article>
          <article className="small_info_article">
            <h4>A Bit About Me:</h4>
            <p>
              I’m passionate about making the web a more beautiful, functional,
              and accessible space. My journey started with the basics of HTML,
              CSS, and JavaScript, and now I’m venturing into the realms of
              React, backend magic, and mobile app wizardry. I’m not just
              learning to code—I’m learning to build experiences.
            </p>
          </article>
          <article className="fuel_article">
            <h4>What Fuels My Fire: </h4>
            <p>
              When I’m not working on web projects, you’ll find me cracking open
              a fresh set of algorithm puzzles or untangling a tricky data
              structure problem. For me, these challenges are like mental
              workouts, sharpening my analytical thinking and keeping my brain
              in top form
            </p>
          </article>
          <article className="adventure_article">
            <h4>My Tech Adventure So Far: </h4>
            <p>
              Building responsive, dynamic web pages. Exploring the synergy
              between frontend and backend systems. Experimenting with the
              intersection of design and functionality.
            </p>
          </article>
        </div>
    </>
  );
}

export default AboutMePage;
