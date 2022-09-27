import styled from "@emotion/styled";

export const ExpenseContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const ExpenseListContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  height: "100%",
  overflow: "auto",
  marginTop: "1rem",
}));

export const ExpenseNoListContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));
