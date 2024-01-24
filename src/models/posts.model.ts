import { Schema, model } from "mongoose";
import {
  IImageAttachment,
  INativeTemplateAttachment,
  Iposts,
} from "../interfaces/interfaces";

const imageAttachmentSchema = new Schema<IImageAttachment>({
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
});

const nativeTemplateAttachmentSchema = new Schema<INativeTemplateAttachment>({
  description: String,
  title: String,
  type: String,
});

const postSchema = new Schema<Iposts>({
  id: String,
  created_time: String,
  message: String,
  attachments: [imageAttachmentSchema, nativeTemplateAttachmentSchema],
});

const postsModel = model<Iposts>("Posts", postSchema);

export default postsModel;
