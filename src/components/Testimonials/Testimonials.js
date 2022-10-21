import './Testimonials.css';
import starIcon from './staricon.png';
import customer1 from './Customer1.png';
import customer2 from './Customer2.png';
import customer3 from './Customer3.png';
import trophyIcon from './Trophy.png';
import {FaArrowRight} from "react-icons/fa";
import redLogo from './RedLogo.png';
function Testimonials() {
    return(
        
        <div className='container'>
          <div className='row mt-5 mb-5'>

            <div className='col-12 col-md-4 mt-3'>
                <div className='card-container p-5'>
                    <div className='d-flex pb-1'>
                        <img src={starIcon} className="star-icon " />
                        <p className='rating'>4.8 Rating</p>
                    </div>
                    <div>
                        <div className='d-flex flex-row pb-2'>
                            <img src={customer1} className="customer-image1" />
                            <img src={customer2} className="customer-images"  />
                            <img src={customer3} className="customer-images"  />
                            <p className='pt-2 members'><span className="no-of-testimonials">+836k </span>Members</p>
                        </div>
                        <p className='sub-text pb-1'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                        <a href="#">Join our community
                        <FaArrowRight className='arrow-icon '/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-4 mt-3'>
                <div className='card-container p-5'>
                    <div className='d-flex pb-1'>
                        <img src={trophyIcon} className="trophy-icon"/>
                        <p className='awwards'>Awwwards</p>
                    </div>
                    <div className='d-flex  pt-2'>
                        <img src={redLogo} className="red-logo" />
                        <p className='best-of'>Best of <span className='year'>2021</span> Github</p>
                    </div>
                    <p className='sub-text pb-2 pt-2 sub-text-1'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                    <a href="#" className='awwards-link'>Go to Awards 
                        <FaArrowRight/>
                    </a>

                </div>

            </div>

            <div className='col-12 col-md-4 mt-3'>
                    <div className='pt-5'>
                        <p className='top-sub-text-third '>Our Achievement</p>
                        <h1 className='third-card-head'>We are connecting you to the digital life</h1>
                        <p className='sub-text'>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
                        <button className='btn btn-primary p-3 button-third-card'>Discover me <FaArrowRight/></button>
                    </div>

                

            </div>
         </div>
      </div>
       
    )
}

export default Testimonials; 