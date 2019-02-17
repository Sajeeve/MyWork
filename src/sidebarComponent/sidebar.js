import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import 'font-awesome/css/font-awesome.min.css';

class Sidebar extends Component{
    render(){
        return(
            
             <nav className="main-nav">
	            <ul className="main-nav-ul">
                    <li><a>Metrics<span className="sub-arrow"></span></a>
                         <ul>
                            <li>
                            <Link to='/create_metrics'>
         	                    Create
                            </Link>
                            </li>
                            <li>
                            <Link to='/update_metrics'>
                                Update
                            </Link>
                            </li>
                            <li>
                            <Link to='/delete_metrics'>
                                Delete
                            </Link>
                            </li>
                         </ul>
                    </li>
      
                     <li><a>Scores <span className="sub-arrow"></span></a>
                     <ul>
                            <li>
                            <Link to='/create_score'>
         	                    Create
                            </Link>
                            </li>
                            <li>
                            <Link to='/update_score'>
                                Update
                            </Link>
                            </li>
                            <li>
                            <Link to='/delete_score'>
                                Delete
                            </Link>
                            </li>
                         </ul>
                     </li>
                    </ul>
</nav>
             
        );
    }
}

export default Sidebar;

