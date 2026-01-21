import { test } from "@playwright/test";
import { SessionCleaner } from "../../data/dto/sessionCleaner";




test("Limpiar sesión en Oracle", async () => {
  const cleaner = new SessionCleaner();

  // Usa el usuario que pruebas
  await cleaner.clearUserSession("david.bojaca.BO");

  console.log("Test finalizado");
});
