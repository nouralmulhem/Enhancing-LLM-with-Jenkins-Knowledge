import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box width={"100%"} paddingBottom={"1rem"} bottom={0} position={"absolute"}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color={theme.palette.text.primary}
              variant="h5"
              fontWeight={"bold"}
            >
              Jenkins Chatbot
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary" variant="subtitle1">
              {`GSoC'24 | Jenkins | Enhancing LLM Project`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
