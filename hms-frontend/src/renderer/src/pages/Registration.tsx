import axios from "axios";
import { useState, useEffect } from "react";
import SideMenu from "../components/sidemenu";

interface Patient {
    id: number;
    patient_id: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    gender: string;
    email: string;
    phone: string;
    res_address: string;
  }

function Registration(){
    const [formData, setFormData] = useState<Patient>({
        id: 0,
        patient_id: "",
        first_name: "",
        last_name: "",
        birthdate: "",
        gender: "",
        email: "",
        phone: "",
        res_address: "" // Initialize as an empty string
      });
    
      useEffect(() => {
        // const fetchCurrentUser = async () => {
        //   try {
        //     // Fetch user information from your authentication endpoint
        //     const response = await axios.get("https://your-auth-api.com/user");
        //     const currentUser = response.data;
        //     setFormData((prevData) => ({
        //       ...prevData,
        //       registrar: currentUser.username || "", // Set the registrar field
        //     }));
        //   } catch (error) {
        //     console.error("Error fetching current user:", error);
        //   }
        // };
    
        // fetchCurrentUser();
      }, []); // Run once when the component mounts
    
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
          const response = await axios.post<Patient>(
            "https://spmsug.pythonanywhere.com/patient/",
            formData
          );
          console.log("Patient registered successfully:", response.data);
          // Optionally, reset the form after successful registration
          setFormData({
            id: 0,
            patient_id: "",
            first_name: "",
            last_name: "",
            birthdate: "",
            gender: "",
            email: "",
            phone: "",
            res_address: "",
          });
        } catch (error) {
          console.error("Error registering patient:", error);
        }
      };
    
      return (
        <>
        <SideMenu/>
        <form onSubmit={handleSubmit}>
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
            Patient ID:
            <input
              type="text"
              name="patient_id"
              value={formData.patient_id}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Birthdate:
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email Address:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Telehone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Residential Address:
            <input
              type="text"
              name="res_address"
              value={formData.res_address}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
        </>
      );
    };
    
    export default Registration;