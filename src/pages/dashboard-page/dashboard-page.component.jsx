import React from 'react';
import './dashboard-page.styles.scss';

import ImageSlider from '../../components/image-slider-component/image-slider.component';


const Dashboard = () => {
    return(<div className='dashboard-page-container'> 
      <span><ImageSlider id='imageslider'/></span>
      
      {/* <div className="blog-page-container" id="blog">Hello Blog</div>       */}
       
         
     </div> )
}

export default Dashboard;