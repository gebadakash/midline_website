import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import "./TopBar.css";

const TopBar = () => {
    const infoLinks = [
        { icon: faMapMarkerAlt, text: 'Trimurtee Nagar, Nagpur, Maharashtra', href: '#' },
        { icon: faEnvelope, text: 'sales@midlinemedia.com', href: '#' }
    ];

    return (
        <div className="container-fluid bg-dark d-none pd-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info" style={{padding:"10px"}}>
                        {infoLinks.map((link, index) => (
                            <small key={index} className="me-3 text-white">
                                <a href={link.href}><FontAwesomeIcon icon={link.icon} className="me-2 text-danger" /></a>
                                {link.text}
                            </small>
                        ))}
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex" style={{padding:"10px"}}><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <a href="" className="nav-fill btn btn-sm-square rounded-circle me-2"><FaFacebook className='text-primary' style={{fontSize:"25px"}}/></a>
                        <a href="" className="nav-fill btn btn-sm-square rounded-circle me-2"><FaInstagram className='text-danger' style={{fontSize:"25px"}}/></a>
                        <a href="" className="nav-fill btn btn-sm-square rounded-circle me-0"><CiLinkedin className='text-primary' style={{fontSize:"25px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
