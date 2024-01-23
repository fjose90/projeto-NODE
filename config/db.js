import env from "./config.js";
import pkg from "pg";
const { Pool } = pkg;

// Configuração do pool do PostgreSQL
const pool = new Pool({
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  database: env.POSTGRES_DB,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
});
// Função para testar a conexão
const testarConexao = async () => {
  try {
    const client = await pool.connect();
    console.log("Conexão bem-sucedida!");
    client.release();
  } catch (error) {
    console.error("Erro ao conectar:", error.message);
  } finally {
    // Fecha a pool para encerrar a conexão
    pool.end();
  }
};

// Chama a função de teste
testarConexao();
export default pool;
console.log();
