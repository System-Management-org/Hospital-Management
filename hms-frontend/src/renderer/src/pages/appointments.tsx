import { useState } from "react";
import SideMenu from "../components/sidemenu";

interface Patient {
    patient_id: string;
    name: string;
    appointment_time: string;
    staff: string;
  }

function Appointments(){
    // const [formData, setFormData] = useState<Patient>({
    //     patient_id: "",
    //     name:"",

    //     phone: "",
    //     res_address: "", // Initialize as an empty string
    //   });
    

    return(
        <>
            <SideMenu/>

        </>
    )
}

export default Appointments;