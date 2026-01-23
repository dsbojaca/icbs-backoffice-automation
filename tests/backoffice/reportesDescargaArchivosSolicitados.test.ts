import { test } from "../../core/driver/fixtures";
import { ReportesDescargaArchivosSolicitadosWorkflow } from "../../domain/backoffice/workflows/Reportes/reportesDescargaArchivosSolicitados.workflow";

test("Login BackOffice", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/reportesDescargaArchivosSolicitados.test.ts
  const test = new ReportesDescargaArchivosSolicitadosWorkflow(boPage);
  await test.execute(); // usa usuario y clave desde secrets
});  