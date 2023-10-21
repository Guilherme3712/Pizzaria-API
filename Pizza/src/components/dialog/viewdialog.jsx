import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function ViewDialog(props) {

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal
    open={props.open} 
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Card>
                <CardMedia
                    sx={{ height: 160 }}
                    image={props.imgCard}
                    title="green iguana"
                />
            </Card>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.saborCard}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.descCard}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Preço R${props.precoCard}
            </Typography>
        </Box>
    </Modal>
    );
}
