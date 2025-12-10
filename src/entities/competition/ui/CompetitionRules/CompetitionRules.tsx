import { SearchIcon } from "@/shared/ui/icons"
import { Box, Button, Paper, Stack } from "@mui/material"

export const CompetitionRules = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: "4.4rem",
        borderRadius: "2.4rem",
        height: "100%"
      }}
      >
      <Stack
        sx={{
          height: "100%",
          alignItems: "flex-start"
        }}
        >
        <Box
          sx={{
            flexGrow: 1,
          }}
          >
          {/* rules */}
        </Box>
        <Button variant={"contained"} endIcon={<SearchIcon/>}>Start competition</Button>  
      </Stack>
    </Paper>
  )
}