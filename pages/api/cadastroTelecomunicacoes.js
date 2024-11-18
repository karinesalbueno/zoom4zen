const db = require('../../db');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, telefone, email, endereco, possui_carro, experiencia } = req.body;

        if (!nome || !telefone || !email || possui_carro === undefined || experiencia === undefined) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        try {
            // Verificando se o telefone já existe
            const [telefoneExistente] = await db.query(
                'SELECT * FROM telecomunicacoes WHERE telefone = ?',
                [telefone]
            );

            if (telefoneExistente && telefoneExistente.length > 0) {
                return res.status(400).json({ error: 'Telefone já cadastrado.' });
            }

            // Verificando se o e-mail já existe
            const [emailExistente] = await db.query(
                'SELECT * FROM telecomunicacoes WHERE email = ?',
                [email]
            );

            if (emailExistente && emailExistente.length > 0) {
                return res.status(400).json({ error: 'E-mail já cadastrado.' });
            }

            const [result] = await db.query(
                `INSERT INTO telecomunicacoes (nome, telefone, email, endereco, possui_carro, experiencia, data_cadastro) 
         VALUES (?, ?, ?, ?, ?, ?, NOW())`,
                [nome, telefone, email, endereco, possui_carro, experiencia]
            );

            res.status(201).json({ message: 'Cadastro realizado com sucesso!', id: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido.' });
    }
}
