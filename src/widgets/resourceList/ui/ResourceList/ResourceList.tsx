import { Grid, type StackProps } from "@mui/material";
import {
  useEffect,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { WithUIStatuses } from "@/shared/types";
import { useIntersectionObserver } from "react-intersection-observer-hook";

type Props = PropsWithChildren<WithUIStatuses<{
  skeleton?: {
    component: ReactNode;
    count: number;
  };
  onLoadMore?: (...args: any[]) => any;
  canLoadMore?: boolean;
}>> &
  Pick<StackProps, "gap" | "direction">;

const LoadingFallback = () => {
  return "Loading...";
};

export const ResourceList: FC<Props> = ({
  skeleton,
  children,
  isLoading,
  isError,
  isSuccess,
  onLoadMore,
  canLoadMore,
}) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    if(isVisible) {
      onLoadMore?.();
    }
  }, [isVisible, children, onLoadMore]);

  return (
    <>
      <Grid container spacing={"1rem"}>
        {isLoading &&
          (skeleton ? (
            new Array(skeleton?.count).fill(1).map(() => skeleton.component)
          ) : (
            <LoadingFallback />
          ))}
        {isSuccess && children}
      </Grid>
      {!isError && canLoadMore && <div ref={ref} style={{ height: 1, width: '100%' }}></div>}
    </>
  );
};
