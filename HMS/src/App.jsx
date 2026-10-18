import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Statscards from './components/Statscards.jsx';
import AppointmentsTable from './components/AppointmentsTable.jsx';

function App() {
  // Sample appointment data
  
  return (
    <div className="app-container">

      <Sidebar />

      {/* Main Dashboard */}
      <main className="main-content">

        {/* Header */}
        <Header />

        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Good morning, Doctor!</h1>
          <p>
            Here is your hospital overview for today.
          </p>
        </section>

        {/* Dashboard Statistics */}
        <Statscards />

        {/* Appointments Table */}
        <AppointmentsTable /> 

          

      </main>
    </div>
  );
}

export default App;