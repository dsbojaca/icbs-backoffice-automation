import { test, expect } from "../../core/driver/fixtures";
import { RegenerarArchivosWorkflow } from "../../domain/backoffice/workflows/Clientes/regeneracionArchivos.workflows";


test("servidores y conexiones", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("carga de datos para solucion", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("publicaciones", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("parametros generales", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("parametros generales-matriculas masivas", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("parametros generales-m/e", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("parametrizacion de servicios", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("tipos de producto", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});


test("administracion de alertas", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("control montos horario por servicio", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("consulta de codigo por servicio", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("administracion de contenido demo", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});

test("reglas de negocio", async ({ boPage }) => {
  const regeneracionArchivos = new RegenerarArchivosWorkflow(boPage);
  await regeneracionArchivos.execute(); 
});
