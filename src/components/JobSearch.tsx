import "../css/JobSearch.css";
export default function JobSearch(){
  return (
    <div className="job-search-container">
      <div className="search-section">
        <input type="text" placeholder="Search jobs here..." className="search-bar" />
      </div>

      <div className="content">
        <h2>Find Your Dream Job</h2>
        <p>Get discovered by top recruiters and find relevant job recommendations.</p>

        <div className="button-group">
          <button className="register-btn">Register</button>
          <button className="login-btn">Log in</button>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Enter skills, designations, companies" />
          <input type="text" placeholder="Enter location" />
          <button className="search-btn">Search Jobs</button>
        </div>
      </div>
      <div className="bottom-nav">
        <a href="#" className="nav-item active">
          <span className="icon">🏠</span>
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📄</span>
          <span>Apply</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">👤</span>
          <span>Profile</span>
        </a>
      </div>
    </div>
  );
};
