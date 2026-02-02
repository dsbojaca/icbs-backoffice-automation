import { test } from "../../../core/driver/fixtures";
import { EmpleadosAutorizacionWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosAutorizacion.workflow"

test("autorizar Transaccion", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAutorizacion.test.ts
  const test = new EmpleadosAutorizacionWorkflow(boPage);
  await test.autorizarTransaccion(); // usa usuario y clave desde secrets
});  

test("rechazar Transaccion", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAutorizacion.test.ts
  const test = new EmpleadosAutorizacionWorkflow(boPage);
  await test.rechazarTransaccion(); // usa usuario y clave desde secrets
});  