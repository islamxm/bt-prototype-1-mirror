"use client";
import { Tab, Tabs } from "@mui/material";
import { categoryApi } from "@/entities/category";
import { motion } from "motion/react";
import { useParams, useRouter } from "next/navigation";

export const CategoryTabs = () => {
  const router = useRouter();
  const params = useParams<{ category: string }>();
  const { data, isError } = categoryApi.useGetCategoriesQuery(undefined);

  if (isError || !data) {
    return null;
  }

  const handleChange = (_: any, value: any) => {
    router.push(`/courses/${value}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        value={Number(params?.category)}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": {
            height: ".3rem",
          },
          "& .MuiTabs-list": {
            gap: "2.4rem",
          },
        }}
      >
        {data.categories.map((category) => (
          <Tab
            sx={(theme) => ({
              fontSize: "2.4rem",
              fontWeight: 600,
              color: theme.palette.text.disabled,
              borderRadius: "2rem 2rem 0 0",

              "& .Mui-selected": {
                color: theme.palette.primary.main,
              },
            })}
            label={category.name}
            value={category.id}
            key={category.id}
          />
        ))}
      </Tabs>
    </motion.div>
  );
};
