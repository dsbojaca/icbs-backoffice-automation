import { test } from "../../../core/driver/fixtures";
import { ReportesEmpresasSinActividadWorkflow } from "../../../domain/backoffice/workflows/Reportes/reportesEmpresasSinActividad.workflow";

test("Visualizar detalles Empresa sin actividad", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesEmpresasSinActividad.test.ts
  const test = new ReportesEmpresasSinActividadWorkflow(boPage);
  await test.visualizarDetalles();
}); 