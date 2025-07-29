# 🛒 Nos Vemos pelo Mundo – Back-end da Loja Virtual 🌍✈️

Este é o back-end da aplicação **Nos Vemos pelo Mundo**, uma loja virtual com temática de viagem. A API REST fornece os dados dos produtos e simula a finalização de uma compra com atualização de estoque.

---

## 🚀 Funcionalidades

- Listagem de produtos disponíveis
- Simulação de finalização de compra
- Atualização de estoque no servidor
- Integração com o front-end via Fetch API

---

## 📌 Endpoints da API

| Método | Rota                        | Descrição                                      |
|--------|-----------------------------|-----------------------------------------------|
| GET    | `/api/products`             | Retorna todos os produtos disponíveis          |
| POST   | `/api/products/checkout`    | Atualiza o estoque conforme o carrinho enviado |

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- JavaScript 

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/MariaAlineMees/Projeto-E-Commerce-Back.git
```
2. Instale as dependências:
- npm install

Inicie o servidor:
- node server.js

3. A API estará disponível em http://localhost:3000/api/products

📁 Estrutura de Arquivo
 Projeto-E-Commerce-Back/
├── server.js
├── routes/
│   └── products.js
├── package.json
├── package-lock.json


👩🏻‍💻 Autora: 
Desenvolvido por Maria Aline Mees como parte dos estudos em desenvolvimento web no curso +Devs2Blu.

📄 Aviso de Uso
- Este projeto foi criado para fins didáticos e não possui fins comerciais.
- Não há persistência em banco de dados — os dados são mantidos em memória durante a execução.
- Este projeto não possui uma licença de uso aberta.

