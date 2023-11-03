import React from 'react';
import '../assets/css/OurTeamStyle.css';

const staffData = [
  {
    name: 'Vin Diesel',
    role: 'Senior App Developer',
    image: 'https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg',
    socialLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
    ],
  },
  {
    name: 'David Corner',
    role: 'Front End Developer',
    image: 'https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAjQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg',
    socialLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
    ],
  },
  {
    name: 'Tom Cruise',
    role: 'Full Stack Developer',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
    socialLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
    ],
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <div className="sec-title centered">
        <div className="title">Our Team</div>
        <div className="separator">
          <span></span>
        </div>
      </div>

      <div className="main">
        {staffData.map((staff, index) => (
          <div key={index} className="profile-card">
            <div className="img">
              <img src={staff.image} alt={staff.name} />
            </div>
            <div className="caption">
              <h3>{staff.name}</h3>
              <p>{staff.role}</p>
              <div className="social-links">
                {staff.socialLinks.map((link, i) => (
                  <a href={link} key={i} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
