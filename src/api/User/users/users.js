import {users, posts} from "../../../../db/db"

export default {
  Query: {
    users: async () => {
      return users;
    },
    getUser: async (_, {id}) => {
      return users.find(user => user.id == id);
    }
  },

  User: {
    posts: async (parent) => {
      const filterPosts = posts.filter(post => post.author.id == parent.id);
      return filterPosts;
    }
  }
}