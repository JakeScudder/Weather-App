import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

const Footer = (props) => {

  const handle5Day = (event) => {
    props.fetch5Day();
  }

  const handleClick = () => {
    console.log("going home");
  }


  return (
      <div id="footer">
        <NavLink to="/" className="footer-link" style={{ textDecoration: 'none' }} onClick={handleClick}>
        <i className="material-icons footer-icon" >dashboard</i>
        <span className="footer-text">Home</span>
        </NavLink>
        <NavLink to="/five-day" name="five-day" className="footer-link" style={{ textDecoration: 'none' }} onClick={handle5Day} >
        <i className="material-icons footer-icon" >calendar_today</i>
        <span className="footer-text">5-Day</span>
        </NavLink>
      </div>
  )
}

const FooterWithRouter = withRouter(Footer);
export default FooterWithRouter;