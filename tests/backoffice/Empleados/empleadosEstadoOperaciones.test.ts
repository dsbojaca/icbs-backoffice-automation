import { test } from "../../../core/driver/fixtures";
import { EmpleadosEstadoOperacionesWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosEstadoOperaciones.workflow";

test("visualizacion Autorizaciones", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosEstadoOperaciones.test.ts
  const test = new EmpleadosEstadoOperacionesWorkflow(boPage);
  await test.visualizacionAutorizaciones(); // usa usuario y clave desde secrets
}); 

test("visualizacion Procesos Desatendidos", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosEstadoOperaciones.test.ts
  const test = new EmpleadosEstadoOperacionesWorkflow(boPage);
  await test.visualizacionProcesosDesatendidos(); // usa usuario y clave desde secrets
});