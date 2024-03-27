import { useEffect, useState } from "react";
import SideMenu from "../../components/sidemenu";
import axios from "axios";

interface Patient {
    patient_id: string;
    first_name: string;
    last_name: string;
    appointment_time: string;
    staff: any;
}

const menuItems = [
    { label: 'Dashboard', to: '/dash' },
    { label: 'Check In', to: '/checkin' },
    { label: 'Register Patients', to: '/register'}, 
    {label: 'Appointments', to: '/apt' },
  ];


function Appointments() {
    const [, setregistrar] = useState('');
    const [formData, setFormData] = useState<Patient>({
        patient_id: "",
        first_name: "",
        last_name: "",
        appointment_time: "",
        staff: localStorage.getItem('username'), // Initialize as an empty string
    });

    useEffect(() => {
        const registrar = localStorage.getItem('username');
        setregistrar(registrar || '');
        console.log('Entered Text:', registrar);
    }, []); 

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://spmsug.pythonanywhere.com/appointment/",
                formData
            );
            console.log("Patient appointment booked successfully:", response.data);
            // Optionally, reset the form after successful booking
            setFormData({
                patient_id: "",
                first_name: "",
                last_name: "",
                appointment_time: "",
                staff: localStorage.getItem('username'),
            });
        } catch (error) {
            console.error("Error booking appointment:", error);
            console.log(formData)
        }
    };

    return (
        <>
            <SideMenu items={menuItems}/>
            <form onSubmit={handleSubmit}>

                <label>
                    Patient ID:
                    <input
                        type="text"
                        name="patient_id"
                        value={formData.patient_id}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Appointment Time:
                    <input
                        type="datetime-local"  // Assuming you want date and time
                        name="appointment_time"
                        value={formData.appointment_time}
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Book Appointment</button>
            </form>

        </>
    );
}

export default Appointments;
