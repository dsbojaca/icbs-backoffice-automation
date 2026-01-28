import { test } from "../../../core/driver/fixtures";
import { EmpleadosAdministracionWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosAdministracion.workflow";

test("Test  menu empleados servicio Consultar Empleados", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAdministracion.test.ts
  const test = new EmpleadosAdministracionWorkflow(boPage);
  await test.servicioConsultarEmpleados(); // usa usuario y clave desde secrets
});  

test("Test  menu empleados servicio Crear Empleados", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAdministracion.test.ts
  // ejecutar test modo debug: npx playwright test tests/backoffice/Empleados/empleadosAdministracion.test.ts --debug
  const test = new EmpleadosAdministracionWorkflow(boPage);
  await test.servicioCrearEmpleados(); // usa usuario y clave desde secrets
});  

