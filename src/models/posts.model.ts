import { Schema, model } from "mongoose";
import { Iposts } from "../interfaces/interfaces";

const postsSchema = new Schema({
  id: String,
  created_time: Date,
  message: String,
  attachments: {
    data: [
      {
        media: {
          image: {
            height: Number,
            src: String,
            width: Number,
          },
        },
        target: {
          id: String,
          url: String,
        },
        title: String,
        type: String,
        url: String,
        description: String,
      },
    ],
  },
});

const postsModel = model<Iposts>("Posts", postsSchema);

export default postsModel;
