import { Request, Response } from "express";
import postsHelper from "../helpers/posts.helper";

class postsController {
  static async savePostController(req: Request, res: Response) {
    try {
      const { userID, access_token } = req.body;
      let getPost = await postsHelper.fetchPosts(userID, access_token);

      if (getPost) {
        let postsSaved = await postsHelper.savePosts(getPost);

        if (postsSaved) {
          res.status(200).json({
            message: "publications sauvegardés avec succés",
            postsSaved,
          });
        } else {
          res
            .status(500)
            .json("erreur lors de l' ajout des posts dans la base de données");
        }
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default postsController;
