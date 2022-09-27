import { useState } from "react";
import moment from "moment";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  message,
} from "antd";

import { Activity, ActivityBasicResponse } from "../../@types/activity.type";
import { useActivity } from "../../hooks";

interface NewExpenseModalProps {
  open: boolean;
  onClose: () => void;
  onIncrementNewExpense: (expense: ActivityBasicResponse) => void;
}

const DATE_FORMAT = "DD/MM/YYYY";

const INITIAL_VALUES = {
  title: "",
  description: null,
  date: moment(),
  category: "EXPENSE",
};

export const NewExpenseModal = ({
  open,
  onClose,
  onIncrementNewExpense,
}: NewExpenseModalProps) => {
  const [createExpenseLoading, setCreateExpenseLoading] = useState(false);
  const [form] = Form.useForm<Activity>();
  const { createActivity } = useActivity();

  function handleOkModal() {
    form.submit();
  }

  async function handleCreateExpense() {
    const payload = {
      ...form.getFieldsValue(),
      date: moment(form.getFieldValue("date")).format().substring(0, 19),
    };

    try {
      setCreateExpenseLoading(true);
      const newExpense = await createActivity(payload);

      if (newExpense) {
        onIncrementNewExpense(newExpense);
      }

      form.resetFields();
      onClose();
      message.success("Despesa criada com sucesso!");
    } catch (error) {
      message.error("Erro ao criar despesa!");
    }

    setCreateExpenseLoading(false);
  }

  if (!open) {
    return null;
  }

  return (
    <Modal
      open={open}
      title="Nova despesa"
      confirmLoading={createExpenseLoading}
      onOk={handleOkModal}
      onCancel={onClose}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        initialValues={INITIAL_VALUES}
        onFinish={handleCreateExpense}
      >
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: "Título é obrigatório!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Movimentação"
          name="category"
          rules={[{ required: true, message: "Movimentação é obrigatório" }]}
        >
          <Radio.Group>
            <Radio.Button value="EXPENSE">Despesa</Radio.Button>
            <Radio.Button value="INCOME">Receita</Radio.Button>
            <Radio.Button value="CONTRIBUTION">Aporte</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Data"
          name="date"
          rules={[{ required: true, message: "Data é obrigatório!" }]}
        >
          <DatePicker format={DATE_FORMAT} picker="month" />
        </Form.Item>
        <Form.Item label="Descrição" name="description">
          <Input.TextArea rows={4} showCount maxLength={500} />
        </Form.Item>
        <Form.Item
          label="Valor"
          name="amount"
          rules={[{ required: true, message: "Valor é obrigatório!" }]}
        >
          <InputNumber addonBefore="R$" type="number" min={0.1} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
