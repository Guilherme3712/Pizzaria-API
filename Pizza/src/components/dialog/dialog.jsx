import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    ds_sabor: props.saborCard,
    ds_detalhes: props.descCard,
    ds_preco: props.precoCard,
    ds_img: props.imgCard,
  });

  const handleEditCardapio = () => {
    Axios.put("http://localhost:3001/edit-pizza", {
      id: editValues.id,
      ds_sabor: editValues.saborInput,
      ds_detalhes: editValues.descricaoInput,
      ds_preco: editValues.precoInput,
      ds_img: editValues.imgInput,
    });
    handleClose();
    document.location.reload();
  };

  const handleDeleteCardapio = () => {
    Axios.delete(`http://localhost:3001/delete-pizza/${editValues.id}`);
    handleClose();
    document.location.reload();
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="saborInput"
          label="Sabor"
          defaultValue={props.saborCard}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="descricaoInput"
          label="Descrição"
          defaultValue={props.descCard}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="precoInput"
          label="Preço"
          defaultValue={props.precoCard}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="imgInput"
          label="URL"
          defaultValue={props.imgCard}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleEditCardapio}>Salvar</Button>
        <Button onClick={handleDeleteCardapio}>Excluir</Button>
      </DialogActions>
    </Dialog>
  );
}
