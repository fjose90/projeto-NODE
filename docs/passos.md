https://chat.openai.com/share/29d539bc-8292-4d11-8569-69772c4e688b

1. Configure o Projeto
   1.1. Crie uma pasta para o seu projeto:

bash
Copy code
mkdir seu_projeto
cd seu_projeto
1.2. Inicie um projeto Node.js:

bash
Copy code
npm init -y 2. Instale as Dependências
2.1. Instale o Express e o pacote dotenv (para lidar com variáveis de ambiente):

bash
Copy code
npm install express dotenv
2.2. Instale o PostgreSQL e o pacote pg (para interagir com o banco de dados PostgreSQL):

bash
Copy code
npm install pg 3. Estrutura de Diretórios
3.1. Crie a estrutura de diretórios sugerida:

plaintext
Copy code

- /seu_projeto
  - /config
    - .env.dev
  - /src
    - app.js
    - /controllers
      - usuariosController.js
    - /models
      - usuarioModel.js
    - /routes
      - usuariosRoutes.js
  - /db
    - /migrate
      - 20220118120000_create_usuarios.js
  - .gitignore
  - jsconfig.json
  - package.json
  - README.md
    3.2. Adicione as pastas public, test, infra, conforme necessário.

4. Configuração do Express
   4.1. Em src/app.js, configure o Express e o uso do dotenv para carregar variáveis de ambiente:

javascript
Copy code
// src/app.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas serão adicionadas posteriormente

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
}); 5. Configuração do Banco de Dados
5.1. Em config/db.js, configure a conexão com o PostgreSQL usando o pg:

javascript
Copy code
// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
user: process.env.DB_USER,
host: process.env.DB_HOST,
database: process.env.DB_DATABASE,
password: process.env.DB_PASSWORD,
port: process.env.DB_PORT || 5432,
});

module.exports = pool; 6. Controlador e Modelo de Usuários
6.1. Em src/controllers/usuariosController.js, implemente um controlador simples:

javascript
Copy code
// src/controllers/usuariosController.js
const pool = require('../config/db');

class UsuariosController {
async listarUsuarios(req, res) {
try {
const result = await pool.query('SELECT \* FROM usuarios');
res.json(result.rows);
} catch (error) {
console.error(error);
res.status(500).json({ error: 'Erro ao listar usuários' });
}
}

// Implemente outros métodos CRUD conforme necessário
}

module.exports = new UsuariosController();
6.2. Em src/models/usuarioModel.js, implemente um modelo simples:

javascript
Copy code
// src/models/usuarioModel.js
const pool = require('../config/db');

class UsuarioModel {
async criarUsuario(usuario) {
try {
const result = await pool.query('INSERT INTO usuarios(nome, email) VALUES($1, $2) RETURNING \*', [
usuario.nome,
usuario.email,
]);
return result.rows[0];
} catch (error) {
console.error(error);
throw new Error('Erro ao criar usuário');
}
}

// Implemente outros métodos CRUD conforme necessário
}

module.exports = new UsuarioModel(); 7. Rotas de Usuários
7.1. Em src/routes/usuariosRoutes.js, configure as rotas para os usuários:

javascript
Copy code
// src/routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.listarUsuarios);

// Implemente outras rotas CRUD conforme necessário

module.exports = router; 8. Conecte Tudo
8.1. No arquivo src/app.js, adicione a rota de usuários:

javascript
Copy code
// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const usuariosRoutes = require('./routes/usuariosRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Adicione rotas
app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
}); 9. Execução do Projeto
9.1. Inicie seu projeto:

bash
Copy code
npm start
