import { ObjectId } from "mongoose";

interface Iposts {
  id: String;
  created_time: Date;
  message: String;
  attachments: {
    data: [
      {
        media: {
          image: {
            height: Number;
            src: String;
            width: Number;
          };
        };
        target: {
          id: String;
          url: String;
        };
        title: String;
        type: String;
        url: String;
        description: String;
      }
    ];
  };
}

export { Iposts };
