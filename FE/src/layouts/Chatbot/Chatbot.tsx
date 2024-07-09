import { useParams } from "react-router-dom";
import { Container, DrawerHeader, Main } from "./styles";
import { Box, useTheme } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

import { chatHistory } from "../../data/data";
import Input from "./components/Input";
import Message from "./components/Message";
import { sendQuery } from "./server";

type ChatbotProps = {
  open: boolean;
};

export type MessageEntity = {
  role: string;
  message: ReactNode;
};

const Chatbot = (props: ChatbotProps) => {
  const { open } = props;
  const { chatId } = useParams();
  const theme = useTheme();
  const chatNumber = parseInt(chatId || "0");

  const [conversation, setConversation] = useState<MessageEntity[]>([]);
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    setConversation((prevConversation) => [
      ...prevConversation,
      { role: "User", message: query },
    ]);
    setQuery("");
    setLoading(true);

    sendQuery(query)
      .then((message) => {
        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation,
            { role: "Assistant", message: message },
          ]);
          setDisabled(false);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error sending query:", error);
        setLoading(false);
        setDisabled(false);
      });

    // setTimeout(() => {
    //   setConversation((prevConversation) => [
    //     ...prevConversation,
    //     { role: "Assistant", message: "Response" },
    //   ]);
    //   setLoading(false);
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
      <Box height={"100%"} display={"flex"} justifyContent={"center"}>
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
              <Message key={index} msg={msg} />
            ))}
            {loading && (
              <Message
                msg={{
                  role: "Assistant",
                  message: (
                    <Box
                      component="img"
                      alt="Jenkins Logo"
                      src="../../../public/3-dots-fade.svg"
                      sx={{
                        filter:
                          theme.palette.mode === "dark" &&
                          "invert(100%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)",
                      }}
                    />
                  ),
                }}
              />
            )}
          </Box>
          <Input
            setQuery={setQuery}
            query={query}
            disabled={disabled}
            onSubmit={onSubmit}
          />
        </Container>
      </Box>
    </Main>
  );
};

export default Chatbot;
