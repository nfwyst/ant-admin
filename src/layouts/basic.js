import React from 'react';
import { Route, Link } from 'react-router-dom';
import styles from '../index.scss';
import logo from '../logo.svg';

import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

const { SubMenu, Item } = Menu;
const MenuItemGroup = Menu.ItemGroup;

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="logo" className={styles.logoImg} /></Link>
            <span>Ant Admin</span>
          </div>
          <Menu theme="dark" mode="inline">
            <Item><span><Icon type="bars" /><Link to="/introduce">主菜单</Link></span></Item>
            <SubMenu title={<span><Icon type="appstore"/><span>主导航</span></span>}>
              <MenuItemGroup>
                <Item><Link to="/table">表格</Link></Item>
                <Item><Link to="/form">表单</Link></Item>
                <Item><Link to="/progress">进度条</Link></Item>
                <Item><Link to="/carousel">轮播图</Link></Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
        <div className={styles.rightWrap}>
          <Menu mode="horizontal">
            <SubMenu className={styles['ant-menu-submenu']} title={<span><Icon type="user" /><span>admin</span></span>}>
              <Item>退出登录</Item>
            </SubMenu>
          </Menu>
          <div className={styles.right}>
            <Component {...matchProps} />
          </div>
        </div>
      </div>
    )}
  />
);
