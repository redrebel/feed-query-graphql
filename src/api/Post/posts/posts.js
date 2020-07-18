import {posts} from "../../../../db/db"

export default {
  Query: {
    posts: async () => {
      return posts;
    }
  }
}