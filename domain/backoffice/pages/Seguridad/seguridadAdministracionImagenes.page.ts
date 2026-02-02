import { Page } from "@playwright/test";

export class SeguridadAdministracionImagenesPage {
    constructor(private page: Page) {}

    comboButtonCategoria = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboItemUltimo = () =>
    this.page.locator("li.ui-combobox-li").last();

    comboItemViajes = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Viajes$/ });

    comboItemTecnologia = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Tecnología$/ });

    comboItemSimbolos = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Símbolos$/ });

    comboItemPlantas = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Plantas$/ });

    comboItemIndustria = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Industria$/ });

    comboItemHogar = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Hogar$/ });

    comboItemDeportes = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Deportes$/ });

    comboItemArte = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Arte$/ });

    comboItemAnimales = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Animales$/ });

    comboItemAlimentos = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Alimentos$/ });

    botonCancelar = () =>
    this.page.locator("#btnCancel");

    botonAceptarConfirmacion = () =>
    this.page.locator("#btnAceptConf");

    botonFinalizar = () =>
    this.page.locator("#btnFinalize");

    tabCrearImagen = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Crear Imagen$/ });



}