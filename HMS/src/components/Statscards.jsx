function Statscards(){
    return(
        <section className="stats-grid">

          <div className="stat-card">
            <p>Total Patients</p>
            <h2>128</h2>
            <span>Registered patients</span>
          </div>

          <div className="stat-card">
            <p>Today's Appointments</p>
            <h2>12</h2>
            <span>Scheduled for today</span>
          </div>

          <div className="stat-card">
            <p>Pending Appointments</p>
            <h2>5</h2>
            <span>Awaiting confirmation</span>
          </div>

        </section>
    );
}

export default Statscards;