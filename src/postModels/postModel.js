import conectarAoBanco from "../config/dbConfig.js";
//Conecta ao banco de dados utilizando a string de conexão fornecida por variavel de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assícrona para buscar todos os posts do banco de dados
export async function getFullPosts(){
    const db = conexao.db("imersao-istabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-istabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}