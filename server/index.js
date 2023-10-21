const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "password",
    database: "db_pizza",
});

app.use(cors());
app.use(express.json());


//Usuario
app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from tb_usuarios";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.post("/register", (req, res)=> {
    const { nm_usuario } = req.body;
    const { ds_email } = req.body;
    const { ds_senha } = req.body;

    let SQL = "INSERT INTO tb_usuarios ( nm_usuario, ds_email, ds_senha) VALUES (?,?,?)";

    db.query(SQL,[nm_usuario, ds_email, ds_senha],(err,result) => {
        console.log(err);
    });
})


//Cardapio
app.get("/getCards-pizza", (req, res) => {
    let SQL = "SELECT * from tb_cardapio";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.post("/register-pizza", (req, res)=> {
    const { ds_sabor } = req.body;
    const { ds_detalhes } = req.body;
    const { ds_preco } = req.body;
    const { ds_img } = req.body;


    let SQL = "INSERT INTO tb_cardapio ( ds_sabor, ds_detalhes, ds_preco, ds_img) VALUES (?,?,?,?)";

    db.query(SQL,[ds_sabor, ds_detalhes, ds_preco, ds_img],(err,result) => {
        console.log(err);
    });
})

app.put("/edit-pizza", (req, res) => {
    const { id } = req.body;
    const { ds_sabor } = req.body;
    const { ds_detalhes } = req.body;
    const { ds_preco } = req.body;
    const { ds_img } = req.body;

    let SQL = "UPDATE tb_cardapio SET ds_sabor = ?, ds_detalhes = ?, ds_preco = ?, ds_img = ? WHERE idcardapio = ?";

    db.query(SQL, [ds_sabor, ds_detalhes, ds_preco, ds_img, id], (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    })
})


app.delete("/delete-pizza/:id" , (req, res) =>{
    const {id} = req.params;
    let SQL = "DELETE FROM tb_cardapio WHERE idcardapio = ?";
    db.query(SQL, [id], (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log("Rodando servidor")
});
