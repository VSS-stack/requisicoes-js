import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = documento.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaVideos(titulo, descricao, url, imagem);
}

formulario.addEventListener("submit", evento => criarVideo(evento));