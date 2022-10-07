import { ButtonProps } from "@mui/material";
import React from "react";
import { Wrapper } from './styles';

type Props = {
  bold?: boolean;
  border?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
} & ButtonProps;

const BaseButton: React.FC<Props> = ({
  bold,
  border,
  backgroundColor,
  children,
  height,
  onClick,
  radius,
  width,
  style,
  ...rest
}) => {
  return (
    <Wrapper
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        border,
        borderRadius: radius,
        height,
        width,
        fontWeight: bold ? '700' : '400',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default BaseButton;
