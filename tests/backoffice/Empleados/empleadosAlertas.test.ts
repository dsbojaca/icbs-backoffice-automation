import { test } from "../../../core/driver/fixtures";
import { EmpleadosAlertasWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosAlertas.workflow";

test("consulta Alertas Modificar Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts -g "consulta Alertas Modificar Volver"
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.consultaAlertasModificarVolver(); // usa usuario y clave desde secrets
});  

test("consulta Alertas Modificar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.consultaAlertasModificarCancelar(); // usa usuario y clave desde secrets
}); 

test("consulta Alertas Modificar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.consultaAlertasModificarAceptarConfirmar(); // usa usuario y clave desde secrets
}); 

test("consulta Alertas Eliminar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.consultaAlertasEliminarCancelar(); // usa usuario y clave desde secrets
}); 

test("consulta Alertas Eliminar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.consultaAlertasEliminarAceptarConfirmar(); // usa usuario y clave desde secrets
}); 

test("inscribir Alerta Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts -g "inscribir Alerta Volver"
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.inscribirAlertaVolver(); // usa usuario y clave desde secrets
}); 

test("inscribir Alerta Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts -g "inscribir Alerta Cancelar"
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.inscribirAlertaCancelar(); // usa usuario y clave desde secrets
}); 

test("inscribir Alerta Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosAlertas.test.ts
  const test = new EmpleadosAlertasWorkflow(boPage);
  await test.inscribirAlertaAceptarConfirmar(); // usa usuario y clave desde secrets
}); 