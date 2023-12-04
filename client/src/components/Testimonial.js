import React, { useState } from 'react';
import '../assets/css/TestimonialStyle.css'; 
import test1 from '../assets/img/test1.jpg';


function Testimonial() {
  const [activeQuote, setActiveQuote] = useState(1); 

  const handleQuoteClick = (quoteNumber) => {
    setActiveQuote(quoteNumber);
  };

  return (
    <section className="op-section op-eight-section section" id="section5">
        <div className="sec-title centered">
        <div className="title">Testimonials</div>
        <div className="separator">
          <span></span>
        </div>
      </div>
      <div className="ocean-2">
        <div className="wave-2"></div>
        <div className="wave-2"></div>
      </div>
      <div className="section-eight">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <div className="container-pe-quote left">
                <div className={`pp-quote li-quote-1 ${activeQuote === 1 ? 'active' : ''}`} onClick={() => handleQuoteClick(1)}>
                  <div className='photo1'>
                  <img src={test1} alt="Ben 1" />
                  </div>
                </div>
                <div className={`pp-quote li-quote-2 ${activeQuote === 2 ? 'active' : ''}`} onClick={() => handleQuoteClick(2)}>
                 <div className='photo2'>
                  <img src={test1} alt="Ben 2" />
                 </div>
                 </div>
              
                <div className={`pp-quote li-quote-3 ${activeQuote === 3 ? 'active' : ''}`} onClick={() => handleQuoteClick(3)}>
                 <div className='photo3'>
                  <img src="http://nanaetben.fr/animation/assets/images/website/Ben-3.png" alt="Ben 3" />
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="sec-eight-text-area">
                <div className="container-dp-name">
                  <div className={`box-dpname dp-name-1 ${activeQuote === 1 ? 'look' : 'hide-dp-top'}`}>
                  <div className="circular-image">
                    <img src={test1} alt="Ben 1" />
                    </div>
                    <h1>Shyam Tamang</h1>
                    <h3>Principal</h3>
                  </div>
                  <div className={`box-dpname dp-name-2 ${activeQuote === 2 ? 'look' : 'hide-dp-top'}`}>
                  <div className="circular-image">
                    <img src="http://nanaetben.fr/animation/assets/images/website/Ben-2.png" alt="Ben 2" />
                    </div>
                    <h1>Hari</h1>
                  </div>
                  <div className={`box-dpname dp-name-3 ${activeQuote === 3 ? 'look' : 'hide-dp-top'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/Ben-3.png" alt="Ben 3" />
                    <h1>Rita</h1>
                  </div>
                  <div className={`box-dpname dp-name-4 ${activeQuote === 4 ? 'look' : 'hide-dp-bottom'}`}>
		    									<img class="" src="http://nanaetben.fr/animation/assets/images/website/Nana-4.png" alt=""/>
		    									<h1>Gita</h1>
		    								</div>

                        <div className={`box-dpname dp-name-5 ${activeQuote === 5 ? 'look' : 'hide-dp-top'}`}>
		    									<img class="" src="http://nanaetben.fr/animation/assets/images/website/Nana-2.png" alt=""/>
		    									<h1>Sngeeta</h1>
		    								</div>

                        <div className={`box-dpname dp-name-6 ${activeQuote === 6 ? 'look' : 'hide-dp-top'}`}>
		    									<img class="" src="http://nanaetben.fr/animation/assets/images/website/Nana-3.png" alt=""/>
		    									<h1>Srijana</h1>
		    								</div>

                        <div className={`box-dpname dp-name-7 ${activeQuote === 7 ? 'look' : 'hide-dp-top'}`}>
                          <img class="" src="http://nanaetben.fr/animation/assets/images/website/Nana-1.png" alt=""/>
                          <h1>Hari Sharma</h1>
                        </div>
                  {/* Add similar elements for other dp-names */}
                </div>
                <div className="container-quote">
                  <div className={`quote quote-text-1 ${activeQuote === 1 ? 'show' : 'hide-top'}`}>
                    <img  src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                    <p>"I have had the privilege of working closely with Principal Smith for the past several years, and I am continually impressed by their dedication and commitment to our school community.

Principal Smith's visionary leadership has transformed our school into a vibrant hub of learning. Their ability to foster an inclusive environment where students feel valued and supported is truly remarkable. By encouraging innovative teaching methods and programs, Principal Smith has elevated the academic standards while nurturing a culture of creativity and critical thinking among students.

"</p>
                  </div>
                  <div className={`quote quote-text-2 ${activeQuote === 2 ? 'show' : 'hide-top'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                    <p>
Their unwavering dedication to every student's success is evident in the individualized support provided to students and staff alike. Principal Smith's open-door policy and willingness to listen make them not just an administrator but also a mentor and guide.

Under their guidance, our school has seen remarkable progress in both academic achievements and extracurricular activities. Principal Smith's passion for education and tireless efforts in ensuring a positive learning experience for all make them an exceptional leader.

I am honored to have worked alongside Principal Smith, whose leadership continues to inspire and shape the future of our school."</p>
                  </div>
                  <div className={`quote quote-text-3 ${activeQuote === 3 ? 'show' : 'hide-top'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote"className='quote-icon' />
                    <p>How are you?</p>
                  </div>


                  <div className={`quote quote-text-4 ${activeQuote === 4 ? 'show' : 'hide-bottom'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                    <p>I am fine.</p>
                  </div>
                  <div className={`quote quote-text-5 ${activeQuote === 5 ? 'show' : 'hide-top'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                    <p>Where are from?</p>
                  </div>
                  <div className={`quote quote-text-6 ${activeQuote === 6 ? 'show' : 'hide-top'}`}>
                    <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                    <p>I am from Ramechhap</p>
                  </div>
                  <div className={`quote quote-text-7 ${activeQuote === 7 ? 'show' : 'hide-top'}`}>
                   <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="Quote" className='quote-icon'/>
                   <p>Thank you!</p>
                  </div>





                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="container-pe-quote right">

              <div className={`pp-quote li-quote-4 ${activeQuote === 4 ? 'active' : ''}`} onClick={() => handleQuoteClick(4)}>
                     <div className='photo4'>
                      	<img src="http://nanaetben.fr/animation/assets/images/website/Nana-4.png" alt=""/>	
                        </div>
		    							</div>
		    							<div className={`pp-quote li-quote-5 ${activeQuote === 5 ? 'active' : ''}`} onClick={() => handleQuoteClick(5)}>
                      <div className='photo5'>
                        <img src="http://nanaetben.fr/animation/assets/images/website/Nana-2.png" alt=""/>	
		    							</div>
                      </div>
                      <div className={`pp-quote li-quote-6 ${activeQuote === 6 ? 'active' : ''}`} onClick={() => handleQuoteClick(6)}>
                      <div className='photo6'>
                        <img src="http://nanaetben.fr/animation/assets/images/website/Nana-3.png" alt=""/>	
		    							</div>
                      </div>
                      <div className={`pp-quote li-quote-7 ${activeQuote === 7 ? 'active' : ''}`} onClick={() => handleQuoteClick(7)}>
                      <div className='photo7'>
                        <img src="http://nanaetben.fr/animation/assets/images/website/Nana-1.png" alt=""/>	
		    							</div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Testimonial;
