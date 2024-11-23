import express, { json } from 'express';
import mongo from 'mongodb'

//console.log(process.env.STRING_CONEXAO)

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id:2,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placecats.com/curious/400/300"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/sleepybox/350/250"
    }
];


const app = express();
app.use(express.json());

app.listen(3000,()=> {
console.log("Servidor escultando...");
});

app.get("/posts",(req,res)=> {
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

