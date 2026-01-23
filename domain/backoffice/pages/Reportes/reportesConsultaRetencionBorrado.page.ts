import { Page } from "@playwright/test";

export class  ReportesConsultaRetencionBorradoPage {
    constructor(private page: Page) {}


    comboButtonTipo = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboItemRegistrosUsuario = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Registros Eliminados por Usuario" });

    comboItemRegistrosBitacora = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Registros Eliminados Bitácora" });

    inputFechaInicio = () =>
    this.page.locator("input#startDtVis");

    calendarioDia1 = () =>
    this.page.locator("a.ui-datebox-default.ui-datebox-curr-month", {hasText: /^1$/ });

    botonConsultar = () =>
    this.page.locator("#btnConsult");

    tablaInformacion = () =>
    this.page.locator("#divInfoTable");

}