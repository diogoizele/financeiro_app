import styled from "@emotion/styled";
import { THEME } from "../../styles";

export const ActivityActionsContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontSize: 16,

  gap: "0.5rem",
}));

export const ActivityButton = styled("button")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 4,
  width: 28,
  height: 28,
  borderRadius: 2,
  border: `1px solid ${THEME.COLORS.GRAY_400}`,
  background: THEME.COLORS.GRAY_200,
  color: THEME.COLORS.GRAY_600,
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    background: THEME.COLORS.GRAY_300,
  },
}));
