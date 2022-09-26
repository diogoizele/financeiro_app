import { ActivityHeader, NewExpenseModal } from "../../containers";
import { useVisibility } from "../../hooks";

import * as styled from "./expense.styles";

export const Expense = () => {
  const { isVisible, hide, show } = useVisibility();

  return (
    <styled.ExpenseContainer>
      <ActivityHeader
        title="Despesa"
        primaryAction={{ onClick: show, label: "Nova despesa" }}
      />
      <NewExpenseModal open={isVisible} onClose={hide} />
    </styled.ExpenseContainer>
  );
};
