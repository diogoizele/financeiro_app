import styled from "@emotion/styled";
import { Menu } from "antd";
import { THEME } from "../../styles";

export const LayoutContainer = styled("div")(() => ({
  display: "flex",
}));

export const ChildrenContainer = styled("div")(() => ({
  height: "100vh",
  display: "flex",
  overflow: "hidden",
  width: "100%",
  padding: "1rem",
  backgroundColor: THEME.COLORS.LIGHT,
}));

export const MenuContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
}));

export const MenuComponent = styled(Menu)(() => ({
  height: "100%",
  alignSelf: "flex-start",
  paddingTop: "4rem",
}));

interface MenuCollapseButtonProps {
  collapsed: boolean;
}

export const MenuCollapseButton = styled("button")<MenuCollapseButtonProps>(
  ({ collapsed }) => ({
    position: "absolute",
    top: "1rem",
    left: collapsed ? "4rem" : "10rem",
    transition: "left 0.3s",
    zIndex: 2,
    border: "none",
    backgroundColor: THEME.COLORS.PRIMARY,
    color: THEME.COLORS.WHITE,
    borderRadius: "100%",
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  })
);
