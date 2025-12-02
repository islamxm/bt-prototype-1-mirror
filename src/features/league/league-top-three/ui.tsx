import { Stack } from "@mui/material";
import { Avatar, PointsBadge } from "@/entities/user";

export const LeagueTopThree = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"flex-end"} gap={"17rem"}>
      <Avatar isShadow size="14.4rem" label="username" extra={<PointsBadge/>}/>
      <Avatar isShadow size="16.4rem" label="username" extra={<PointsBadge/>}/>
      <Avatar isShadow size="14.4rem" label="username" extra={<PointsBadge/>}/>
    </Stack>
  );
};
