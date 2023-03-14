import { Skeleton } from "@chakra-ui/react";

export const DefaultSkeleton = () => {
  <>
    <Skeleton color={"gray.300"} height="20px" />
    <Skeleton color={"gray.500"} height="20px" />
    <Skeleton color={"gray.700"} height="20px" />
  </>;
};
