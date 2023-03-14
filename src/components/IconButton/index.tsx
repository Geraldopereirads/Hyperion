import { IconButton } from "@chakra-ui/react";
import { IIconButtonProps } from "./type";

export const IconBtn = ({ selectedIcon }: IIconButtonProps) => {
  return (
    <IconButton
      variant="unstyled"
      colorScheme="pink"
      aria-label="cart"
      fontSize="20px"
      icon={selectedIcon}
    />
  );
};
