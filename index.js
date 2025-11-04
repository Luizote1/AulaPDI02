import express from "express";
import bodyParser from "body-parser";

const server = express();
const porta = 3333;

server.use(bodyParser.urlencoded({ extended: true }));
let usuarios = [];

// Página inicial
server.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Página Inicial</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background-color: #f8f9fa; }
    .navbar { background: #0a8; }
    .navbar-brand, .nav-link { color: white !important; font-weight: 500; }
    .hero { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark shadow">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Meu Site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="/">Início</a></li>
          <li class="nav-item"><a class="nav-link" href="/cadastro">Cadastro</a></li>
          <li class="nav-item"><a class="nav-link" href="/usuarios">Usuários</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div>
      <h1 class="display-5 fw-bold text-primary">Bem-vindo ao Servidor Express</h1>
      <p class="lead text-secondary">Exemplo com rotas e formulário de cadastro</p>
      <a href="/cadastro" class="btn btn-primary btn-lg mt-3">Ir para o Cadastro</a>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
  `);
});

// Página de cadastro
server.get("/cadastro", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cadastro</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background-color: #f0f2f5; }
    .navbar { background: #0a8; }
    .navbar-brand, .nav-link { color: white !important; font-weight: 500; }
    .form-container {
      max-width: 650px;
      background-color: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
      margin-top: 60px;
      margin-bottom: 60px;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark shadow">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Meu Site</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Início</a></li>
          <li class="nav-item"><a class="nav-link active" href="/cadastro">Cadastro</a></li>
          <li class="nav-item"><a class="nav-link" href="/usuarios">Usuários</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container d-flex justify-content-center">
    <div class="form-container">
      <h2 class="text-center mb-4 text-primary fw-bold">Formulário de Cadastro</h2>
      <form method="POST" action="/salvar">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome completo</label>
          <input type="text" name="nome" class="form-control" id="nome" placeholder="Digite seu nome" required>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="Digite seu e-mail" required>
        </div>

        <div class="mb-3">
          <label for="telefone" class="form-label">Telefone</label>
          <input type="tel" name="telefone" class="form-control" id="telefone" placeholder="(18) 99999-9999" required>
        </div>

        <div class="mb-3">
          <label for="inputAddress" class="form-label">Endereço</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Rua Exemplo, nº 123">
        </div>

        <div class="mb-3">
          <label for="cidade" class="form-label">Cidade</label>
          <input type="text" name="cidade" class="form-control" id="cidade" placeholder="Digite sua cidade">
        </div>

        <div class="mb-3">
          <label for="estado" class="form-label">Estado</label>
          <select name="estado" id="estado" class="form-select" required>
            <option value="">Escolher...</option>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>
        </div>

        <div class="d-grid">
          <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
  `);
});

server.post("/salvar", (req, res) => {
  const { nome, email, telefone, cidade, estado } = req.body;
  usuarios.push({ nome, email, telefone, cidade, estado });
  res.redirect("/usuarios");
});


server.get("/usuarios", (req, res) => {
  let tabela = usuarios
    .map(
      (u, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${u.nome}</td>
          <td>${u.email}</td>
          <td>${u.telefone}</td>
          <td>${u.cidade}</td>
          <td>${u.estado}</td>
        </tr>`
    )
    .join("");

  if (usuarios.length === 0) {
    tabela = `<tr><td colspan="6" class="text-center">Nenhum usuário cadastrado ainda.</td></tr>`;
  }

  res.send(`
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Usuários Cadastrados</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background-color: #f8f9fa; }
    .navbar { background: #0a8; }
    .navbar-brand, .nav-link { color: white !important; }
    table { background-color: white; border-radius: 10px; overflow: hidden; }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark shadow">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Meu Site</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Início</a></li>
          <li class="nav-item"><a class="nav-link" href="/cadastro">Cadastro</a></li>
          <li class="nav-item"><a class="nav-link active" href="/usuarios">Usuários</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <h2 class="text-center mb-4 text-primary fw-bold">Usuários Cadastrados</h2>
    <table class="table table-striped table-hover shadow-sm">
      <thead class="table-primary">
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>${tabela}</tbody>
    </table>
  </div>
</body>
</html>
  `);
});

server.listen(porta, () => {
  console.log(`✅ Servidor rodando em http://localhost:${porta}`);
});
