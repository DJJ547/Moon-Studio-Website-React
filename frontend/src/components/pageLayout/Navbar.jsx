import React, { useState } from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="about"
          active={activeItem === 'about'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="contact"
          active={activeItem === 'contact'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Dropdown item text="More">
            <Dropdown.Menu>
              <Dropdown.Item name="settings" text="Settings" />
              <Dropdown.Item name="help" text="Help" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;