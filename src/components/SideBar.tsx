import { useLayoutEffect } from "react";
import "../css/sidebar.css";

interface SideBarProps {
  isOpen: boolean;  // Receive the `isOpen` prop to toggle the sidebar
}

export default function SideBar({ isOpen }: SideBarProps) {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="profile-section">
        <img src="/public/profile.jpeg" alt="Profile" className="profile-pic" />
        <div className="profile-text">
          <h2>Build your profile</h2>
          <p>Job opportunities waiting for you at Naukri.com</p>
        </div>
      </div>

      <div className="buttons">
        <ul className="side-item">
          <a className="side-link" href="/login">
            <button className="login-btn">Login</button>
          </a>
        </ul>
        <ul className="side-item">
          <a className="side-link" href="/register">
            <button className="register-btn">Register</button>
          </a>
        </ul>
      </div>

      <ul className="menu">
        <li>
          <a href="/jobsearch">
            <i></i> <b>Job Search</b>
          </a>
        </li>
        <li>
          Chat for help <span className="new">New</span>
        </li>
        <li>
          Jobseeker services <span className="paid">(Paid)</span>
        </li>
        <li> Display preferences</li>
        <li> Naukri.com blog</li>
        <li>How Naukri.com works</li>
        <li>Write to us</li>
        <li> About us</li>
      </ul>
    </div>
  );
}
