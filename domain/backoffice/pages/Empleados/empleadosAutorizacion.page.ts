import { Page } from "@playwright/test";

export class EmpleadosAutorizacionPage {
    constructor(private page: Page) {}

    linkAutorizacionesPendientes = () =>
    this.page.locator("#pendingLink");

    btnAceptarAutorizacion = () =>
    this.page.locator("#btnAccept");

    btnRechazarAutorizacion = () =>
    this.page.locator("#btnReject");



}