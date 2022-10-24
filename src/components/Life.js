import React,{ useState} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from '../images/c1.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import Change from './Change'

const Life = () => {
    const [state, setState] =useState(false)
  let slides = [c1, c3, c4, c5, c6];
   let slides2 = [c6,c5, c4, c3, c1]
  const settings = {
    // dots: true,
    infinite: true,
    

    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // ltr: true,
    
  };
  const [toggle, setToggle] = useState(false)
    const toggleState=()=>{
        setToggle(true)
      }
  return (
    <>
   { !toggle && <section className="screen2" onMouseDownCapture={toggleState} >
      <div
        style={{
          margin: '5px auto',
          padding: '5px',
          width: '1440px',
        }}
      >
        <header>life at Prime space</header>
        <p className="text">
          We believe when everyone is moving forward together then success takes
          care of itself. Here is a glimpse of what’s it’s like to be a member
          of the Prime Lifespace Team.
        </p>
      </div>
      <div className="imageGallery">
        <div className="left-slideShow">
          {/* <h2>left slide slider</h2> */}
          <Slider {...settings}  style={{ display:'flex', flexDirection: 'row', margin:'10px'}}>
           
             {slides.map(item=> (
                <div >
                <div>
                <img src={item} alt='' className="sliderleft"  style={{ width: '560px', height: '525px', padding:'2px' }}/>
                </div>
                {/* <div>
                <img src={item} alt='' className="sliderleft"  style={{ width: '420px', height: '325px', padding:'2px' }}/>
                </div> */}
                </div>
               
            ))} 
            
          </Slider>
          
        </div>
         <div className="right-slideShow">
          <Slider {...settings}>
           
            {slides2.map(item=> (
                <div>
                <img src={item} alt='' className="slideright"  style={{width: '515px', height: '500px',padding:'2px' }}

                />
                </div>
            ))} 
          </Slider>
        </div>
         
      </div>
      <div>plat button</div>
    </section>}
    {toggle && <Change />}
    </>
  );
};

export default Life;


             