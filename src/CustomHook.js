import React from "react";
import useFetch from "./Custom-Hook/useFetch";

const CustomHook = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(data);

    return (
        <>
            <h3>Custom Hook API fetch Method</h3>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
};

export default CustomHook;