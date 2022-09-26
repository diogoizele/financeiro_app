import styled from "@emotion/styled";
import { Form } from "antd";

import { THEME } from "../../styles";

export const LoginContainer = styled("div")(() => ({
  backgroundColor: THEME.COLORS.PRIMARY,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const LoginForm = styled(Form)({
  backgroundColor: THEME.COLORS.LIGHT,
  padding: "2rem",
  borderRadius: 4,
});
