import './header.css';
import { IoFootballOutline } from "react-icons/io5";

export default function Header(){

        return (
            <div className='header'>
              <div className="container">
                  <IoFootballOutline className='iconoF'/><a className="navbar-brand" href="#sec">. FutbolínFo .</a>
              </div>
              <div className='slogan'>Futbolízate con <span className='brand'>futbolínfo .</span></div>
          </div>
    )
}