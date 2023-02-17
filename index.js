import express from "express";
import hbs from "hbs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
const app = express();

/* PORT */
const port = process.env.PORT;

/* DIRNAME */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* HBS */

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/views", "/parcials"));

/* END HBS */

//PARA SERVIR CONTENIDO ESTATICO

//La ruta publica tiene prioridad sobre las definidas abajo

app.use(express.static("public")); //Aca no se ejectuaria la ruta con path /

// app.get("/", (req, res) => {
//   res.json({ hey: "bro" });
// });

const navbarInfo = {
  name: "Adonis",
  title: "learning node",
};

app.get("/", (req, res) => {
  res.render("home", navbarInfo);
});

app.get("/generic", (req, res) => {
  res.render("generic", navbarInfo);
});
app.get("/elements", (req, res) => {
  res.render("elements", navbarInfo);
});

app.get("*", (req, res) => {
  // res.status(404).send("404 - PAGE NOT FOUND");

  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(port, () => {
  console.log("APP RUNNING IN PORT", port);
});
