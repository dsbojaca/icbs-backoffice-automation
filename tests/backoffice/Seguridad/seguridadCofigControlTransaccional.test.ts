import { test } from "../../../core/driver/fixtures";
import {SeguridadConfigControlTransaccionalWorkflow} from "../../../domain/backoffice/workflows/Seguridad/seguridadCofigControlTransaccional.workflow";

test("confirmacion transaccional volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.confirmacionTransaccionalVolver(); 
});  

test("confirmacion transaccional cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.confirmacionTransaccionalCancelar(); 
});  

test("confirmacion transaccional aceptar confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.confirmacionTransaccionalAceptarConfirmar(); 
});  

test("control agente volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.controlAgenteVolver(); 
});  

test("control agente cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.controlAgenteCancelar(); 
});  

test("control agente aceptar confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.controlAgenteAceptarConfirmar(); 
});  

test("doble confirmacion volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.dobleConfirmacionVolver(); 
});  

test("doble confirmacion cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.dobleConfirmacionCancelar(); 
});  

test("doble confirmacion aceptar confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadCofigControlTransaccional.test.ts
  const test = new SeguridadConfigControlTransaccionalWorkflow(boPage);
  await test.dobleConfirmacionAceptarConfirmar(); 
});  

