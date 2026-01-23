import { Page } from "@playwright/test";

export class reportesTramitesPage {
  constructor(private page: Page) {}

  // Primer icono de la tabla
  primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

  // Segundo icono de la tabla
  segundoIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").nth(1);

  // Botón cerrar modal
  modalCerrar = () =>
    this.page.locator("span.ui-modalbox-close-img");

}