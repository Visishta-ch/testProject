import React,{useState} from 'react'
import img1 from '../images/first.jpg'
import img2 from '../images/back.jpg';
import img3 from '../images/image1.jpg';
import img4 from '../images/image2.jpg';
import img5 from '../images/image4.jpg';
import './Change.css'
import Nav from './Nav'

const Change = () => {
    const letters = ['p','r','i','m','e']

    const data =[
        {
            
            h:'PROBLEM SOLVING SKILLS',
            des:'We believe to nurture problem solvers, who lead better.'
        },
        {
        
            h:'RELIABILITY',
            des:'We believe transperancy is the first step to any beginning.'
        },
        {
        
            h:'INNOVATIVE THINKING',
            des:'We encourage innovative ideas and improvising new things.'
        },
        {
             
            h:'MANAGEMENT SKILLS',
            des:'We thrive on good communication and motivation.'
        },
        {
         
            h:'ENGAGEMENT',
            des:'Team work is the secret to achieve uncommon results.'
        }
    ]
    // const photos = [img1,img2,img3,img4,img5]
    const [home,setHome] = useState(false);
    const changeSlide = () => {
        setHome(true)
    }
  return (
    
        <>
           {!home && <section className=" part-3" onMouseDownCapture={changeSlide}>
                <h2 className=" section-head">
                BUILDING CHANGE
                </h2>
                <div className="section-container">
                    <div className="slc">

                    {/* {photos.length!==0 && photos.map((photo) =>(
                        
                            <img src={photo} alt='' className='img-gallery'/>
                        
                    ))} */}
                    <div className="parent-div">
                    <img src={img1} alt='' className='img-gallery'/>
                    <img src={img2} alt='' className='img-gallery'/>
                    <img src={img3} alt='' className='img-gallery'/>
                    <img src={img4} alt='' className='img-gallery'/>
                    <img src={img5} alt='' className='img-gallery'/>
                    </div>
                    </div>
                    <div className='src'>
                        <div className='ds-1'>
                            <div className='inner-style1'></div>
                            <div className='inner-style2'>
                            <div className='inner-style3'></div>
                            </div>
                        </div>
                        <div className='ds-2'>
                            <div className='ds-2-style' >
                                {letters.map(letter => (
                                    <ul>
                                        <li style={{height:'120px', marginTop:'10px'}} >{letter}</li>
                                    </ul>

                                ))                        
                                }

                              
                            </div>
                            <div className='ds-2-style-2'>
                            {/* <div></div> */}
                                {data.map(data => (
                                    <div >
                                        <li  className='listt'>
                                       
                                            <p className='h4'>{data.h}</p>
                                            
                                            <p className='para'>{data.des}</p>
                                      
                                        </li>
                                    </div>
                                ))}
                            <div></div>
                            <div></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>}
            {home && <Nav/>}
        </>
    
  )
}

export default Change