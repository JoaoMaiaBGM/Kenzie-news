class RequestControler {
  
  static base_resource = "https://kenzie-news-api.herokuapp.com/api/news";

  static async pegarDados() {
    const dados = await fetch(RequestControler.base_resource)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.log(`Esse foi o erro: ${err}`))

    return dados
  }

}

export default RequestControler;