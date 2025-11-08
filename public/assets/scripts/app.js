const carros = [
  {
    id: 1,
    nome: "Esportivos",
    descricao: "Projetado para quem busca velocidade e precisão.",
    detalhes: "O esportivo combina tecnologia avançada e segurança, com design aerodinâmico, motor de alta performance e sistema de entretenimento de última geração",
    imagem: "porshe.jpg",
    relacionados: [
      { id: 7, nome: "Ferrari F8", imagem: "ferrarif8.png" },
      { id: 8, nome: "Lamborghini Huracán", imagem: "lambo.jpeg" },
      { id: 9, nome: "Bugatti Chiron", imagem: "bugatti.jpg" }
    ]
  },
  {
    id: 2,
    nome: "Carros Familiar",
    descricao: "Conforto e perfeitos para viagens.",
    detalhes: "O carro familiar combina tecnologia e segurança, com amplo espaço interno para toda a família, motor eficiente e sistema de entretenimento de última geração.",
    imagem: "Urban-SUV.png",
    relacionados: [
      { id: 10, nome: "BMW X5", imagem: "bmwx5.jpg" },
      { id: 11, nome: "Audi Q7", imagem: "audiq7.jpg" },
      { id: 12, nome: "Mercedes GLE", imagem: "g63.jpg" }
    ]
  },
  {
    id: 3,
    nome: "EcoDrive",
    descricao: "100% elétrico, autonomia de 600km.",
    detalhes: "O EcoDrive é o futuro da mobilidade. Sustentável, com recarga rápida e autonomia de até 600 km, além de tecnologia de direção semiautônoma.",
    imagem: "byd_seal.jpg",
    relacionados: [
      { id: 13, nome: "Tesla Model S", imagem: "1 Tesla Model S.jpg" },
      { id: 14, nome: "BMW i4", imagem: "bmwi4.jpg" },
      { id: 15, nome: "Audi e-tron", imagem: "etron.png" }
    ]
  },
  {
    id: 4,
    nome: "Superesportivo",
    descricao: "Superesportivos com mais de 500cv e design arrojado.",
    detalhes: "O superesportivo combina tecnologia de ponta e segurança, com design agressivo, motor extremo e sistema de entretenimento de última geração.",
    imagem: "mclaren.jpg",
    relacionados: [
      { id: 16, nome: "Ferrari 488", imagem: "ferrari488.jpg" },
      { id: 17, nome: "Lamborghini Aventador", imagem: "lamboaventador.png" },
      { id: 18, nome: "Aston Martin Vantage", imagem: "astonmartinvan.jpg" }
    ]
  },
  {
    id: 5,
    nome: "Luxo esportivo de alto padrão",
    descricao: "Elegância incomparável e desempenho de alto nível.",
    detalhes: "O carro de luxo esportivo de alto padrão une desempenho extraordinário, segurança avançada e conforto supremo, com tecnologia de ponta e design exclusivo.",
    imagem: "astonmartin.jpg",
    relacionados: [
      { id: 19, nome: "Bentley Continental GT", imagem: "bentley.png" },
      { id: 20, nome: "Rolls-Royce Wraith", imagem: "ROLLSROYCE.jpg" },
      { id: 21, nome: "Jaguar F-Type", imagem: "jaguar.jpg" }
    ]
  },
  {
    id: 6,
    nome: "Esportivos de entrada",
    descricao: "Linhas marcantes e motor eficiente para performance emocionante.",
    detalhes: "Esportivo de entrada que une diversão ao volante, visual arrojado e inovação tecnológica.",
    imagem: "C8-Corvette.jpg",
    relacionados: [
      { id: 22, nome: "Ford Mustang GT", imagem: "mustang.jpg" },
      { id: 23, nome: "Chevrolet Camaro ZL1", imagem: "camaro.jpg" },
      { id: 24, nome: "Dodge Challenger SRT", imagem: "dodge.jpg" }
    ]
  }
];

function carregarCarrossel() {
  const container = document.getElementById("bannerCarros");
  if (!container) return;

  container.innerHTML = `
    <div class="carousel-inner">
      ${carros.slice(0, 6).map((carro, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${carro.imagem}" class="d-block w-100" style="height:450px; object-fit:cover;" alt="${carro.nome}">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>${carro.nome}</h5>
            <p>${carro.descricao}</p>
            <a href="detalhes.html?id=${carro.id}" class="btn btn-primary">Ver detalhes</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function carregarCarros() {
  const container = document.getElementById("lista-carros");
  if (!container) return;

  container.innerHTML = carros.slice(0, 6).map(carro => `
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${carro.imagem}" class="card-img-top" alt="${carro.nome}" style="height:200px; object-fit:cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${carro.nome}</h5>
          <p class="card-text">${carro.descricao}</p>
          <a href="detalhes.html?id=${carro.id}" class="mt-auto btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    </div>
  `).join('');
}

function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const carro = carros.find(c => c.id == id);
  const container = document.getElementById("detalhesCarro");

  if (!container) return;

  if (!carro) {
    container.innerHTML = "<p>Carro não encontrado.</p>";
    return;
  }

  container.innerHTML = `
    <div class="card shadow-sm mb-5">
      <img src="${carro.imagem}" class="card-img-top" style="height:300px; object-fit:cover;">
      <div class="card-body">
        <h3 class="card-title">${carro.nome}</h3>
        <p class="text-muted">${carro.descricao}</p>
        <p>${carro.detalhes}</p>
        <a href="index.html" class="btn btn-dark">Voltar</a>
      </div>
    </div>
  `;
}

function carregarAluno() {
  const app = document.getElementById("app");
  if (!app) return;

  const aluno = {
    nome: "Luan Deivid Oliveira Ferreira",
    curso: "Sistemas De Informação",
    turma: "Manhã",
    descricao: "Sou estudante de Sistemas de Informação, buscando aprimorar habilidades em desenvolvimento web e criação de interfaces modernas.",
    foto: "luan2.jpg",
    redes: {
      Instagram: "https://www.instagram.com/luandeivid10"
    }
  };

  app.innerHTML = `
    <div class="row mt-5">
      <div class="col-md-8">
        <h5 class="text-primary">Sobre</h5>
        <p>${aluno.descricao}</p>
      </div>
      <div class="col-md-4 text-center">
        <h5 class="text-primary mb-3">Autor</h5>
        <img src="${aluno.foto}" alt="${aluno.nome}" class="rounded-circle mb-3 shadow-sm" style="width:120px;height:120px;object-fit:cover;">
        <p><strong>Aluno:</strong> ${aluno.nome}</p>
        <p><strong>Curso:</strong> ${aluno.curso}</p>
        <p><strong>Turma:</strong> ${aluno.turma}</p>
        <h6 class="text-primary mt-3">Redes Sociais</h6>
        <a href="${aluno.redes.Instagram}" target="_blank" class="text-decoration-none">📘 Instagram</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  carregarCarrossel();
  carregarCarros();
  carregarAluno();
});
