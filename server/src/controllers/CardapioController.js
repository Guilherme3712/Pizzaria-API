const db = require ("../database/conexao")

class CardapioController{

    getPizzas = (req, res) => {
        try {
            const SQL = "SELECT * from tb_cardapio";
            db.query(SQL, (err, result) => {
                if(err){
                    res.status(404).json({ 'erro' : err})
                    console.log(err);
                }else{
                    res.status(200).json(result);
                }
            });
        } catch (error) {
            res.status(500).json({'erro': error})
        }
    }

    postPizza = (req, res) => {
        try {
            const { ds_sabor, ds_detalhes, ds_preco, ds_img } = req.body;

            if (!ds_sabor || !ds_detalhes || !ds_preco || !ds_img) {
                return res.status(400).json({ 'erro': 'Todos os campos são obrigatórios.' });
            }

            const SQL = "INSERT INTO tb_cardapio ( ds_sabor, ds_detalhes, ds_preco, ds_img) VALUES (?,?,?,?)";
            db.query(SQL,[ds_sabor, ds_detalhes, ds_preco, ds_img],(err,result) => {
                res.status(201).send("Pizza adicionada com sucesso!");
                console.log(err);
            });
        } catch (error) {
            res.status(500).json({'erro': error})
        }
    }

    editPizza = (req, res) => {
        try {
            const { id, ds_sabor, ds_detalhes, ds_preco, ds_img } = req.body;
            
            const SQL = "UPDATE tb_cardapio SET ds_sabor = ?, ds_detalhes = ?, ds_preco = ?, ds_img = ? WHERE idcardapio = ?";
            db.query(SQL, [ds_sabor, ds_detalhes, ds_preco, ds_img, id], (err, result) => {
                if(err){
                    res.status(404).json({ 'erro' : err})
                    console.log(err);
                }else{
                    res.status(200).json(result);
                }
            })
        } catch (error) {
            res.status(500).json({'erro': error})
        }
    }

    delPizza = (req, res) =>{
        try {
            const {id} = req.params;
            const SQL = "DELETE FROM tb_cardapio WHERE idcardapio = ?";
            db.query(SQL, [id], (err, result) =>{
                if(err){
                    res.status(404).json({ 'erro' : err})
                    console.log(err);
                }else{
                    res.status(200).json(result);
                }
            })
        } catch (error) {
            res.status(500).json({'erro': error})
        }
    }
}
module.exports = CardapioController;