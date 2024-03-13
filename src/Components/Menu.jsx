/* eslint-disable react/prop-types */

import { Menu } from "semantic-ui-react";

export default function Menubar({ activeItem, handleItemClick }) {
  return (
    <Menu>
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleItemClick}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        name="master"
        active={activeItem === "master"}
        onClick={handleItemClick}
      >
        Master
      </Menu.Item>
      <Menu.Item
        name="party"
        active={activeItem === "party"}
        onClick={handleItemClick}
      >
        Party
      </Menu.Item>
      <Menu.Item
        name="unit"
        active={activeItem === "unit"}
        onClick={handleItemClick}
      >
        Unit
      </Menu.Item>
      <Menu.Item
        name="item"
        active={activeItem === "item"}
        onClick={handleItemClick}
      >
        Item
      </Menu.Item>
    </Menu>
  );
}
