import React from "react";
import logo from "./logo.svg";
import "./App.css";
import avatar_image from "./images/beautiful-latin-woman-avatar-character-icon-free-vector.jpg";
import resume_image from "./images/resume.webp";
import leetcode_image from "./images/leetcode.svg";
import github_image from "./images/github.png";
import linkedin_image from "./images/linkedin.webp";

function App() {
  return (
    <div className="App">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Comfortaa"
          rel="stylesheet"
        />
      </head>
      <div className="Panel_Header">
        Developer, Engineer, Innovator <br />
      </div>
      <div className="Panel_White">
        <div className="Panel_Col">
          <img src={avatar_image} alt="avatar" className="image_avatar" />
        </div>
        <div className="Panel_Col">
          Hi! Nice to meet you. I'm Yukti Biduru, a results-driven software
          developer hailing from Chicago. <br />
          <br />
          Specializing in a variety of programming languages and frameworks,
          including C#, Java, and Python, I excel in creating innovative
          solutions to complex problems. <br /> <br />
          Outside of work, you'll find me immersed in the world of mobile app
          development and game design, always eager to push the boundaries of
          what's possible in technology.
        </div>
      </div>
      <div className="Panel_Teal">
        I've ventured into various technologies spanning from front-end to
        DevOps. I enjoy full-stack development and the process of crafting
        applications from the ground up.
      </div>
      <div className="Panel_White">
        <div className="Panel_Col">
          <div className="col_heading_height">
            <h3>Front End</h3>
          </div>
          <div className="col_info_height">
            I like creating expereinces that are visually appealing and easy to
            use.
            <br />
            <br /> <b>Languages</b>
            <br /> Typescript, Javascript, HTML
            <br />
            <br />
            <b>Tools</b>
            <br /> Angular, ReactJS, Astro
          </div>
        </div>
        <div className="Panel_Col">
          <div className="col_heading_height">
            <h3>Backend</h3>
          </div>
          <div className="col_info_height">
            Over 4 years of expereince I have learned to build strong functional
            code on the backend.
            <br />
            <br /> <b>Languages</b>
            <br />
            C#, Java, VB
            <br /> <br />
            <b>Tools</b>
            <br />
            ASP.NET core and framework, Visual Studio, MVC, Webforms
          </div>
        </div>
        <div className="Panel_Col">
          <div className="col_heading_height">
            <h3>Databases</h3>
          </div>
          <div className="col_info_height">
            Courses in the university and on the job learning helped me master
            databases in multiple areas.
            <br />
            <br /> <b>Languages</b>
            <br /> T-SQL
            <br />
            <br /> <b>Tools</b>
            <br />
            MS SQL, SSRS, MySQL
          </div>
        </div>

        <div className="Panel_Col">
          <div className="col_heading_height">
            <h3>CI/CD</h3>
          </div>
          <div className="col_info_height">
            Migrated applications from Old Servers to Containers while creating
            new pipelines and setting up automation.
            <br />
            <br />
            <b>Tools</b>
            <br /> Azure Devops, Docker, OpenShift Container Platform, Jenkins
          </div>
        </div>
      </div>
      <div className="Panel_Teal2">
        <div className="Panel_Col">
          <img src={resume_image} alt="resume" />
          <br />
          <a
            href="https://drive.google.com/file/d/1RqRyMuH20c299SAJ34g-fb1oFwht6gKZ/view"
            download
            className="download_text"
          >
            Download Resume
          </a>
        </div>
        <div className="Panel_Col">
          <div className="Panel_Col2">
            <div className="Panel_Col2_Time">
              Aug 2022 - May 2024
              <br />
              Chicago, IL, USA <br />
            </div>
            <div className="Panel_Col2_Info">
              <b>Education</b>
              <br />
              <b>University of Illinois at Chicago (UIC)</b>
              <br />
              Master of Science in Computer Science
              <br />
              Technologies Used: MySQL, MongoDB, Firebase, Astro, Python,
              PyCharm, Visual Studio Code
            </div>
          </div>
          <div className="Panel_Col2">
            <div className="Panel_Col2_Time">
              Mar 2023 - May 2024 <br /> Chicago, IL, USA
            </div>
            <div className="Panel_Col2_Info">
              <b>Work Experience</b>
              <br />
              <b>University of Illinois at Chicago (UIC)</b>
              <br />
              Graduate Research Assistant, Software Developer
              <br />
              Technologies Used: C# ASP.NET Framework, Visual Studio, SQL Server
              Management Studio, GitOps, Javascript.
            </div>
          </div>
          <div className="Panel_Col2">
            <div className="Panel_Col2_Time">
              July 2019 - July 2022 <br /> Bengaluru, KA, INDIA
            </div>
            <div className="Panel_Col2_Info">
              <b>Work Experience</b>
              <br />
              <b>Tata Consultancy Services (TCS)</b>
              <br />
              Systems Engineer
              <br />
              Technologies Used: C# ASP.NET, VB, Azure DevOps, Angular Material,
              TFS, Visual Studio, JFrog Artifactory, Jenkins, Docker, Openshift
              Container Platform.
            </div>
          </div>
          <div className="Panel_Col2">
            <div className="Panel_Col2_Time">
              July 2015 - May 2019 <br />
              Surat, GJ, INDIA
            </div>
            <div className="Panel_Col2_Info">
              <b>Education</b>
              <br />
              <b>S. V. National Institute of Technology (SVNIT)</b>
              <br />
              Bachelor of Technology in Electronics and Communication
              Engineering
            </div>
          </div>
        </div>
      </div>
      <div className="Panel_White2">
        <p>
          I am interested in learning new technologies and I have created
          projects with different tech stacks to understand the systems better.
        </p>
        <p>
          <br /> <b> Projects </b>
          <ul>
            <li>
              <a href="https://github.com/yukti-biduru/CSharp_Vidly" download>
                Vidly
              </a>
              - Video Rental Application (C#, ASP.NET MVC, Microsoft SQL)
            </li>
            <li>
              <a
                href="https://github.com/yukti-biduru/Finance-Manager"
                download
              >
                Finance Manager
              </a>
              - Fully frontend multi-page finance manager application to track
              monthly expenditure based on budget and categories (ReactJS,
              Supabase)
            </li>
            <li>
              <a
                href="https://github.com/yukti-biduru/Three_Mens_Morris"
                download
              >
                Three Men’s Morris
              </a>
              - The game as an android application. (Java, Android Studio)
            </li>
          </ul>
        </p>
        I have experimented with various applications like Game Development,
        Mobile App Development, Natural Language Processing and also Go, Python,
        Springboot in web development. Looking forward to learning more with
        each opportunity that comes my way.
        <div className="Panel_Col2">
          <div>
            <br />
            <a href="https://leetcode.com/u/YuktiB/" download>
              <img src={leetcode_image} alt="leetcode" className="image2" />
            </a>
          </div>
          <div>
            <br />
            <a href="https://github.com/yukti-biduru" download>
              <img src={github_image} alt="github" className="image2" />
            </a>
          </div>
          <div>
            <br />
            <a href="https://www.linkedin.com/in/yuktibiduru/" download>
              <img src={linkedin_image} alt="linkedin" className="image2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
