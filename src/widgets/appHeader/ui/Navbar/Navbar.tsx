import { Logo } from "@/shared/ui/Logo";
import { Paper, Link as MuiLink, Stack } from "@mui/material";
import Link from "next/link";
import { UserAvatar } from "@/features/user/user-avatar";
import { getHomePage, routesMap } from "@/shared/model";

const routes = Object.entries(routesMap).map(route => route[1]).filter(route => route.path !== getHomePage())

export const Navbar = () => {

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
        borderRadius: "3rem",
        p: "0 .5rem",
        margin: "0 auto",
        height: "5.8rem",
        alignItems: "center",
        display: "flex",
      })}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"3rem"}>
        <Logo sx={{ ml: "2.4rem" }} />
        {routes.map((route) => (
          <MuiLink
            key={route.id}
            component={Link}
            href={route.path}
            sx={(theme) => ({
              padding: "0.6rem 2.5rem",
              fontWeight: 600,
              fontSize: "1.8rem",
              color: theme.palette.primary.dark,
              "&:hover": {
                color: theme.palette.primary.light,
              },
            })}
          >
            {route.label}
          </MuiLink>
        ))}
        <UserAvatar/>
      </Stack>
    </Paper>
  );
};
