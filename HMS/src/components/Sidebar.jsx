function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">HMS</h2>

      <p className="sidebar-label">MENU</p>

      <nav>
        <a href="#dashboard" className="nav-link active">
          Dashboard
        </a>

        <a href="#patients" className="nav-link">
          Patients
        </a>

        <a href="#appointments" className="nav-link">
          Appointments
        </a>
      </nav>

      <div className="sidebar-footer">
        HMS Portal
      </div>
    </aside>
  );
}

export default Sidebar;