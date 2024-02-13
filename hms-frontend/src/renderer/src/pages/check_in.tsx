import axios from "axios";
import { useState, useEffect } from "react";
import SearchComponent from "../components/search";
import SideMenu from "../components/sidemenu";
import TableComponent from "../components/tablecomponent";

interface Patient {
    id: number;
    name: string;
    // Add other patient attributes as needed
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
      searchPatients('', '/api/patients');
    }, []);

    return(
        <>
            <SideMenu/>
            <SearchComponent onSearch={searchPatients} placeholder="Search Patients" apiUrl="/api/patients"/>
            <TableComponent/>
        </>
    )
}

export default CheckIn;