import { Box, Typography } from "@mui/material";
import { MessageEntity } from "../Chatbot";
import { AssistantAvatar, MsgWrapper, UserAvatar } from "../styles";
import PersonIcon from "@mui/icons-material/Person";

type MessageProps = {
  msg: MessageEntity;
};

const Message = (props: MessageProps) => {
  const { msg } = props;
  const isUser = msg.role === "User";

const format_message = (message: string) => {
  console.log(message);
  const urlRegex = /<https?:\/\/[^\s>]+>/g;
  return message
    .replace(urlRegex, (url) => {
      const cleanUrl = url.slice(1, -1);
      return `<a href="${cleanUrl}" target="_blank" style="color: #1b81a2;" rel="noopener noreferrer">${cleanUrl}</a>`;
    })
    .replace(/\n/g, "<br/>");
};

return (
  <Box
    display={"flex"}
    justifyContent={isUser ? "flex-start" : "flex-end"}
    alignItems={"center"}
    gap={2}
  >
    {isUser && (
      <UserAvatar>
        <PersonIcon />
      </UserAvatar>
    )}

    <MsgWrapper>
      {typeof msg.message != "string" ? (
        <Typography>{msg.message}</Typography>
      ) : (
        <Typography
          dangerouslySetInnerHTML={{ __html: format_message(msg.message) }}
        />
      )}
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
