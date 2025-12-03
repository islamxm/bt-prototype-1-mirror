import { CategoryTabs } from "@/features/category/select-category";
import { Container } from "@/shared/ui";
import { PageEnterAnimationLayout } from "@/widgets/pageEnterAnimationLayout";
import { PromoSection } from "@/widgets/promoSection";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PageEnterAnimationLayout>
      <Stack gap={"4.4rem"} sx={{ pt: "13.8rem" }}>
        <PromoSection bgcolor={"unset"} />
        <Container>
          <CategoryTabs />
        </Container>
      </Stack>
      {children}
    </PageEnterAnimationLayout>
  );
}
