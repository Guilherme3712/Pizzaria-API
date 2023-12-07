const db = require("../database/conexao");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

const saltRounds = 10;

const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

const initialKey = generateSecretKey();
let tokenMail;

class UsuarioController {
    
    register = (req, res) => {
        try {
            const { nm_usuario, email, password, cep, rua, numero, bairro, cidade, uf } = req.body;
            db.query("SELECT * FROM tb_usuarios WHERE email = ?", [email], (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result.length == 0) {
                    bcrypt.hash(password, saltRounds, (err, hash) => {
                        db.query(
                            "INSERT INTO tb_usuarios (nm_usuario, email, password, cep, rua, numero, bairro, cidade, uf) VALUE (?,?,?,?,?,?,?,?,?)",
                            [nm_usuario, email, hash, cep, rua, numero, bairro, cidade, uf],
                            (error, response) => {
                                if (err) {
                                    res.send(err);
                                }   
                                res.status(201).json({ msg: "Usuário cadastrado com sucesso"});
                            }
                        )
                    });
                } else {
                    res.send({ msg: "Email já cadastrado" });
                }
            });
        } catch (error) {
            console.error("Erro durante o cadastro:", error);
            res.status(500).json({ msg: "Houve um erro ao processar a solicitação" });
        }
    }

    login = (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            db.query("SELECT * FROM tb_usuarios WHERE email = ?", [email], (err, result) => {
                if (err) {
                res.send(err);
                }
                if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (error) {
                    res.send(error);
                    }
                    if (response) {
                    const token = initialKey;
                    tokenMail = email;
                    res.send({ msg: "Usuário autenticado com sucesso" , token });
                    } else {
                    res.send({ msg: "Senha ou Email incorretos" });
                    }
                });
                } else {
                res.send({ msg: "Usuário não registrado!" });
                }
            });
        } catch (error) {
            console.error("Erro durante o cadastro:", error);
            res.status(500).json({ msg: "Houve um erro ao processar a solicitação" });
        }
    }

    getUser = (req, res) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
            return res.status(401).json({ msg: "Token não fornecido" });
            }
            let SQL = "SELECT * FROM tb_usuarios WHERE email = ?";  // Substitua "chave" pelo nome real do campo em que você armazena as chaves
            db.query(SQL, [tokenMail], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ msg: "Erro ao obter informações do usuário" });
            } else {
                res.send(result);
            }
            });
        } catch (error) {
            res.status(500).json({'erro': error})
        } 
    }


}

module.exports = UsuarioController;