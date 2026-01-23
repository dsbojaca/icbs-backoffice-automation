import { test } from "../../core/driver/fixtures";
import { ReportesEstadisticasWorkflow } from "../../domain/backoffice/workflows/Reportes/reportesEstadisticas.workflow";

test("Login BackOffice", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/reportesEstadisticas.test.ts
  const test = new ReportesEstadisticasWorkflow(boPage);
  await test.execute(); // usa usuario y clave desde secrets
});  

