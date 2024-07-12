import { Box, Typography as MUITypography } from "@mui/material";
import { styled } from "@mui/material/styles";

type InputProps = {
  color?: string;
};

export const ButtonsWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
}));

export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  width: "60%",
  margin: "auto",
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const Typography = styled(MUITypography)<InputProps>(({ color }) => ({
  color,
  display: "inline",
}));
