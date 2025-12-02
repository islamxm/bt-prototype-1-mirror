import { Rating } from "@/entities/league";
import { Tab, Tabs } from "@mui/material";
import { FC, useState } from "react";

type Props = {
  initialRating?: Rating
}

export const LeagueRatingTabs:FC<Props> = ({
  initialRating = 'global'
}) => {
  const [value, setValue] = useState<Rating>(initialRating)
  
  return (
    <Tabs
      value={value}
      onChange={(_, value) => setValue(value)}
      sx={(theme) => ({
        maxWidth: "450px",
        width: "100%",
        minHeight: "auto",
        bgcolor: theme.palette.common.white,
        borderRadius: "3rem",
        p: "5px",
        "& .MuiTab-root": {
          minHeight: "auto",
          p: "1.4rem",
          zIndex: 2,
          color: theme.palette.text.disabled,
          borderRadius: "3rem",
          width: "50%",
          background: "none",
          transition: theme.transitions.create("color", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
          "&.Mui-selected": {
            color: theme.palette.common.white,
          },
        },
        "& .MuiTabs-indicator": {
          height: "100%",
          borderRadius: 99,
          bgcolor: theme.palette.primary.main,
          zIndex: 1,
          transition: theme.transitions.create(["left", "width"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        },
      })}
    >
      <Tab label="Local rating" value={"login"} />
      <Tab label="Global rating" value={"register"} />
    </Tabs>
  );
};
