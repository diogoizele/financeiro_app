import { DatePicker, Form, Input, Modal, Radio } from "antd";
import moment from "moment";

import { Category } from "../../@types/category";

interface NewExpenseModalProps {
  open: boolean;
  onClose?: () => void;
}

type FormFields = {
  title: string;
  description?: string;
  amount: number;
  date: Date;
  category: Category;
};
const DATE_FORMAT = "DD/MM/YYYY";

const INITIAL_VALUES = {
  date: moment(),
  activity: "EXPENSE",
};

export const NewExpenseModal = ({ open, onClose }: NewExpenseModalProps) => {
  const [form] = Form.useForm<FormFields>();

  if (!open) {
    return null;
  }

  return (
    <Modal open={open} title="Nova despesa" onOk={onClose} onCancel={onClose}>
      <Form form={form} labelCol={{ span: 6 }} initialValues={INITIAL_VALUES}>
        <Form.Item label="Título" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Movimentação" name="activity">
          <Radio.Group>
            <Radio.Button value="EXPENSE">Despesa</Radio.Button>
            <Radio.Button value="INCOME">Receita</Radio.Button>
            <Radio.Button value="CONTRIBUTION">Aporte</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Data" name="date">
          <DatePicker format={DATE_FORMAT} />
        </Form.Item>
        <Form.Item label="Descrição" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Valor" name="amount">
          <Input prefix="$" type="number" min={0} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
