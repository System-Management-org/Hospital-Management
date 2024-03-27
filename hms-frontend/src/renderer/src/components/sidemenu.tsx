import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  items: { label: string; to: string }[];
}

const SideMenu: React.FC<SideMenuProps> = ({ items }) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
        <Menu closeOnClick>
          {items.map((item, index) => (
            <MenuItem key={index} component={<Link to={item.to} />}>
              {item.label}
            </MenuItem>
          ))}
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
