
import { Page } from "@playwright/test";

export class ReportesEstadisticasPage {
    constructor(private page: Page) {}

    comboButton = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboEventosServicio = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Eventos por Servicio$/ });

    comboEventosPerfil = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Eventos por Perfil$/ });

    primerIconoDetalles = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    modalCerrar = () =>
    this.page.locator("span.ui-modalbox-close-img");

    tabEstadisticasCliente = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Estadísticas Cliente$/ });

    comboItemfinal = () =>
    this.page.locator("li.ui-combobox-li").last();

    // No validados aún
    comboEventosEmpresa = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Eventos por Empresa$/ });

    comboTransaccionesMonetarias = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Transacciones Monetarias$/ });

    comboTransaccionesSegmento = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Transacciones Monetarias por Segmento$/ });

    comboTransaccionesEmpresa = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Transacciones Monetarias por Empresa$/ });



}