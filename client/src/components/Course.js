import React from 'react';
import '../assets/css/CourseStyle.css';


const CourseItem = ({ title, startDate }) => {
  return (
    <div className="ag-courses_item">
      
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>
        <div className="ag-courses-item_title">{title}</div>
        {startDate && ( // Render the start date if available
          <div className="ag-courses-item_date-box">
            Start: <span className="ag-courses-item_date">{startDate}</span>
          </div>
        )}
      </a>
    </div>
  );
};

const CoursesContainer = () => {
  return (
    <div className='course'>
    <div className="sec-title centered">
    <div className="title">+2 Courses We Offer</div>
    <div className="separator">
      <span></span>
    </div>
 
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <CourseItem
          title="Nepali"
          startDate="04.11.2022"
        />
        <CourseItem
          title="Education"
          startDate="04.11.2022"
        />
        <CourseItem
          title="Mathematics"
          startDate="04.11.2022"
        />
        <CourseItem title="Science" startDate="04.11.2022" />
        <CourseItem title="Social" startDate="30.11.2022" />
        <CourseItem title="Computer Science" />
        <CourseItem title="Digital Marketing" />
        <CourseItem
          title="Interior Design"
          startDate="31.10.2022"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default CoursesContainer;
