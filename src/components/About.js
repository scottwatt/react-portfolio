import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Scott Wattenbarger"/>
      <p className="content is-italic mt-4">
        I'm Scott, a full stack developer that loves to learn and is always trying to improve my study.
      </p>
      <p className="content">
        I know that technology is always changing and improving. My goal is to keep ontop of the technologies and always better myself
      </p>
    </div>
  );
}

export default About;
