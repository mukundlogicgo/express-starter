import dotenv from "dotenv";

const DEV = "development";
const PROD = "production";

const ENV_MODE = DEV;

if (ENV_MODE === DEV) {
  dotenv.config({ path: ".env" });
}

if (ENV_MODE === PROD) {
  dotenv.config({ path: ".env.prod" });
}

export const { PORT, DB_URL } = process.env;

dotenv.config();
