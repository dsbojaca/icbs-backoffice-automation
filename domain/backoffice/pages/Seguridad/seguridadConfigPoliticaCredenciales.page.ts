import { Page } from "@playwright/test";

export class SeguridadConfigPoliticaCredencialesPage {
    constructor(private page: Page) {}


    // --- Política de Credenciales ---
    inputMinLength = () => this.page.locator("#MinLength");
    inputMaxLength = () => this.page.locator("#MaxLength");
    inputNumericCharacters = () => this.page.locator("#NumericCharacters");
    inputAlphaNumCharacters = () => this.page.locator("#AlphaNumCharacters");
    inputPwdHistory = () => this.page.locator("#PwdHistory");
    inputPwdValidityDays = () => this.page.locator("#PwdValidityDays");
    inputDaysToSendMessagePwd = () => this.page.locator("#DaysToSendMessagePwd");
    inputSpecialCharacters = () => this.page.locator("#specialCharacters");

    checkboxCapsAllowed = () => this.page.locator("#capsAllowed");
    checkboxSpecialCharsAllowed = () => this.page.locator("#specialCharactersAllowed");

    // --- Política de Imagen ---
    headerPoliticaImagen = () =>
    this.page.locator("span.ui-panelbox-option-header-text", { hasText: /^Política de Imagen$/ });

    inputImageHistory = () => this.page.locator("#ImageHistory");
    inputImageValidityDays = () => this.page.locator("#ImageValidityDays");
    inputDaysToSendMessageImg = () => this.page.locator("#DaysToSendMessageImg");

    // --- Política de Bloqueos ---
    headerPoliticaBloqueos = () =>
    this.page.locator("span.ui-panelbox-option-header-text", { hasText: /^Política de Bloqueos$/ });

    inputFailedAttemptsToBlockUser = () => this.page.locator("#FailedAttemptsToBlockUser");
    inputFailedAttemptsToBlockToken = () => this.page.locator("#FailedAttemptsToBlockToken");
    inputMinutesToUnblockUser = () => this.page.locator("#MinutesToUnblockUser");
    inputMinutesToUnblockToken = () => this.page.locator("#MinutesToUnblockToken");
    inputNumberOfPassUnblocksPerDay = () => this.page.locator("#NumberOfPassUnblocksPerDay");
    inputNumberOfTokenUnblocksPerDay = () => this.page.locator("#NumberOfTokenUnblocksPerDay");
    inputDaysOfInactivity = () => this.page.locator("#DaysOfInactivity");
    inputValidMinBlockUser = () => this.page.locator("#ValidMinBlockUser");
    inputValidMaxBlockUser = () => this.page.locator("#ValidMaxBlockUser");

    // --- Botones ---
    botonContinuar = () => this.page.locator("#btnContinue");
    botonCancelar = () => this.page.locator("#btnCancel");
    botonAceptarConfirmacion = () => this.page.locator("#btnAcceptConfirm");
    botonVolver = () => this.page.locator("#btnBack");
    botonFinalizar = () => this.page.locator("#btnEnd");


}