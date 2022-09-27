import { Button, Typography } from "antd";

import * as styled from "./activityHeader.styles";

interface ActivityHeaderProps {
  title: string;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
}

export const ActivityHeader = ({
  title,
  primaryAction,
}: ActivityHeaderProps) => {
  return (
    <styled.ActivityHeaderContainer>
      <Typography.Title level={2} style={{ margin: 0 }}>{title}</Typography.Title>
      <Button type="primary" size="large" onClick={primaryAction.onClick}>
        {primaryAction.label}
      </Button>
    </styled.ActivityHeaderContainer>
  );
};
