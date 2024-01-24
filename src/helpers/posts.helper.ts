import axios from "axios";
import { Iposts } from "./../interfaces/interfaces";
import postsModel from "../models/posts.model";

class postsHelper {
  static async fetchPosts(
    userID: string,
    access_token: string
  ): Promise<Iposts[] | undefined> {
    try {
      let response = await axios.get(
        `https://graph.facebook.com/v19.0/${userID}/posts?fields=id,message,created_time,attachments&access_token=${access_token}`
      );

      if (response.data && response.data.data) {
        console.log(response.data.data);
        return response.data.data.map((post: any) => ({
          id: post.id,
          created_time: post.created_time,
          message: post.message || "",
          attachments: post.attachments?.data || [],
        }));
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async savePosts(data: Iposts[]): Promise<Iposts[]> {
    try {
      const newPosts = await postsModel.insertMany(data);
      return newPosts;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default postsHelper;
