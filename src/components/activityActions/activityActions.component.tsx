import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import * as styled from "./activityActions.styles";

interface ActivityActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ActivityActions = ({ onEdit, onDelete }: ActivityActionsProps) => {
  function handleEdit(event: React.MouseEvent) {
    event.stopPropagation();

    if (typeof onEdit === "function") {
      onEdit();
    }
  }

  function handleDelete(event: React.MouseEvent) {
    event.stopPropagation();

    if (typeof onDelete === "function") {
      onDelete();
    }
  }
  
  return (
    <styled.ActivityActionsContainer>
      <styled.ActivityButton title="Editar" onClick={handleEdit}>
        <EditOutlined />
      </styled.ActivityButton>
      <styled.ActivityButton title="Excluir" onClick={handleDelete}>
        <DeleteOutlined />
      </styled.ActivityButton>
    </styled.ActivityActionsContainer>
  );
};
