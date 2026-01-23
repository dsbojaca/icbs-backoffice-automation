import { test } from "../../core/driver/fixtures";
import {ReportesConsultaRetencionBorradoWorkflow} from "../../domain/backoffice/workflows/Reportes/reportesConsultaRetencionBorrado.workflow";

test("Login BackOffice", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/reportesConsultaRetencionBorrado.test.ts
  const test = new ReportesConsultaRetencionBorradoWorkflow(boPage);
  await test.execute(); // usa usuario y clave desde secrets
}); 