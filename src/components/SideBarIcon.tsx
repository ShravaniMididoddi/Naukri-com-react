import React from 'react';
import "../css/sidebaricon.css";


interface SideBarIconProps {
  onClick: () => void;  
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ onClick }) => {
  return (
    <div className="icon" onClick={onClick}> {/* Trigger the onClick handler on icon click */}
      <ul className="bar-item">
        <a className="bar-link" href="/sidebar">
          <img src="/public/ham.svg" alt="Icon" className="sidebar-icon" />
        </a>
      </ul>
    </div>
  );
};

export default SideBarIcon;
