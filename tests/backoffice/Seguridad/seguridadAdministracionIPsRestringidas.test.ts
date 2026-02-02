import { test } from "../../../core/driver/fixtures";
import { SeguridadAdministracionIPsRestringidasWorkflow } from "../../../domain/backoffice/workflows/Seguridad/seguridadAdministracionIPsRestringidas.workflow";

test("Ip Modificacion Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.listaIpModificacionVolver(); // usa usuario y clave desde secrets
});  

test("Ip Modificacion Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.listaIpModificacionCancelar(); // usa usuario y clave desde secrets
});  

test("Ip Modificacion Aceptar y Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.listaIpModificacionAceptarConfirmar(); // usa usuario y clave desde secrets
});  

test("Ip Eliminacion Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.listaIpEliminacionCancelar(); // usa usuario y clave desde secrets
}); 

test("Ip Eliminacion Aceptar y Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.listaIpEliminacionAceptarConfirmar(); // usa usuario y clave desde secrets
});  

test("Crear Ip Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.crearIpVolver(); // usa usuario y clave desde secrets
});  

test("Crear Ip Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.crearIpCancelar(); // usa usuario y clave desde secrets
});  

test("Crear Ip Aceptar y Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionIPsRestringidas.test.ts
  const test = new SeguridadAdministracionIPsRestringidasWorkflow(boPage);
  await test.crearIpAceptarConfirmar(); // usa usuario y clave desde secrets
});  

