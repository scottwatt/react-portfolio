import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Task Manager",
    languages: "html, css, js",
    packages: "Express.js, bcrypt, dotenv, MongoDb, React.js, Node.js",
    image: "/img/portfolio.png",
    description: "Sign up or log in and create tasks on the calendar to keep track of. Press toggle tasks to view all tasks created and it sorts the tasks based off priority and time remaining! When the task is complete or the time has elapsed the task's ending time, the task will move to a finished task section. All data is stored in a database and can be edited and deleted.",
    repo: "https://github.com/scottwatt/Task_Manager",
    live: "https://task-manager-scott.herokuapp.com/",
  },
  {
    id: 1,
    title: "Blackjack",
    languages: "html, css, js",
    packages: "none",
    image: "/img/blackjack.png",
    description: "Allows you to play blackjack against the dealer!",
    repo: "https://github.com/scottwatt/blackjack",
    live: "https://scottwatt.github.io/blackjack//",
  },
  {
    id: 2,
    title: "AGI Website",
    languages: "html, php, bootstrap, css, sass, js",
    packages: "none",
    image: "/img/AGI.png",
    description: "A company website!",
    repo: "https://github.com/scottwatt/Agi",
    live: "https://scottwatt.github.io/Agi/",
  },
  {
    id: 3,
    title: "edTrance",
    languages: "html, css, handelbars, js, bootsrap",
    packages: "bcrypt, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sweetalert2, sequelize",
    image: "/img/school_signup.gif",
    description: "Organizes schedule for schools and adds comments!",
    live: "https://ucb-school-portal.herokuapp.com/login",
    repo: "https://github.com/cassandrakise/school-portal",
  },
  {
    id: 4,
    title: "Movie Search",
    languages: "html, css, js, materialize",
    image: "/img/moviesearch.png",
    packages: "none",
    description: "Search movies and see the description and where it is streaming.",
    repo: "https://github.com/scottwatt/Movie_Search",
    live: "https://scottwatt.github.io/Movie_Search/",
  },
  {
    id: 5,
    title: "Note Taker",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/NoteTaker.png",
    description: "Write notes that you can save or delete.",
    repo: "https://github.com/scottwatt/noteTaker",
    live: "https://fast-chamber-64929.herokuapp.com/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weatherdashboard.png",
    description: "An app that allows you to check the weather for searched cities and save them.",
    repo: "https://github.com/scottwatt/weather_dashboard",
    live: "https://scottwatt.github.io/weather_dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
