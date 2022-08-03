import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'react-router-dom';



function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false);
    return (
        <nav>
        <div className="row">
          <a className="brand" href="index.html">GO SHOP!</a>
          <a href="signin.html">Sign In</a>
        <input placeholder="Search"></input>
        <button className="open-sidebar"
        onClick={() => setBurgerStatus(true)}>
        <MenuIcon/ >
        </button>
        </div>
        <nav  className={burgerStatus?'navlist active' : 'navlist'}>
            <ul >
                <li>
                    <Link to="{`/search?category=${jersey}`}"> Jersey</Link>
                </li>
                <li>
                    <a href="{`/search?category=${category}`}"> Sneakers</a>
                </li> 
                <li>
                    <CloseIcon onClick={() => setBurgerStatus(false)} />
                </li>
            </ul>
            </nav>
            </nav>
        
          
     
    )
}

export default Header
