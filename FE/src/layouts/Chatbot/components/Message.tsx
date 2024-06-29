import Paper from "@mui/material/Paper";
import { Avatar, Box, Typography } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

type MessageProps = {
  index: number;
  msg: string;
};

const Message = (props: MessageProps) => {
  const { index, msg } = props;
  return (
    <Box
      key={index}
      display={"flex"}
      justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
      alignItems={"center"}
      gap={2}
    >
      {index % 2 === 0 && <Avatar sx={{ bgcolor: pink[500] }}>N</Avatar>}

      <Paper
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          width: "70%",
          backgroundColor: grey[900],
        }}
      >
        <Typography key={index}>{msg}</Typography>
      </Paper>

      {index % 2 !== 0 && (
        <Avatar
          alt="Remy Sharp"
          src="../../../../public/Jenkins_logo.svg"
          variant="rounded"
          sx={{ height: 60, width: 40 }}
        />
      )}
    </Box>
  );
};

export default Message;
