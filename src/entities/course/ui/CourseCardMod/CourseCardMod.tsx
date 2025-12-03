import { FC } from "react";
import { Course } from "../../model";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img from "../../../../../public/course-img.png";

export const CourseCardMod: FC<Course> = ({ name, description }) => {
  return (
    <Paper
      sx={theme => ({
        p: "1.6rem",
        height: "16.7rem",
        borderRadius: "2.4rem",
        color: theme.palette.common.black
      })}
    >
      <Stack alignItems={"flex-start"} direction={"row"} gap={"1rem"}>
        <Box
          sx={{
            height: "6.4rem",
            width: "6.4rem",
            flex: "0 0 auto",
            borderRadius: "1.4rem",
            overflow: "hidden",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        >
          <Image src={img} alt="" />
        </Box>
        <Stack gap={".8rem"}>
          <Typography variant="h3" sx={{fontSize: "1.8rem", fontWeight: 400}}>{name}</Typography>
          <Typography
            sx={theme => ({
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              color: theme.palette.text.disabled
            })}
            variant={"body1"}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
