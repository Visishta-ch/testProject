import React,{ useState} from 'react'
import asset from '../images/asset.png'
import Main from './Main'
import Life from './Life'
import Change from './Change'
const Nav = () => {
    const [state, setState] = useState(false)
    
  const changeSlide =()=>{
    setState(true)
  }
 
  return (
    <>
    {!state && <div className="slide1"  onMouseDownCapture={changeSlide}>
        <nav className="main-nav">
            <div></div>
            <div className="head"> 
                <ul >
                    
                    <li>Expertise</li>
                    <li>Invest</li>
                    <li><img src={asset} alt='' className="img-responsive"/></li>
                    <li>projects</li>
                    <li>housing</li>
                </ul>
                
            </div>
            <div className="nav-end">
                <button className="btn">Enquire</button>
                <div className="style-icon">
                    <div className="style1"></div>
                    <div className='style2'></div>
                    <div className="style1"></div>
                </div>
            </div>
            
        </nav>

        <Main/>
    </div>}
    { state && <Life />}
    {/* {toggle && <Change/> } */}
   </>
  )
}

export default Nav
