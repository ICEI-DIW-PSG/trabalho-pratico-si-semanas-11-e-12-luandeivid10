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
  },

  { id: 7, nome: "Ferrari F8", descricao: "Superesportivo italiano com motor V8 biturbo.", detalhes: "A Ferrari F8 combina potência de 710cv e um design aerodinâmico para máxima performance em pista.", imagem: "ferrarif8.png" },
  { id: 8, nome: "Lamborghini Huracán", descricao: "V10 potente e design agressivo.", detalhes: "O Huracán é equipado com motor V10 de 640cv, tração integral e comportamento esportivo de alto nível.", imagem: "lambo.jpeg" },
  { id: 9, nome: "Bugatti Chiron", descricao: "O ápice da engenharia automotiva.", detalhes: "Com motor W16 de 1500cv, o Chiron redefine os limites de velocidade e luxo.", imagem: "bugatti.jpg" },
  { id: 10, nome: "BMW X5", descricao: "SUV premium de luxo.", detalhes: "O BMW X5 combina conforto, tecnologia e potência, ideal para longas viagens e uso urbano.", imagem: "bmwx5.jpg" },
  { id: 11, nome: "Audi Q7", descricao: "SUV espaçoso e sofisticado.", detalhes: "O Audi Q7 oferece conforto, tração quattro e design moderno, perfeito para famílias exigentes.", imagem: "audiq7.jpg" },
  { id: 12, nome: "Mercedes GLE", descricao: "Elegância e tecnologia alemã.", detalhes: "A Mercedes GLE traz sofisticação e um motor potente aliado à dirigibilidade superior.", imagem: "g63.jpg" },
  { id: 13, nome: "Tesla Model S", descricao: "Sedã elétrico futurista.", detalhes: "O Model S oferece aceleração instantânea, autonomia superior e tecnologia de ponta em direção autônoma.", imagem: "1 Tesla Model S.jpg" },
  { id: 14, nome: "BMW i4", descricao: "Elétrico esportivo de alta performance.", detalhes: "O BMW i4 combina sustentabilidade e emoção ao dirigir, com potência e design inovadores.", imagem: "bmwi4.jpg" },
  { id: 15, nome: "Audi e-tron", descricao: "SUV elétrico de luxo.", detalhes: "O Audi e-tron é a fusão de elegância e eficiência, com tração elétrica e conforto premium.", imagem: "etron.png" },
  { id: 16, nome: "Ferrari 488", descricao: "Sucessora da 458 Italia.", detalhes: "Com motor V8 biturbo e 670cv, a 488 oferece precisão e emoção em cada curva.", imagem: "ferrari488.jpg" },
  { id: 17, nome: "Lamborghini Aventador", descricao: "Superesportivo V12.", detalhes: "O Aventador traz motor V12 de 770cv, com design impactante e som inconfundível.", imagem: "lamboaventador.png" },
  { id: 18, nome: "Aston Martin Vantage", descricao: "Elegância e esportividade.", detalhes: "O Vantage é o equilíbrio perfeito entre luxo britânico e desempenho agressivo.", imagem: "astonmartinvan.jpg" },
  { id: 19, nome: "Bentley Continental GT", descricao: "Luxo e performance britânicos.", detalhes: "O Continental GT oferece conforto absoluto e motor W12 potente para viagens refinadas.", imagem: "bentley.png" },
  { id: 20, nome: "Rolls-Royce Wraith", descricao: "Símbolo máximo de elegância.", detalhes: "O Wraith une luxo artesanal e desempenho impressionante, um verdadeiro ícone britânico.", imagem: "ROLLSROYCE.jpg" },
  { id: 21, nome: "Jaguar F-Type", descricao: "Coupé esportivo e sofisticado.", detalhes: "O F-Type oferece uma experiência de condução envolvente, com motores potentes e design marcante.", imagem: "jaguar.jpg" },
  { id: 22, nome: "Ford Mustang GT", descricao: "Muscle car americano clássico.", detalhes: "O Mustang GT é puro poder e tradição, com motor V8 e ronco inconfundível.", imagem: "mustang.jpg" },
  { id: 23, nome: "Chevrolet Camaro ZL1", descricao: "Força e estilo em cada curva.", detalhes: "O Camaro ZL1 entrega 650cv e uma presença marcante, com design agressivo e alto desempenho.", imagem: "camaro.jpg" },
  { id: 24, nome: "Dodge Challenger SRT", descricao: "Puro músculo americano.", detalhes: "O Challenger SRT une tradição e brutalidade com motor V8 supercharged de até 797cv.", imagem: "dodge.jpg" }
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

    <h4 class="mt-4 mb-3">Modelos relacionados</h4>
    <div class="row" id="carrosRelacionados"></div>
  `;

  const relacionadosContainer = document.getElementById("carrosRelacionados");
  relacionadosContainer.innerHTML = carro.relacionados.map(r => `
    <div class="col-md-4 mb-3">
      <div class="card h-100 shadow-sm">
        <img src="${r.imagem}" class="card-img-top" style="height:180px; object-fit:cover;">
        <div class="card-body text-center">
          <h6 class="card-title">${r.nome}</h6>
          <a href="detalhes.html?id=${r.id}" class="btn btn-primary mt-2">Ver detalhes</a>
        </div>
      </div>
    </div>
  `).join('');
}

function carregarAluno() {
  const app = document.getElementById("app");
  if (!app) return;

  const aluno = {
    nome: "Luan Deivid Oliveira Ferreira",
    curso: "Sistemas De Informação",
    turma: "Manhã",
    descricao: "Sou estudante de Sistemas de Informção. Busco constantemente aprimorar minhas habilidades em desenvolvimento web e criação de interfaces modernas, com foco em oferecer experiências digitais e intuitivas.",
    foto: "luan2.jpg", 
    redes: {
      Instagram: "https://www.instagram.com/luandeivid10?igsh=am5vNGttOHZ5bTFv&utm_source=qr",
    }
  };

  const container = document.createElement('div');
  container.classList.add('row', 'mt-5');

  const sobre = document.createElement('div');
  sobre.classList.add('col-md-8');
  sobre.innerHTML = `
    <h5 class="text-primary">Sobre</h5>
    <p>${aluno.descricao}</p>
  `;

  const autor = document.createElement('div');
  autor.classList.add('col-md-4', 'text-center');
  autor.innerHTML = `
    <h5 class="text-primary mb-3">Autor</h5>
    <img src="${aluno.foto}" alt="${aluno.nome}" 
         class="rounded-circle mb-3 shadow-sm" 
         style="width: 120px; height: 120px; object-fit: cover;">
    <p><strong>Aluno:</strong> ${aluno.nome}</p>
    <p><strong>Curso:</strong> ${aluno.curso}</p>
    <p><strong>Turma:</strong> ${aluno.turma}</p>
    <h6 class="text-primary mt-3">Redes Sociais</h6>
    <a href="${aluno.redes.Instagram}" target="_blank" class="text-decoration-none">📘 Instagram</a>
  `;

  container.appendChild(sobre);
  container.appendChild(autor);
  app.appendChild(container);
}


document.addEventListener("DOMContentLoaded", () => {
  carregarCarrossel();
  carregarCarros();
  carregarDetalhes();
  carregarAluno();
});
