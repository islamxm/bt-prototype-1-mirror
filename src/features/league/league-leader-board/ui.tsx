import { Avatar, PointsBadge } from "@/entities/user";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const LeagueLeaderBoard = () => {
  return (
    <Stack gap={"1.2rem"}>
      <Paper sx={{ p: "1.6rem", borderRadius: "2.5rem" }} elevation={1}>
        <Stack gap={"1.6rem"} alignItems={"center"} direction={"row"}>
          <Typography
            textAlign={"center"}
            sx={{ width: "4.8rem", fontSize: "2.4rem", fontWeight: 600 }}
          >
            4
          </Typography>
          <Box sx={{flexGrow: 1}}>
            <Avatar
              gap={"2rem"}
              size="6.4rem"
              direction={"row"}
              label={"username"}
            />
          </Box>
          <PointsBadge />
        </Stack>
      </Paper>
      <Paper sx={{ p: "1.6rem", borderRadius: "2.5rem" }} elevation={1}>
        <Stack gap={"1.6rem"} alignItems={"center"} direction={"row"}>
          <Typography
            textAlign={"center"}
            sx={{ width: "4.8rem", fontSize: "2.4rem", fontWeight: 600 }}
          >
            4
          </Typography>
          <Box sx={{flexGrow: 1}}>
            <Avatar
              gap={"2rem"}
              size="6.4rem"
              direction={"row"}
              label={"username"}
            />
          </Box>
          <PointsBadge />
        </Stack>
      </Paper>
    </Stack>
  );
};
