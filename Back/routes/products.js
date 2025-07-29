import express from "express";
import products from "../data/products.js";

const router = express.Router();

// Rota para listar todos os produtos
router.get("/", (req, res) => {
  res.json(products);
});

// Rota para finalizar compra e atualizar estoque
router.post("/checkout", (req, res) => {
  const cart = req.body.cart;

  for (const [id, qty] of Object.entries(cart)) {
    const prod = products.find(p => p.id === +id);
    if (prod) {
      prod.qtdEstoque -= qty;
    }
  }

  res.json({ success: true, message: "Compra finalizada com sucesso!" });
});

export default router;