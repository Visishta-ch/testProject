
import img1 from '../images/img1.jpg'


const Main = () => {
  
  return (
    <>
    <div className="main-container" >
  
        <div className='left-container'>
            <img src={img1} alt='' className='img-slide1'/>
        </div>
        <div className='right-container'>
            <h2>Join our tribe</h2>
            <p>
            Let’s join our efforts towards building the unshakable foundation for a better tomorrow.
            </p>
        </div>
        
    
    </div>
    
    </>
  )
}

export default Main