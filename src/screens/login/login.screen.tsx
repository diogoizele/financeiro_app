import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, message } from "antd";

import { useAuth } from "../../hooks";

import * as styled from "./login.styles";

type FormFields = {
  username: string;
  password: string;
};

export const Login = () => {
  const [form] = Form.useForm<FormFields>();
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      await login(form.getFieldsValue());

      message.success("Logado ao financeiro");
    } catch (error: any) {
      if (error?.response?.status === 401) {
        message.error("Nome de usuário ou senha inválidos");
      }
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <styled.LoginContainer>
      <styled.LoginForm
        form={form}
        autoComplete="off"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Typography.Title level={1}>Entrar no Financeiro</Typography.Title>
        <Form.Item
          label="Nome de usuário"
          name="username"
          rules={[
            { required: true, message: "Nome de usuário é obrigatório!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Senha é obrigatório!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </styled.LoginForm>
    </styled.LoginContainer>
  );
};
