import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  RiseOutlined,
  ContainerOutlined,
  ShoppingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  FallOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { MenuProps, Typography } from "antd";

import * as styled from "./layout.styles";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/", <PieChartOutlined />),
  getItem("Movimentações", "/activity", <ContainerOutlined />, [
    getItem("Entradas", "/activity/income", <RiseOutlined />),
    getItem("Saídas", "/activity/expense", <FallOutlined />),
    getItem("Aportes", "/activity/contribution", <SlidersOutlined />),
  ]),
  getItem("Compras futuras", "/purchase", <ShoppingOutlined />),
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleToggleCollapsed() {
    setCollapsed(!collapsed);
  }

  function handleNavigate({ key }: { key: React.Key }) {
    navigate(key as string);
  }

  return (
    <styled.LayoutContainer>
      <styled.LayoutHeader isMenuCollapsed={collapsed}>
        <Typography.Text></Typography.Text>
      </styled.LayoutHeader>
      <styled.MenuContainer>
        <styled.MenuCollapseButton
          collapsed={collapsed}
          title={collapsed ? "Abrir Menu" : "Fechar Menu"}
          onClick={handleToggleCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </styled.MenuCollapseButton>
        <styled.MenuComponent
          mode="inline"
          defaultSelectedKeys={[pathname]}
          inlineCollapsed={collapsed}
          items={items}
          onSelect={handleNavigate}
        />
      </styled.MenuContainer>
      <styled.ChildrenContainer>{children}</styled.ChildrenContainer>
    </styled.LayoutContainer>
  );
};
