import { useParams } from "react-router-dom";
import { Container, DrawerHeader, Main } from "./styles";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { sendQuery } from "./server";

import { chatHistory } from "../../data/data";
import Input from "./components/Input";
import Message from "./components/Message";

type ChatbotProps = {
  open: boolean;
};

const Chatbot = (props: ChatbotProps) => {
  const { open } = props;
  const { chatId } = useParams();
  const chatNumber = parseInt(chatId || "0");

  const [conversation, setConversation] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    setConversation((prevConversation) => [...prevConversation, query]);
    setQuery("");

    sendQuery(query)
      .then((message) => {
        setTimeout(() => {
          setConversation((prevConversation) => [...prevConversation, message]);
          setDisabled(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error sending query:", error);
        setDisabled(false);
      });

    // setTimeout(() => {
    //   setConversation((prevConversation) => [...prevConversation, "Response"]);
    //   setDisabled(false);
    // }, 2000);
  };

  useEffect(() => {
    if (chatNumber >= 1) {
      setConversation(
        chatHistory.find((chat) => chat["id"] === chatNumber)?.history || []
      );
    } else {
      setConversation([]);
    }
  }, [chatNumber]);

  return (
    <Main open={open}>
      <DrawerHeader />
      <Container>
        <Box
          flexGrow={1}
          width={"100%"}
          height={"100%"}
          gap={4}
          display={"flex"}
          flexDirection={"column"}
          overflow={"auto"}
          padding={2}
        >
          {conversation.map((msg, index) => (
            <Message key={index} index={index} msg={msg} />
          ))}
        </Box>
        <Input
          setQuery={setQuery}
          query={query}
          disabled={disabled}
          onSubmit={onSubmit}
        />
      </Container>
    </Main>
  );
};

export default Chatbot;
