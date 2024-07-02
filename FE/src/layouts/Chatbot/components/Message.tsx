import { Box, Typography } from "@mui/material";
import { MessageEntity } from "../Chatbot";
import { AssistantAvatar, MsgWrapper, UserAvatar } from "../styles";

type MessageProps = {
  msg: MessageEntity;
};

const Message = (props: MessageProps) => {
  const { msg } = props;
  const isUser = msg.role === "User";
  return (
    <Box
      display={"flex"}
      justifyContent={isUser ? "flex-start" : "flex-end"}
      alignItems={"center"}
      gap={2}
    >
      {isUser && <UserAvatar>N</UserAvatar>}

      <MsgWrapper>
        <Typography>{msg.message}</Typography>
      </MsgWrapper>

      {!isUser && (
        <AssistantAvatar
          alt="Remy Sharp"
          src="../../../../public/Jenkins_logo.svg"
          variant="rounded"
        />
      )}
    </Box>
  );
};

export default Message;
