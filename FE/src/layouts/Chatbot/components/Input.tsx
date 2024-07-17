import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import { InputWrapper } from "../styles";
import { useIsDarkTheme } from "../../../contexts/useIsDarkTheme";

type InputProps = {
  setQuery: (query: string) => void;
  query: string;
  disabled: boolean;
  onSubmit: (e: React.FormEvent) => void;
};

const Input = (props: InputProps) => {
  const { setQuery, query, disabled, onSubmit } = props;
  const { isDarkTheme } = useIsDarkTheme();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <InputWrapper>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter your question here..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        value={query}
        multiline
        fullWidth
        disabled={disabled}
      />
      <IconButton type="button" sx={{ p: "10px" }}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color={isDarkTheme ? "primary" : "secondary"}
        sx={{ p: "10px" }}
        onClick={onSubmit}
        disabled={disabled}
      >
        <SendIcon />
      </IconButton>
    </InputWrapper>
  );
};

export default Input;
