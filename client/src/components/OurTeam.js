import React from 'react';
import '../assets/css/OurTeamStyle.css';
import test from '../assets/img/test.jpg'
const staffData = [
  {
    name: 'Ram Sharma',
    role: 'Principal',
    image: test,
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
 
  {
    name: 'Sita Rai',
    role: 'Vice - Principal',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'Ram Sharma',
    role: 'Principal',
    image: 'https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
 
  {
    name: 'Sita Rai',
    role: 'Vice - Principal',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'Ram Sharma',
    role: 'Principal',
    image: 'https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
 
  {
    name: 'Sita Rai',
    role: 'Vice - Principal',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
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
                {Object.keys(staff.socialLinks).map((linkType, i) => (
                  <a href={staff.socialLinks[linkType]} key={i} target="_blank" rel="noopener noreferrer">
                    {linkType === 'linkedin' && <i className="fab fa-linkedin"></i>}
                    {linkType === 'twitter' && <i className="fab fa-twitter"></i>}
                    {linkType === 'facebook' && <i className="fab fa-facebook"></i>}
                    {linkType === 'instagram' && <i className="fab fa-instagram"></i>}
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
