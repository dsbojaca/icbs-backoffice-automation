import { test, expect } from "../../core/driver/fixtures";
import { ReportesTramitesWorkflow } from "../../domain/backoffice/workflows/Reportes/reportesTramites.workflow";


test("Reportes Tramites", async ({ boPage }) => {
  const test = new ReportesTramitesWorkflow(boPage);
  await test.execute(); // usa usuario y clave desde secrets
}); 

