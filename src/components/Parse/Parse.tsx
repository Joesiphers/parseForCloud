import { TextField, Box, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useParseHook from "./useParseHook";
import { saveItem } from "../../api/apis";

export default function ParseUI() {
  //use hook to seperate logic and UI
  const { formData, inputHandler } = useParseHook();
  return (
    <>
      <Box sx={{ m: 2 }}>
        <TextField
          id="title"
          value={formData.title}
          onChange={(e) => inputHandler(e)}
          label={"Title of artical"}
        />
      </Box>
      <Box sx={{ m: 2 }} component="form">
        <TextField
          id="content"
          value={formData.content}
          onChange={(e) => inputHandler(e)}
          required={true}
          label={"TEXT"}
          multiline
          minRows={4}
          maxRows={10}
          error={false}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ m: 2 }}>
        <TextField
          id="keywords"
          value={formData.keywords}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e)}
          label="keywords"
        />
      </Box>
      <Box sx={{ m: 2 }}>
        <TextField
          id="address"
          value={formData.address}
          label="address from"
          onChange={(e) => inputHandler(e)}
        />
      </Box>
      <Button
        variant="outlined"
        onClick={() => {
          saveItem(formData);
        }}
      >
        sumit
      </Button>
    </>
  );
}
/*  const [formData, setFormData] = useState<IformData>({
    content: "",
    keywords: "",
    address: ""
  });
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const data = { ...formData };
    if (formData.hasOwnProperty(e.target.id)) {
      data[e.target.id] = e.target.value;
    }
    setFormData(data);
    console.log(data);
  };*/
/**interface IformData {
  [content: string]: string;
  [keywords: string]: string;
  [address: string]: string;
} */
