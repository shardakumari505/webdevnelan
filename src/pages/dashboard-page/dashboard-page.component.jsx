import React,{useContext} from 'react';
import './dashboard-page.styles.scss';
import { UserContext } from '../../userauth';
import Collab from '../../components/features/collab.components';
import TodoComponent from '../../components/features/todo.components';
import BlogComponent from '../../components/features/blog.components';
import RoomsComponents from '../../components/features/rooms.components';
import Footer from '../../components/footer-component/footer.component';

const Dashboard = () => {
  const [loggedIn,setloggedIn] = useContext(UserContext);

    return(<div className='dashboard-home-page-container'> 
      <div className='dashboard-page-container'>
          <div className="home-page-text1">
            <h2 className="home-text-title">{loggedIn === true?'Dhanyawad, Toh chaliye shuru krte hai :)':'A Platform   for   Developers to connect and code :)'}</h2>
          </div>
          <div className="home-page-lottie-animation"><lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_oyi9a28g.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player></div>
      </div>
      <div className=''><Collab /></div>
      <div className=''><TodoComponent /></div>
      <div className=''><RoomsComponents /></div>
      <div className=''><BlogComponent /></div>
      <div className=''><Footer /></div>
       
         
     </div>
     
     )
}

export default Dashboard;