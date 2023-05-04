import { Posts } from "../types/post";
import { post } from "../mocks/getpost";

class Post {
  async get(): Promise<Posts[]> {
    console.log("uploading post");
    const value: Posts[] = await new Promise((resolve) => {
      setTimeout(() => resolve(post), 3000);
    });
    return value;
  }
}

export default new Post();