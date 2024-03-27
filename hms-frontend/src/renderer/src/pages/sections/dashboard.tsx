import SideMenu from "../../components/sidemenu";

const menuItems = [
    { label: 'Dashboard', to: '/dash' },
    { label: 'Check In', to: '/checkin' },
    { label: 'Register Patients', to: '/register'}, 
    {label: 'Appointments', to: '/apt' },
  ];
function Dashboard(){

    
    return(
        <>
            <SideMenu items={menuItems}/> 
            <h1>nsjnkcd</h1>
        </>
        )
    }



export default Dashboard;