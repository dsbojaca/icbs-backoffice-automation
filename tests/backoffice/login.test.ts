import { test, expect } from "../../core/driver/fixtures";
import { LoginWorkflow } from "../../domain/backoffice/workflows/login.workflow";
import { RegenerarArchivosWorkflow } from "../../domain/backoffice/workflows/Clientes/regeneracionArchivos.workflows";

/* test("Login BackOffice", async ({ boPage }) => {
  const login = new LoginWorkflow(boPage);
  await login.execute(); // usa usuario y clave desde secrets
});  */

test("consultar carga de archivos", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});