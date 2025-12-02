import { FC } from "react";
import { StreakStatus } from "../../model";
import { StreakIcon, StreakOutlinedIcon } from "@/shared/ui/icons";
import { SxProps } from "@mui/material";

type Props = {
  status: StreakStatus;
};

const baseStyle: SxProps = {
  fontSize: "2.4rem",
};

export const StreakDay: FC<Props> = ({ status }) => {
  switch (status) {
    case "active":
      return (
        <StreakIcon
          sx={(theme) => ({ ...baseStyle, color: theme.palette.primary.main })}
        />
      );
    case "current":
      return (
        <StreakOutlinedIcon
          sx={(theme) => ({ ...baseStyle, color: theme.palette.primary.main })}
        />
      );
    case "disabled":
      return (
        <StreakIcon
          sx={(theme) => ({ ...baseStyle, color: theme.palette.grey[300] })}
        />
      );
    default:
      return (
        <StreakIcon
          sx={(theme) => ({ ...baseStyle, color: theme.palette.text.disabled })}
        />
      );
  }
};
