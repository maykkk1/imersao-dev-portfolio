const projects = [
  {
    title: "calculadora",
    img: "https://thumbs2.imgbox.com/7a/42/a2rgIHK6_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto1",
    codepen: "https://codepen.io/maykkk1/full/podBNOv",
  },
  {
    title: "CONVERSOR DE MOEDAS",
    img: "https://thumbs2.imgbox.com/ff/4b/aPm40l9Q_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto2",
    codepen: "https://codepen.io/maykkk1/full/oNoRKEr",
  },
  {
    title: "Mentalista",
    img: "https://thumbs2.imgbox.com/a1/24/A0xf0Cgp_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto3",
    codepen: "https://codepen.io/maykkk1/full/BamgxWo",
  },
  {
    title: "Aluraflix",
    img: "https://thumbs2.imgbox.com/66/f5/gSHcPjm9_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto4-5",
    codepen: "https://codepen.io/maykkk1/full/mdqNqdM",
  },
  {
    title: "Tabela de Classificação",
    img: "https://thumbs2.imgbox.com/88/61/TWpVYQGt_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto6",
    codepen: "https://codepen.io/maykkk1/full/RwxPjKN",
  },
  {
    title: "Super Trunfo",
    img: "https://thumbs2.imgbox.com/7a/75/r0HmEaH8_t.png",
    github: "https://github.com/maykkk1/imersao-dev-projeto7-8",
    codepen: "https://codepen.io/maykkk1/full/LYepdzq",
  }
];

const showProjects = (title, img, github, codepen) => {
  const projectContainer = document.getElementById("projects-container");
  const project = `
<div class="project">
    <h2>${title}</h2>
    <div class="projectImgWrapper">
        <img src=${img} alt=""/>
    </div>
    <ul>
        <li><a href=${github}>Github</a></li>
        <li><a href=${codepen}>Codepen</a></li>
    </ul>
</div>
    `;
  projectContainer.innerHTML += project;
};

projects.forEach((project) => {
  showProjects(project.title, project.img, project.github, project.codepen);
});
