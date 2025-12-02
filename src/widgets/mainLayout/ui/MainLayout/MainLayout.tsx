import { Box, Stack } from "@mui/material"
import { FC, PropsWithChildren, ReactNode } from "react"

type Props = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
}>

export const MainLayout:FC<Props> = ({
  children,
  header,
  footer
}) => {
  return (
    <Stack
      sx={{height: "100%"}}
      >
      {header && header}
      {children && (
        <Box component={'main'} sx={{flex: "1 0 auto"}}>{children}</Box>
      )}
      {footer && footer}
    </Stack>
  )
}