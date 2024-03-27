import SideMenu from "../components/sidemenu";

const menuItems = [
    { label: 'Dashboard', to: '/dash' },
    { label: 'Vitals', to: '/checkin' },
    { label: 'Patient History', to: '/register'}, 
  ];

function Nurse(){
    return(
        <>
        <SideMenu items={menuItems}/> 
            <h1>Nurse</h1>
        </>
    )
}
export default Nurse