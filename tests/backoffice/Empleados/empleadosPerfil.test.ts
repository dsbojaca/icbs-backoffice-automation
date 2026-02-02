import { test } from "../../../core/driver/fixtures";
import { EmpleadosPerfilWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosPerfil.workflow";

// ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts

// Consultas perfil Detalles
test("Detalles perfil", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.consultarPerfilesDetalles();
});  


// Consultas perfil Editar 
test("consultar perfil editar>volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts -g "consultar perfil editar>volver"  
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.consultarPerfilesEditarVolver();
});  

test("consultar perfil editar>cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.consultarPerfilesEditarCancelar();
});  

// test("consultar perfil editar>aceptar y confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
//   const test = new EmpleadosPerfilWorkflow(boPage);
//   await test.consultarPerfilesEditarAceptarConfirmar();
// }); 


// Consultas perfil Eliminar

test("consultar perfil eliminar>cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts -g "consultar perfil eliminar>cancelar"
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.consultarPerfilesEliminarCancelar();
});  

// test("consultar perfil eliminar>aceptar y confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
//   const test = new EmpleadosPerfilWorkflow(boPage);
//   await test.consultarPerfilesEliminarAceptarConfirmar();
// }); 


// Crear perfil 

test("Crear perfil volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts -g "Crear perfil volver"
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.crearPerfilVolver();
});  

test("Crear perfil cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
  const test = new EmpleadosPerfilWorkflow(boPage);
  await test.crearPerfilCancelar();
});  

// test("Crear perfil aceptar y confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosPerfil.test.ts
//   const test = new EmpleadosPerfilWorkflow(boPage);
//   await test.crearPerfilAceptarConfirmar();
// }); 





