import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/api/products", productsRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("API Nos Vemos pelo Mundo está rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
