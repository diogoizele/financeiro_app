import { useEffect, useState } from "react";

import {
  ActivityBasicResponse,
  ActivityResponse,
} from "../../@types/activity.type";
import { Category } from "../../@types/category.type";

import { ActivityHeader, NewExpenseModal } from "../../containers";
import { useActivity, useVisibility } from "../../hooks";
import { ExpenseCard } from "../../components";

import * as styled from "./expense.styles";
import { Empty, Spin } from "antd";

export const Expense = () => {
  const [expenses, setExpenses] = useState<ActivityResponse[]>([]);
  const [getExpensesIsLoading, setGetExpensesIsLoading] = useState(false);
  const [getExpensesError, setGetExpensesError] = useState(false);

  const { isVisible, hide, show } = useVisibility();
  const { getActivityPage } = useActivity();

  async function fetchExpenses() {
    setGetExpensesIsLoading(true);
    try {
      const response = await getActivityPage({ category: Category.EXPENSE });

      if (response) {
        const { content } = response;

        setExpenses(content as ActivityResponse[]);
      }
    } catch (error) {
      setGetExpensesError(true);
    }

    setGetExpensesIsLoading(false);
  }

  function handleIncrementNewExpense(expense: ActivityBasicResponse) {
    setExpenses((prevState) => [expense as ActivityResponse, ...prevState]);
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <styled.ExpenseContainer>
      <ActivityHeader
        title="Despesas"
        primaryAction={{ onClick: show, label: "Nova despesa" }}
      />
      <NewExpenseModal
        open={isVisible}
        onClose={hide}
        onIncrementNewExpense={handleIncrementNewExpense}
      />
      {!getExpensesError && !getExpensesIsLoading ? (
        <styled.ExpenseListContainer>
          {expenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
          {expenses.length === 0 && (
            <styled.ExpenseNoListContainer>
              <Empty description="Nenhuma despesa encontrada" />
            </styled.ExpenseNoListContainer>
          )}
        </styled.ExpenseListContainer>
      ) : (
        <styled.ExpenseNoListContainer>
          {getExpensesError && !getExpensesIsLoading && (
            <Empty description="Erro ao carregar despesas" />
          )}
          {!getExpensesError && (
            <Spin spinning={getExpensesIsLoading} size="large" />
          )}
        </styled.ExpenseNoListContainer>
      )}
    </styled.ExpenseContainer>
  );
};
