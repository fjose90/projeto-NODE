import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Obtém o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Determina qual arquivo .env carregar com base em NODE_ENV
const envFile =
  process.env.NODE_ENV === "production"
    ? join(__dirname, ".", ".env.prod")
    : join(__dirname, ".", ".env.dev");

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: envFile, debug: true });
export default process.env;
