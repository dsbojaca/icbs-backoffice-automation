import "dotenv/config";
import oracledb from "oracledb";
import { PlaywrightSetup } from "../../core/driver/playwrightSetup";

export class SessionCleaner {
  private setup: PlaywrightSetup;

  constructor() {
    this.setup = new PlaywrightSetup();
  }

  async clearUserSession(username: string) {
    try {
      const connection = await oracledb.getConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        connectString: process.env.DB_CONNECT
      });
      const query = `
        DELETE FROM CL_ONLINE_USER
        WHERE USER_NAME = :username
      `;

      await connection.execute(query, { username });

      await connection.commit();

      console.log(`🧹 Sesión eliminada para el usuario ${username}`);

      await connection.close();
    } catch (error) {
      console.error("⚠️ Error limpiando sesión o usuario sin sesión previa:", error);
    }
  }
}
