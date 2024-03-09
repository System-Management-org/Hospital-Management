// import { useState, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SideMenu from '../components/sidemenu';

interface User {
  username: string;
  email: string;
  password: string;
}

const menuItems = [
  { label: 'Dashboard', to: '/dash' },
  { label: 'Add Staff', to: '/checkin' },
  // { label: 'Register Patients', to: '/register'}, 
  // {label: 'Appointments', to: '/apt' },
];

function CreateUser() {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
  })

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
          "https://spmsug.pythonanywhere.com/register/",
          formData
      );
      console.log("Patient appointment booked successfully:", response.data);
      // Optionally, reset the form after successful booking
      setFormData({
        username: "",
        email: "",
        password:""
      });
  } catch (error) {
      console.error("Error creating user:", error);
      console.log(formData)
  }
};



  return (
    <>
    <SideMenu items={menuItems}/>
    <form onSubmit={handleSubmit}>

<label>
    Username:
    <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
    />
</label>

<label>
    Email:
    <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
    />
</label>

<label>
    Password:
    <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
    />
</label>

{/* <label>
    Appointment Time:
    <input
        type="datetime-local"  // Assuming you want date and time
        name="appointment_time"
        value={formData.password}
        onChange={handleInputChange}
    />
</label> */}

<button type="submit">Create User</button>
</form>
    
    </>
  );
}

export default CreateUser