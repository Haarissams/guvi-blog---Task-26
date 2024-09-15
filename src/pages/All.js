import React from 'react';

const All = () => {
  return (
    <div className="course-container">
      <div className="course-card">
        <img src="/images/fullstack.jpg" alt="Full Stack Development" className="course-image" />
        <h3>Full Stack Development</h3>
        <p>Learn to build full-stack web applications from scratch.</p>
      </div>

      <div className="course-card">
        <img src="/images/datascience.jpg" alt="Data Science" className="course-image" />
        <h3>Data Science</h3>
        <p>Master data analysis, machine learning, and more.</p>
      </div>

      <div className="course-card">
        <img src="/images/cybersecurity.jpg" alt="Cyber Security" className="course-image" />
        <h3>Cyber Security</h3>
        <p>Protect systems from cyber threats.</p>
      </div>

      <div className="course-card">
        <img src="/images/career.jpg" alt="Career" className="course-image" />
        <h3>Career</h3>
        <p>Build the skills needed to boost your career.</p>
      </div>
    </div>
  );
};

export default All;
