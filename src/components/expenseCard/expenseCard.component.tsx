import moment from "moment";
import {
  CheckCircleOutlined,
  WarningOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import * as styled from "./expenseCard.styles";

import { ActivityResponse, ActivityStatus } from "../../@types/activity.type";
import { formatCurrency } from "../../util";
import { ActivityActions } from "../activityActions/activityActions.component";
import { THEME } from "../../styles";

interface ExpenseCardProps {
  expense: ActivityResponse;
}

export const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  return (
    <styled.ExpenseCard>
      {expense.status === ActivityStatus.PAID && (
        <styled.ExpenseLeftSize>
          <CheckCircleOutlined style={{ color: THEME.COLORS.SUCCESS }} />
        </styled.ExpenseLeftSize>
      )}

      {expense.status === ActivityStatus.DUE && (
        <styled.ExpenseLeftSize>
          <WarningOutlined style={{ color: THEME.COLORS.DANGER }} />
        </styled.ExpenseLeftSize>
      )}

      {expense.status === ActivityStatus.PENDING && (
        <styled.ExpenseLeftSize>
          <ClockCircleOutlined style={{ color: THEME.COLORS.SECONDARY }} />
        </styled.ExpenseLeftSize>
      )}
      <styled.ExpenseRightSize>
        <styled.ExpenseHeader>
          <styled.ExpenseTitle>{expense.title}</styled.ExpenseTitle>
          <styled.ExpenseDate>
            {moment(expense.date).fromNow()}
          </styled.ExpenseDate>
        </styled.ExpenseHeader>
        <styled.ExpenseCardContent>
          <styled.ExpenseAmount>
            {formatCurrency(expense.amount)}
          </styled.ExpenseAmount>
          <ActivityActions />
        </styled.ExpenseCardContent>
      </styled.ExpenseRightSize>
    </styled.ExpenseCard>
  );
};
