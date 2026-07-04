import { useEffect } from "react";
import { getUsers, getPosts, getTodos } from "./Api";

export default function InterviewApiCall() {
    useEffect(() => {
        Promise.all([
            getUsers(),
            getPosts(),
            getTodos()
        ]).then(([users, posts, todos]) => {
            console.log(users, posts, todos);
        });
    }, []);
}