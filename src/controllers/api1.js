const knex = require("../services/knex");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const usuariosComSenha = await knex("users").select("*");

    const usuarios = usuariosComSenha.map(
      ({ password, ...usuario }) => usuario
    );

    return res.json({ usuarios });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    const senhaCriptografada = await bcrypt.hash(password, 10);

    const usuario = await knex("users")
      .insert({
        name: name,
        email: email,
        password: senhaCriptografada,
      })
      .returning("id", "name");

    if (!usuario || usuario.length === 0) {
      return res.status(400).json("O usuário não foi cadastrado.");
    }

    return res.status(200).json({
      status: "success",
      message: "O usuário foi cadastrado com sucesso!",
      usuario,
    });
  } catch (error) {
    return res.status(400).json({
      Error: "Internal Error",
    });
  }
};

module.exports = {
  getUsers,
  postUser,
};
