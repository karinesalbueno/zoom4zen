const db = require('../../db');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
      const [result] = await db.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha] // Substitua por uma senha criptografada em produção!
      );
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
