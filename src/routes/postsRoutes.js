import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost ,uploadImagem} from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads",storage});

//linux ou mac
//const upload = multer({dest: "./uploads});



const routes = (app) => {
    //permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());

    //Rota para buscar todos os posts
    app.get("/posts", listarPosts );
    
    //Rota para criar um post
    app.post("/posts", postarNovoPost );
    
    //Rota para upload de imagens(Assumindo uma única imagem chamada de "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;
