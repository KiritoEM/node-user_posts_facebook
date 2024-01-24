import { Request, Response } from "express";
import postsHelper from "../helpers/posts.helper";

class postsController {
  static async savePostController(req: Request, res: Response) {
    try {
      const { userID, access_token } = req.body;
      let getPost = await postsHelper.fetchPosts(userID, access_token);

      if (getPost){
        
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
