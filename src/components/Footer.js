//Icons
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-row">
            <div className="footer-icons">
                <BsFacebook/> 
                <BsTwitter />
                <BsInstagram />    
            </div>
            <p>6333, TAV College, Decarie.</p>    
        </div>
        <p>copyright &copy; 2022</p> 
    </footer>
  )
}

export default Footer
