import express, { json } from 'express';
import conectarAoBanco from './src/config/dbConfig.js'; 

//Conecta ao banco de dados utilizando a string de conexão fornecida por variavel de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto teste",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id:2,
//         descricao: "Gato curioso olhando pela janela",
//         imagem: "https://placecats.com/curious/400/300"
//     },
//     {
//         id: 3,
//         descricao: "Gatinho dormindo em uma caixa",
//         imagem: "https://placecats.com/sleepybox/350/250"
//     }
// ];


const app = express();
//permite que o servidor interprete requisições com corpo no formato JSON
app.use(express.json());

app.listen(3000,()=> {
console.log("Servidor escultando...");
});



async function getFullPosts(){
    const db = conexao.db("imersao-istabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}




app.get("/posts", async (req,res)=> {
    const posts =  await getFullPosts()
    res.status(200).json(posts);
});

app.get("/posts/:id",(req,res)=> {
    const index = buscaPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

function buscaPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    })
}

