import { test } from "../../../core/driver/fixtures";
import { EmpleadosConfiguracionAutorizacionesWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosConfiguracionAutorizaciones.workflow";

test("autorizaciones Visualizacion", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.autorizacionesVisualizacion(); // usa usuario y clave desde secrets
});  

test("crear Rol Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.crearRolVolver(); // usa usuario y clave desde secrets
});

test("crear Rol Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.crearRolCancelar(); // usa usuario y clave desde secrets
});

test("crear Rol Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.crearRolAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("roles Creados Modificar Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.rolesCreadosModificarVolver(); // usa usuario y clave desde secrets
});

test("roles Creados Modificar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.rolesCreadosModificarCancelar(); // usa usuario y clave desde secrets
});

test("roles Creados Modificar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.rolesCreadosModificarAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("roles Creados Eliminar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.rolesCreadosEliminarCancelar(); // usa usuario y clave desde secrets
});

test("roles Creados Eliminar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.rolesCreadosEliminarAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("asignacion Usuarios Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.asignacionUsuariosVolver(); // usa usuario y clave desde secrets
});

test("asignacion Usuarios Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.asignacionUsuariosCancelar(); // usa usuario y clave desde secrets
});

test("asignacion Usuarios Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.asignacionUsuariosAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("crear Autorizacion Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosConfiguracionAutorizaciones.test.ts -g "crear Autorizacion Volver"
  const test = new EmpleadosConfiguracionAutorizacionesWorkflow(boPage);
  await test.crearAutorizacionVolver(); // usa usuario y clave desde secrets
});