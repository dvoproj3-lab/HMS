function Header() {
    return(
        <header className="topbar">
          <div>
            <h2>Doctor Dashboard</h2>
            <p>Hospital Management System</p>
          </div>

          <div className="doctor-profile">
            <div className="avatar">SK</div>

            <div>
              <strong>Dr. Srinithi</strong>
              <p>General Physician</p>
            </div>
          </div>
        </header>
    );
}

export default Header;