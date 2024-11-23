import { MongoClient } from 'mongodb';


// export default: indica que exporta a função como padrão, permitindo seu uso em outros módulos ou arquivos.

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;
  
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados... \n Tentativa de conexão em: '+ new Date().toLocaleString());
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!\n DataHora da Conexão: '+ new Date().toLocaleString());
  
        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
  }