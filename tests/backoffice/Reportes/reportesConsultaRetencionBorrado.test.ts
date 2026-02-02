import { test } from "../../../core/driver/fixtures";
import {ReportesConsultaRetencionBorradoWorkflow} from "../../../domain/backoffice/workflows/Reportes/reportesConsultaRetencionBorrado.workflow";

test("Consultar registros eliminados", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesConsultaRetencionBorrado.test.ts
  const test = new ReportesConsultaRetencionBorradoWorkflow(boPage);
  await test.consultarRegistrosEliminados(); // usa usuario y clave desde secrets
}); 
