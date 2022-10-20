import React from 'react'
import Locked from './Locked'

function Home(props) {
  const [lockState, setLockState] = React.useState(false)
  
  return (
    <div>
      {/* {props.isCheck ? <Locked  />: ""} */}
      {lockState || props.isCheck ? <Locked /> : <>
        <div className="temp">
      <div className='temp-left'>
      <h2>Welcome to the MRdreams</h2>
      <p>We help early and growth-stage startups build viable products, drive traction, raise capital, and scale their businesses.
        <br></br>
        MRdreams is a leading Indian Investment Platform. MRdreams connect You to Your right investor for your ideas.
        <br></br>
        Our company and its investors has visualized that India will lead this world in future. It will be lead by our students and youth who want to do something in the life.</p>
      </div>
        <img className='temp-right-img' src='./images/entrepreneur.png'></img>
    </div>
    <div className="temp">
    <img className='temp-right-img' src='./images/experience.png'></img>
        <div className='temp-left'>
            <h2>See You Grow With Us</h2>
            <p>MRdreams is here to help those bunch of folks (youth) who really aspire to do something extraordinary with their unique ideas, brilliant minds and steady hearts.
              <br></br>
              We have numerous talented students studying in School, College, University who have so many ideas in their minds but due to lack of opportunities and ignorance we lost these seeds in barren lands. Only few exceptions work on them and then we can see the rising stars among us and think why I can't be this exceptional name. But the good news is that we all can aspire ahead with our ideas in mind.
              <br></br>
              MRdreams is here to help each one of us. Where we offer you a ground to work upon your ideas with free spirits. In this regard we can help you with funding partners, working platforms and lot more.</p>
      </div>
    </div>
            <div className="temp">
              <div className='temp-left'>
              <h2>Providing Investments With Reputation</h2>
              <p>We have numerous talented students studying in School, College, University who have so many ideas in their minds but due to lack of opportunities and ignorance we lost these seeds in barren lands.
                <br></br>
                For that very purpose, MRdreams is here to help each one of us. Where we offer you a ground to work upon your ideas with free spirits. In this regard we can help you with funding partners, working platforms and lot more.<br></br>
                So come ahead with your ideas and share them with us. We want to hear the voice of talents, Ideas and hopes. Because each voice matters, each one matters.</p>
              </div>
                <img className='temp-right-img' src='./images/goal.png'></img>
            </div>
            <div className='footer'>
               <div className='section-1'>
                <div className='section-logo'>
                  <h5>MR</h5>
                  <h6>Dreams.in</h6>
                </div>
                <h7 className="f">Our company and its investors has visualized that India will lead this world in future. It will be lead by our students and youth who want to do something in the life.</h7>
              <div className='section-icons'>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
              <i class="fa fa-pinterest"></i>
              </div>
            </div>
            <div className='section-2'>
              <h8 className="ff">Our Company</h8>
              <ul className='section-ul'>
                <li className='section-links'><a className='section-hover' href='#'>Home</a></li>
                <li className='section-links'><a className='section-hover' href='#'>Drop Your Ideas</a></li>
                <li className='section-links'><a className='section-hover' onClick={()=>setLockState(!lockState)} href='#'>Join Us</a></li>
                <li className='section-links'><a className='section-hover' onClick={()=>setLockState(!lockState)} href='#'>Contact Us</a></li>
              </ul>
            </div>
            <div className='section-3'>
            <h8 className="ff">Subscribe</h8>
            <h9 className="fff">Subscribe to our mailist list here.</h9>
            <input className='section-input' type="email" placeholder="Your Email"></input>
            <button className='section-btn'>Subscribe</button>
            </div>
            </div>
            <div className="footer-bottom">All Rights Reserved © 2022 MRdreams. Developed & Managed by <a className='rishabh' href="https://www.linkedin.com/in/rishabh-dwivedi-936676191">Rishabh Dwivedi</a></div>
            </>}
    </div>
  )
}

export default Home
