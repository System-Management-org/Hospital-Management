import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideMenu: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
        <Menu closeOnClick>
          <MenuItem component={<Link to="/dash" />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="/checkin"/>}>Check In</MenuItem>
          <MenuItem component={<Link to="/register"/>}>Register Patients</MenuItem>
          <MenuItem component={<Link to="/apt"/>}>Appointments</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <button
            className={`sb-button place-content-start absolute ${toggled ? 'left-64' : 'left-10'} top-10`}
            onClick={() => setToggled(!toggled)}
          >
            Menu
          </button>
        </div>
      </main>
    </div>
  );
};

export default SideMenu;
