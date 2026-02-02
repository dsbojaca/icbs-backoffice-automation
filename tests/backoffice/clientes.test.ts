import { test, expect } from "../../core/driver/fixtures";
import { RegenerarArchivosWorkflow } from "../../domain/backoffice/workflows/Clientes/regeneracionArchivos.workflows";


test("regeneracion de archivos", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("tokens virtuales", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("administracion de onboarding", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("administracion facturacion", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("publicidad", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("horarios especiales", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("calendarios", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("relaciones comerciales", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("segemento de mercado", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("paqueres de servicios", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("actividad de usuarios", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("asignacion plan facturacion", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("administracion de clientes", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});
