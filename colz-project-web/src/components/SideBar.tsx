import * as React from 'react';
import { Link } from 'react-router-dom';
import side from '../images/sidebar.png';
class SideBar extends React.Component<any, any>
{
  render(){
    
    return(

      <div className= "navbar-fixed">
      <nav className= "blue darkes-2">
        <div className="nav-wrapper">
          {/* <Link to="/" className="brnad-logo" >Exibit</Link> */}
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
          <div className="nav-content">
              <img src={side} alt="Sidebar Image"></img>
              <p>Menu</p>
          </div>
           <div className="nav-content"><Link to="/home">Home</Link></div>  
           <div className="nav-content"><Link to="/graph">Graph</Link></div> 
           <div className= "nav-content"><Link to="/predict">Predict</Link></div> 
        

        </div>
      </nav>
    </div>
    )
    
  }
    

  }
  
  export default SideBar;