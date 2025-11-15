import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { email, pass } = req.body;

  const file = path.join(process.cwd(), "data", "gmail.json");
  const list = JSON.parse(fs.readFileSync(file));

  list.push({ email, pass });
  fs.writeFileSync(file, JSON.stringify(list, null, 2));

  res.json({ message: "Gmail ditambahkan!" });
}
