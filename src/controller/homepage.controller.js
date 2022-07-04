import RequestControler from "./request.controller.js";

import Noticia from "../models/noticias.models.js";

class HomepageController {
  
  static async listarNoticiaPrincipal() {
    
    const databaseNoticiaPrincipal = await RequestControler.pegarDados();

    databaseNoticiaPrincipal.forEach((news, index) =>{
      if(index === 0) {
        const noticiaPrincipal = new Noticia(news.categoria, news.titulo, news.resumo, news.fonte, news.imagem);
      const cardNoticiaPrincipal = noticiaPrincipal.criarCardNoticiaPrincipal(news);
      }
    });
    return databaseNoticiaPrincipal;
  }

  static async listarNoticiaSecundaria() {
        
    const databaseNoticiaSecundaria = await RequestControler.pegarDados();

    databaseNoticiaSecundaria.forEach((news, index) =>{
      if(index > 0) {
        const noticiaSecundaria = new Noticia(news.categoria, news.titulo, news.resumo, news.fonte, news.imagem);
        const cardNoticiaSecundaria = noticiaSecundaria.criarCardNoticiaSecundaria(news);
      }
    });
    return databaseNoticiaSecundaria;
  }
}

export default HomepageController;