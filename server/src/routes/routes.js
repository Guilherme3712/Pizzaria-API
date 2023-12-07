const express = require("express");
const CardapioController = require("../controllers/CardapioController");
const UsuarioController = require("../controllers/UsuarioController");

const router = express.Router();
const cardapioController = new CardapioController();
const usuarioController = new UsuarioController();


//Routes Cardapio
router.get("/getCards-pizza", cardapioController.getPizzas);

router.post("/register-pizza", cardapioController.postPizza);

router.put("/edit-pizza", cardapioController.editPizza);

router.delete("/delete-pizza/:id", cardapioController.delPizza);

//Routes Usuario
router.post("/register", usuarioController.register);

router.post("/login", usuarioController.login);

router.get("/userInfo", usuarioController.getUser);

module.exports = router;
