import express from "express"
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    //permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());

    //Rota para buscar todos os posts
    app.get("/posts", listarPosts );
}

export default routes;
