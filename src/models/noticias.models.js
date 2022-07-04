class Noticia {
  constructor(categoria, titulo, resumo, fonte, imagem) {
    this.titulo           = titulo;
    this.resumo           = resumo;
    this.categoria        = categoria;
    this.fonte            = fonte;
    this.imagem           = imagem;
  }

  criarCardNoticiaPrincipal() {

    const sectionPrincipal = document.querySelector('.principal');

    /* criando os elementos */
    const divImage = document.createElement('div');
    divImage.className = 'principal__image';
      const figureImage = document.createElement('figure');
      figureImage.className = 'principal__figure';
        const img = document.createElement('img');

    const divPrincipalInfo = document.createElement('div');
    divPrincipalInfo.className = 'principal__info';

      const h4Categoria = document.createElement('h4');
      h4Categoria.className = 'principal__info-categoria';

      const h2Titulo = document.createElement('h2');
      h2Titulo.className = 'principal__info-titulo';

      const pResumo = document.createElement('p');
      pResumo.className = 'principal__info-resumo';

      const h4Fonte = document.createElement('h4');
      h4Fonte.className = 'principal__info-fonte';

    /* Pegando os valores */
    h4Categoria.innerText = this.categoria;
    h2Titulo.innerText    = this.titulo;
    pResumo.innerText     = this.resumo;
    h4Fonte.innerText     = `Fonte: ${this.fonte}`;
    img.src               = this.imagem;

   /* Montando os elementos */
   figureImage.append(img);
   divImage.appendChild(figureImage);
   divPrincipalInfo.append(divImage, h4Categoria, h2Titulo, pResumo, h4Fonte);
   sectionPrincipal.append(divImage, divPrincipalInfo);
   return sectionPrincipal;
  }


  criarCardNoticiaSecundaria() {

    const sectionSecundaria = document.querySelector('.secundaria');

    /* Criando os elementos */
    const divSecundariaCard = document.createElement('div');
    divSecundariaCard.className = 'secundaria__card';

      const divMancheteInfo = document.createElement('div');
      divMancheteInfo.className = 'manchete__info';

        const h4Categoria = document.createElement('h4');
        h4Categoria.className = 'manchete__info-categoria';

        const h2Titulo = document.createElement('h2');
        h2Titulo.className = 'manchete__info-titulo';

        const pResumo = document.createElement('p');
        pResumo.className = 'manchete__info-resumo';

        const h4Fonte = document.createElement('h4');
        h4Fonte.className = 'manchete__info-fonte';
    
      const divMancheteFigure = document.createElement('div');
      divMancheteFigure.className = 'manchete__figure';

        const figureImage = document.createElement('figure');
        figureImage.className = 'manchete__image';

          const img = document.createElement('img');
    
    /* Pegando os valores */
    h4Categoria.innerText = this.categoria;
    h2Titulo.innerText    = this.titulo;
    pResumo.innerText     = this.resumo;
    h4Fonte.innerText     = `Fonte: ${this.fonte}`;
    img.src               = this.imagem;
    
    /* Montando os elementos */
    divMancheteInfo.append(h4Categoria, h2Titulo, pResumo, h4Fonte);
    figureImage.appendChild(img);
    divMancheteFigure.appendChild(figureImage);
    divSecundariaCard.append(divMancheteInfo, divMancheteFigure);
    sectionSecundaria.append(divSecundariaCard);

    return sectionSecundaria;
  }
}

export default Noticia