interface IImageAttachment {
  media: {
    image: {
      height: number;
      src: string;
      width: number;
    };
  };
  target: {
    id: string;
    url: string;
  };
  title: string;
  type: string;
  url: string;
}

interface INativeTemplateAttachment {
  description: string;
  title: string;
  type: string;
}

interface Iposts extends Document {
  id: string;
  created_time: Date;
  message: string;
  attachments: {
    data: (IImageAttachment | INativeTemplateAttachment)[];
  };
}

export { Iposts, INativeTemplateAttachment, IImageAttachment };
