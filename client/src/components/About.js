
import school from '../assets/img/school.jpg';
import "../assets/css/AboutStyle.css";
import Course from './Course';
import Testimonial from './Testimonial';
function About() {


	return (
		
		<div className='about-section'>

				 <div className="sec-title centered">
        <div className="title">About Us</div>
        <div className="separator">
          <span></span>
        </div>
      </div>
			<div className="wrap animate pop">
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 className="animate slide-left pop delay-4">S.B.B.S.S</h1>
				<p className="animate slide-left pop delay-5" style={{ color: 'white', marginBottom: '2.5rem' }}>Khandadevi, <em>Makadum</em></p>

			</div>
			<div className="image-content animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div className="text">
				<p><img className="inset" src={school} alt="" /><em><h2>Welcome to Shree Buddha Bhawani Secondary School! </h2></em><br></br><br></br>Established in the heart of our thriving community, Shree Buddha Bhawani Secondary School stands as a beacon of educational excellence. With a rich history spanning over several decades, our institution has been dedicated to nurturing young minds and fostering a culture of holistic learning.</p>

				<p> 

<br></br>
<em><h2>Our Vision:</h2></em>
<br></br>

At Shree Buddha Bhawani, we envision an educational journey that goes beyond textbooks, aiming to ignite a passion for knowledge, creativity, and leadership in our students. Our mission is to create an environment that encourages curiosity, critical thinking, and a lifelong love for learning.
<br></br>

<em><h2>Our Approach:</h2></em>
<br></br>


We pride ourselves on our progressive approach to education. Our experienced faculty members are committed to providing a comprehensive curriculum that blends traditional values with modern teaching methodologies. We believe in empowering students to become confident, compassionate, and responsible global citizens.

<br></br>
<em><h2>Our Facilities:</h2></em>
<br></br>


Our school campus is a hub of innovation and growth. From well-equipped classrooms to state-of-the-art laboratories and libraries, we provide the resources necessary for students to explore and expand their horizons. Additionally, our extracurricular activities, sports programs, and cultural events offer a well-rounded educational experience.
<br></br>

<em><h2>Our Community:</h2></em>
<br></br>


Shree Buddha Bhawani Secondary School thrives on its strong community bonds. We value the partnership between parents, students, faculty, and staff. Together, we create a supportive and inclusive environment that encourages open communication and collaboration.
<br></br>
<em><h2>Our Commitment:</h2></em>
<br></br>



At the heart of everything we do is our commitment to nurturing every student's potential. We strive to instill values of integrity, respect, and resilience, preparing our students not just for academic success but also for life's challenges beyond the school gates.
<br></br>
Come and be a part of Shree Buddha Bhawani Secondary School, where learning knows no bounds, and every student's journey is celebrated!
</p>

	</div>
 </div>
<Course/>
<Testimonial/>
</div>

		
	);
}

export default About;
