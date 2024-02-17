import axios from "axios";
import { useState, useEffect } from "react";
import SearchComponent from "../components/search";
import SideMenu from "../components/sidemenu";
import TableComponent from "../components/tablecomponent";
import { Link } from "react-router-dom";

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
    registrar: string;
  }

function CheckIn(){
    const [searchResults, setSearchResults] = useState<Patient[]>([]);

    const searchPatients = async (query: string, apiUrl: string) => {
      try {
        const response = await axios.get<Patient[]>(`${apiUrl}?query=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching patients:', error);
      }
    };
  
    useEffect(() => {
      // Initial load - fetch all patients
      searchPatients('', 'https://spmsug.pythonanywhere.com/patient/');
    }, []);

    return(
        <>
            <SideMenu/>
            <SearchComponent onSearch={searchPatients} placeholder="Search Patients" apiUrl="https://spmsug.pythonanywhere.com/patient/"/>
            <TableComponent searchData={searchResults}/>
            <Link to="/register">
                 <button type="button">
                        Register New Patients
                </button>
            </Link>
        </>
    )
}

export default CheckIn;