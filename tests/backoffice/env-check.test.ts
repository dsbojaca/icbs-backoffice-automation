import "dotenv/config";
import { test } from "@playwright/test";

test("Verificar variables de entorno", async () => {
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_CONNECT:", process.env.DB_CONNECT);
});