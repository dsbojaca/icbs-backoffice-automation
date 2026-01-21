import { PlaywrightSetup } from "../../core/driver/playwrightSetup";

export class SessionCleaner {
  private setup: PlaywrightSetup;

  constructor() {
    this.setup = new PlaywrightSetup();
  }

  async clearUserSession(username: string) {
    // Ajusta esta URL a tu endpoint real de limpieza
    const url = `${this.setup.getBaseUrl()}/api/clear-session`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    });

    if (!response.ok) {
      console.log(`⚠ No se pudo limpiar sesión para ${username}`);
    } else {
      console.log(`🧹 Sesión limpiada para ${username}`);
    }
  }
}
