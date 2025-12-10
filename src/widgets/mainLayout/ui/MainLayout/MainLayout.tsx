"use client";
import { Box, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
}>;

export const MainLayout: FC<Props> = ({ children, header, footer }) => {
  const pathname = usePathname()
  const isAuthPage = pathname === '/auth'

  return (
    <Stack sx={theme => ({ height: "100%", backgroundColor: theme.palette.gold.light })}>
      {(header && !isAuthPage) && header}
      {children && (
        <Box component={"main"} sx={{ flex: "1 0 auto", }}>
          {children}
        </Box>
      )}
      {(footer && !isAuthPage) && footer}
    </Stack>
  );
};
