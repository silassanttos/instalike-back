import getFullPosts from "../postModels/postModel.js";

export async function listarPosts (req,res) {
    const posts =  await getFullPosts();
    res.status(200).json(posts);
}