import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material";
import { useMemo } from "react";
import List from "@mui/material/List";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { CustomListItem } from "../styles";
import { chatHistory } from "../../../data/data";

const History = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const chatNumber = parseInt(chatId || "0");

  const historyElements = useMemo(
    () =>
      chatHistory.map((chat) => ({
        id: chat.id,
        text: chat.history[0].slice(0, 25) + "..",
      })),
    []
  );

  return (
    <>
      {historyElements && (
        <>
          <Divider />
          <List>
            {historyElements.map((item) => (
              <CustomListItem
                key={item.id}
                disablePadding
                contained={chatNumber == item.id ? "true" : "false"}
              >
                <ListItemButton
                  onClick={() => navigate(`/dashboard/${item.id}`)}
                >
                  <ListItemIcon>
                    <ChatIcon color="info" />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </CustomListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default History;
