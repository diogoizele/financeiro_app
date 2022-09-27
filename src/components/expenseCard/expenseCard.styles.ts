import styled from "@emotion/styled";
import { THEME } from "../../styles";

export const ExpenseCard = styled("button")(() => ({
  display: "flex",
  alignItems: "center",

  border: `1px solid ${THEME.COLORS.GRAY_200}`,

  background: THEME.COLORS.WHITE,

  padding: "0.8rem 1rem",
  gap: "1rem",

  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    borderColor: THEME.COLORS.GRAY_400,
    filter: "brightness(0.95)",
  },
}));

export const ExpenseLeftSize = styled("div")(() => ({
  fontSize: "1.4rem",
}));
export const ExpenseRightSize = styled("div")(() => ({ flex: 1 }));

export const ExpenseHeader = styled("header")(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const ExpenseCardContent = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
}));

export const ExpenseTitle = styled("h3")(() => ({
  fontSize: "1.1rem",
  margin: 0,
  color: THEME.COLORS.GRAY_800,
}));

export const ExpenseAmount = styled("p")(() => ({
  display: "flex",

  margin: 0,
  fontSize: "1.2rem",
  color: THEME.COLORS.GRAY_700,
}));

export const ExpenseDate = styled("time")(() => ({
  fontSize: "0.9rem",
  color: THEME.COLORS.GRAY_600,
  opacity: 0.9,
}));
