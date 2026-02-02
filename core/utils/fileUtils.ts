import fs from "fs";

export const FileUtils = {
  readJson(path: string) {
    const raw = fs.readFileSync(path, "utf-8");
    return JSON.parse(raw);
  },

  writeJson(path: string, data: any) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  },
};
