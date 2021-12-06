import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
  display: "flex",
  flexDirection: "column",
};
function ModalBody(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={props.post_title}
          onChange={props.ChangeTitle}
          sx={{
            m: 1,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={props.post_description}
          onChange={props.ChangeDescription}
          sx={{
            m: 1,
          }}
        />
        <Button variant="contained" onClick={props.AddProduct}>
          Contained
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalBody;
