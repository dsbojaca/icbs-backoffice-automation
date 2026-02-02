import { test } from "../../../core/driver/fixtures";
import { ReportesEstadisticasWorkflow } from "../../../domain/backoffice/workflows/Reportes/reportesEstadisticas.workflow";

test("Consulta Detalles Bancos", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesEstadisticas.test.ts
  const test = new ReportesEstadisticasWorkflow(boPage);
  await test.consultaBancoDetalles(); // usa usuario y clave desde secrets
});  

test("Consulta Detalles Clientes", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesEstadisticas.test.ts
  const test = new ReportesEstadisticasWorkflow(boPage);
  await test.consultaClienteDetalles(); // usa usuario y clave desde secrets
});  