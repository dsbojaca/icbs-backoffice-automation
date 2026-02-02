import { test } from "../../../core/driver/fixtures";
import { SeguridadConfigDatosNoValidosWorkflow } from "../../../domain/backoffice/workflows/Seguridad/seguridadConfigDatosNoValidos.workflow";

test("lista Claves Modificar>Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaClavesModificarVolver(); // usa usuario y clave desde secrets
});

test("lista Claves Modificar>Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaClavesModificarCancelar(); // usa usuario y clave desde secrets
});

test("lista Claves Modificar>AceptarConfirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaClavesModificarAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("lista Claves Borrar>Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaClavesBorrarCancelar(); // usa usuario y clave desde secrets
});

test("lista Claves Borrar>AceptarConfirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaClavesBorrarAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("crear Registro>Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.crearRegistroVolver(); // usa usuario y clave desde secrets
});

test("crear Registro>Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.crearRegistroCancelar(); // usa usuario y clave desde secrets
});

test("crear Registro>AceptarConfirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.crearRegistroAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("lista Destinatarios Modificar>Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts -g "lista Destinatarios Modificar>Volver"
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaDestinatariosModificarVolver(); // usa usuario y clave desde secrets
});

test("lista Destinatarios Modificar>Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaDestinatariosModificarCancelar(); // usa usuario y clave desde secrets
});

test("lista Destinatarios Modificar>AceptarConfirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaDestinatariosModificarAceptarConfirmar(); // usa usuario y clave desde secrets
});

test("lista Destinatarios Eliminar>Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaDestinatariosEliminarCancelar(); // usa usuario y clave desde secrets
});

test("lista Destinatarios Eliminar>AceptarConfirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigDatosNoValidos.test.ts -g "lista Destinatarios Eliminar>AceptarConfirmar"  
  const test = new SeguridadConfigDatosNoValidosWorkflow(boPage);
  await test.listaDestinatariosEliminarAceptarConfirmar(); // usa usuario y clave desde secrets
});