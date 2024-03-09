import SideMenu from "../components/sidemenu";

const menuItems = [
    { label: 'Dashboard', to: '/dash' },
    { label: 'Check In', to: '/checkin' },
    { label: 'Register Patients', to: '/register'}, 
    {label: 'Appointments', to: '/apt' },
  ];


function Frontdesk(){

    
    return(
        <>
            <SideMenu items={menuItems}/> 
        </>
        )
    }



export default Frontdesk;