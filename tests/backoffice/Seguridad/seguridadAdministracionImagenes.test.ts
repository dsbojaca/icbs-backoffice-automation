import { test } from "../../../core/driver/fixtures";
import { SeguridadAdministracionImagenesWorkflow } from "../../../domain/backoffice/workflows/Seguridad/seguridadAdministracionImagenes.workflow";

test("visualizacion Consultar Imagenes", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionImagenes.test.ts
  const test = new SeguridadAdministracionImagenesWorkflow(boPage);
  await test.visualizacionConsultarImagenes(); // usa usuario y clave desde secrets
})

test("visualizacion Crear Imagenes", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadAdministracionImagenes.test.ts
  const test = new SeguridadAdministracionImagenesWorkflow(boPage);
  await test.visualizacionCrearImagenes(); // usa usuario y clave desde secrets
})