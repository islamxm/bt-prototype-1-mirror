import { Paper, Stack } from "@mui/material";
import { PointFilledIcon } from "../../icons";

export const PointsBadge = () => {
  return (
    <Paper
      elevation={1}
      sx={(theme) => ({
        borderRadius: "1.2rem",
        p: "0.7rem 1rem",
        fontSize: "1.6rem",
        fontWeight: 600,
      })}
    >
      <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
        <PointFilledIcon sx={theme => ({color: theme.palette.gold, fontSize: "2rem"})}/>
        234
      </Stack>
    </Paper>
  );
};
