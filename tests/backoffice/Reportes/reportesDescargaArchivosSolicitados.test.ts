import { test } from "../../../core/driver/fixtures";
import { ReportesDescargaArchivosSolicitadosWorkflow } from "../../../domain/backoffice/workflows/Reportes/reportesDescargaArchivosSolicitados.workflow";

test("Visualizar todos los archivos", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesDescargaArchivosSolicitados.test.ts
  const test = new ReportesDescargaArchivosSolicitadosWorkflow(boPage);
  await test.visualizarTodoslosArchivos(); // usa usuario y clave desde secrets
});  