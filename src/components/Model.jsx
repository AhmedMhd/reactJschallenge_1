import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ButtonStyle, Modelstyle} from '../Style/ModelStyle'


export default function BasicModal({open, title, description,type, number, changeTitle, changeDescription, changeType, changeNumber, AddFeedBack, handleClose, handleReset}) {
return (
<div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={Modelstyle} component="form" noValidate autoComplete="off">
    <Typography variant="h6" sx={{color: '#373e68'}}>
        Add Product:
    </Typography>
    <div>
        <TextField
            id="outlined-textarea"
            label="Title"
            multiline
            value={title}
            size="small"
            onChange={changeTitle}
        />
        <TextField
            id="outlined-textarea"
            label="Description"
            multiline
            size="small"
            value={description}
            onChange={changeDescription}
        />
    </div>
    <div>
        <TextField
            id="outlined-textarea"
            label="Type"
            multiline
            size="small"
            value={type}
            onChange={changeType}
        />
        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            size="small"
            value={number}
            onChange={changeNumber}
        />
    </div>
    <div>
        <Button sx={ButtonStyle} onClick={AddFeedBack}>
            Submit
        </Button>
        <Button sx={ButtonStyle} onClick={handleClose}>
            Close
        </Button>
        <Button sx={ButtonStyle} onClick={handleReset}>
            Reset
        </Button>
    </div>
    </Box>
    </Modal>
</div>
);
}
