import { test, expect } from "../../core/driver/fixtures";
import { LoginWorkflow } from "../../domain/backoffice/workflows/login.workflow";


test("Login BackOffice", async ({ boPage }) => {
  const login = new LoginWorkflow(boPage);
  await login.execute(); // usa usuario y clave desde secrets
});  

