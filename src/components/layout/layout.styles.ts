import styled from "@emotion/styled";
import { Menu } from "antd";
import { THEME } from "../../styles";

const LAYOUT_HEADER_HEIGHT = "3rem";

export const LayoutContainer = styled("div")(() => ({
  display: "flex",
}));

interface LayoutHeaderProps {
  isMenuCollapsed: boolean;
}

export const LayoutHeader = styled("header")<LayoutHeaderProps>(
  ({ isMenuCollapsed }) => ({
    borderBottom: "1px solid #e5e5e5",
    height: LAYOUT_HEADER_HEIGHT,
    width: isMenuCollapsed ? "calc(100% - 5rem)" : "calc(100% - 11.3rem)",
    marginLeft: isMenuCollapsed ? "5rem" : "11.3rem",
    position: "absolute",
    transition: "0.3s",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
  })
);

export const ChildrenContainer = styled("div")(() => ({
  height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT})`,
  marginTop: LAYOUT_HEADER_HEIGHT,

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
    left: collapsed ? "4rem" : "10.3rem",
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
