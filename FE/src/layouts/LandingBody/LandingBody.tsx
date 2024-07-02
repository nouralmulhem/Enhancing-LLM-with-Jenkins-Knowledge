import { Link } from "react-router-dom";
import { ButtonsWrapper, Container, Typography } from "./styles";

import { Button } from "@mui/material";

const LandingBody = () => {
  return (
    <Container>
      <Typography variant="h2" fontWeight="bold">
        Welcome! to{" "}
        <Typography variant="h2" fontWeight="bold" color="primary">
          JenAi{" "}
        </Typography>
      </Typography>
      <Typography variant="h5">
        JenAi is your assistant today! JenAi was a GSoC'24 project by Jenkins.
        The project was to build a chatbot for specific Jenkins knowledge that
        can help users with their queries.
      </Typography>

      <ButtonsWrapper>
        <Button
          aria-labels="Start free trial"
          color="primary"
          variant="contained"
          size="large"
          component={Link}
          to="/dashboard"
        >
          Start free trial
        </Button>
        <Button
          aria-labels="Learn more"
          color="secondary"
          variant="contained"
          size="large"
          component={Link}
          to="https://www.jenkins.io/projects/gsoc/2024/projects/enhancing-an-existing-llm-model-with-domain-specific-jenkins-knowledge/"
        >
          Learn more
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default LandingBody;
