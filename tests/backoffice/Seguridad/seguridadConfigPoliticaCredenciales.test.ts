import { test } from "../../../core/driver/fixtures";
import { SeguridadConfigPoliticaCredencialesWorkflow } from "../../../domain/backoffice/workflows/Seguridad/seguridadConfigPoliticaCredenciales.workflow";

test("editar Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigPoliticaCredenciales.test.ts
  const test = new SeguridadConfigPoliticaCredencialesWorkflow(boPage);
  await test.editarVolver(); 
}); 

test("editar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigPoliticaCredenciales.test.ts
  const test = new SeguridadConfigPoliticaCredencialesWorkflow(boPage);
  await test.editarCancelar(); 
}); 

test("editar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConfigPoliticaCredenciales.test.ts
  const test = new SeguridadConfigPoliticaCredencialesWorkflow(boPage);
  await test.editarAceptarConfirmar(); 
}); 