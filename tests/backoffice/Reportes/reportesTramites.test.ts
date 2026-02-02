import { test, expect } from "../../../core/driver/fixtures";
import { ReportesTramitesWorkflow } from "../../../domain/backoffice/workflows/Reportes/reportesTramites.workflow";

// ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesTramites.test.ts

test("detalles de tramites", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesTramites.test.ts -g "detalles de tramites"
  const test = new ReportesTramitesWorkflow(boPage);
  await test.verDetalles(); // usa usuario y clave desde secrets
}); 

test("aceptar tramites", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesTramites.test.ts -g "aceptar tramites"
  const test = new ReportesTramitesWorkflow(boPage);
  await test.aceptarTramite(); // usa usuario y clave desde secrets
}); 

test("rechazar tramites", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Reportes/reportesTramites.test.ts -g "rechazar tramites"
  const test = new ReportesTramitesWorkflow(boPage);
  await test.rechazarTramite(); // usa usuario y clave desde secrets
}); 

