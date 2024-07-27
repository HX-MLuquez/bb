const express = require("express");
const app = express();

const handlebars = require('express-handlebars');
const path = require("path");

const PORT = 8080;

//* SETEO handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views'));

const products = [
  { title: "Producto 1", price: 100 },
  { title: "Producto 2", price: 200 },
  { title: "Producto 3", price: 300 }
];

app.get("/", (req, res) => {
  res.json({"message": "HULK"})
})

app.get("/user/:nombre", (req, res) => {
  const {nombre} = req.params;
  res.render('index', {nombre})
});

app.get("/products", (req, res) => {
  res.render('products', { products });
});

// Ruta para validar admin
app.get("/admin", (req, res) => {
  // Ejemplo de variable isAdmin
  const isAdmin = true; // O false dependiendo de la lógica de tu aplicación

  res.render('admin', { isAdmin });
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});