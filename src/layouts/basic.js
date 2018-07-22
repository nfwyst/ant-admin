import React from 'react';
import { Route } from 'react-router-dom';
import styles from '../index.scss';
import logo from '../logo.svg';

import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logoImg} />
            <span>Ant Admin</span>
          </div>
          <Menu>
            <Menu.Item>我没有子菜单</Menu.Item>
            <SubMenu>
              <MenuItemGroup>
                <Menu.Item>表格</Menu.Item>
                <Menu.Item>轮播图</Menu.Item>
                <Menu.Item>进度条</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
        <div className={styles.rightWrap}>
          <div className={styles.right}>
            <Component {...matchProps} />
          </div>
        </div>
      </div>
    )}
  />
);
