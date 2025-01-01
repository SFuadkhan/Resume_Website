import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css"
function ExperiencePage() {
  return (
    <>
      <Helmet>
        <title>Experience Page</title>
      </Helmet>
        <div id="experience_container">
          <h1>Experience</h1>
          <article>
            <h3>Matrix Courses</h3>
            <h5>Java Development Trainee</h5>
            <ul>
              <li>
                Comprehensive training on Spring Boot Framework, REST API
                development, and building scalable backend systems.{" "}
              </li>
              <li>
                Hands-on projects that deepened my understanding of Java-based
                application development and deployment.{" "}
              </li>
              <li>
                Gained a solid foundation in writing clean, maintainable, and
                efficient code.{" "}
              </li>
            </ul>
          </article>
          <article>
            <h3>Code Academy Courses</h3>
            <h5>Frontend Development Trainee</h5>
            <ul>
              <li>
                Mastered React, Vite, and Node.js to build dynamic and
                responsive web applications.{" "}
              </li>
              <li>
                Explored modern frontend tools and best practices, including
                state management and component-based architecture.{" "}
              </li>
              <li>
                Worked on projects to integrate APIs, enhance performance, and
                create seamless user experiences.{" "}
              </li>
            </ul>
          </article>
          <article>
            <h3>Practical Experience</h3>
            <h5>Hackathon Participant – Code8 by Code Academy</h5>
            <ul>
              <li>
                Collaborated with a team to design and implement a fully
                functional project under time constraints.
              </li>
              <li>
                Applied frontend and backend development skills to deliver a
                creative and innovative solution.{" "}
              </li>
              <li>
                {" "}
                Secured Second Place, demonstrating strong problem-solving,
                teamwork, and technical abilities.
              </li>
            </ul>
          </article>
        </div>
    </>
  );
}

export default ExperiencePage;
