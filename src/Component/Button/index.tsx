import { Button } from "@chakra-ui/react";
import React from "react";

type CustomButtonProps = {
  variant?: "ghost" | "solid" | "navBar";
  stylesProps?: Object;
  children: any;
  OnClick?: () => void;
};

export default function CustomButton({
  variant = "solid",
  children,
  stylesProps = {},
  OnClick,
}: CustomButtonProps) {
  return (
    <Button variant={variant} sx={stylesProps} onClick={OnClick}>
      {children}{" "}
    </Button>
  );
}
