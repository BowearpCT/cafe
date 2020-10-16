import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
const Nav = () => {
  const history = useHistory();
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item onClick={() => history.push("/")} key="1">
          Home
        </Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </>
  );
};

export default Nav;
