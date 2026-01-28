import { test } from "../../../core/driver/fixtures";
import { EmpleadosAccesosWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosAccesos.workflow";

test("Acceso Empleados Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAccesos.test.ts
  const test = new EmpleadosAccesosWorkflow(boPage);
  await test.accesoEmpleadosVolver(); // usa usuario y clave desde secrets
});  

test("Acceso Empleados Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAccesos.test.ts
  const test = new EmpleadosAccesosWorkflow(boPage);
  await test.accesoEmpleadosCancelar(); // usa usuario y clave desde secrets
});  


test("Acceso Empleados Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAccesos.test.ts
  const test = new EmpleadosAccesosWorkflow(boPage);
  await test.accesoEmpleadosAceptarConfirmar(); // usa usuario y clave desde secrets
});  