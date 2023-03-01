import { defineStore } from "pinia";
import { getPosts } from "./firebase";

export const postsStore = defineStore('posts', () => {
    actions: {
        const GET_POSTS = async () => {
            return "test";
        }
    }
})