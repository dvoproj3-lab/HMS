import { useState } from 'react';



function AppointmentsTable(){
    const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: 'John Doe',
      time: '09:00 AM',
      type: 'Consultation',
      status: 'Confirmed',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      time: '10:00 AM',
      type: 'Follow-up',
      status: 'Pending',
    },
    {
      id: 3,
      patient: 'Rahul Kumar',
      time: '11:30 AM',
      type: 'Consultation',
      status: 'Confirmed',
    },
    {
      id: 4,
      patient: 'Priya Sharma',
      time: '02:00 PM',
      type: 'Follow-up',
      status: 'Pending',
    },
  ]);
  function confirmAppointment(id) {
    setAppointments((currentAppointments) =>
    currentAppointments.map((appointment) =>
    appointment.id === id
        ? {...appointment, status: 'Confirmed'}
        :appointment
    )
    );
}

    return(
        <section className="appointments-section">
        <div className="section-heading">
            <div>
              <h2>Today's Appointments</h2>
              <p>
                Review your upcoming consultations.
              </p>
            </div>

            <button type="button">
              View All
            </button>
          </div>

          <div className="table-container">
            <table>

              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Time</th>
                  <th>Appointment Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>

                    <td>{appointment.patient}</td>

                    <td>{appointment.time}</td>

                    <td>{appointment.type}</td>

                    <td>
                      <span
                        className={`status ${
                          appointment.status === 'Confirmed'
                            ? 'confirmed'
                            : 'pending'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td>
                        {appointment.status === 'Pending' && (
                            <button
                            type="button"
                            onClick={() => confirmAppointment(appointment.id)}
                            >
                                Confirm
                            </button>
                        )}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </section>
    );
}

export default AppointmentsTable;