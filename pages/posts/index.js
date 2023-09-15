import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "@/app/components/Title";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', body: '', userId: ''});

    useEffect(() => {
        const loadPosts = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log('Resposta da API (get):', response.data)
                setPosts(response.data)

            } catch (error) {
                console.log('Error ao carregar o get:', error)
            }
        }
        loadPosts();
    }, []);

    const addPost = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            console.log('Resposta da API (post): ', response.data)
            setPosts([response.data, ...posts])
            setNewPost({ title: '', body: '', userId: ''})
        } catch (error) {
            console.log(error);
            
        }
    }

    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`, newPost)
            if(response){
                console.log('Resposta da API (delete): Deletado com sucesso!')
                alert('deletado com sucesso')
            }
            const updatedPosts = posts.filter((post) => post.id !== postId)
            setPosts(updatedPosts)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return(
        <div>
            <Layout>
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>
            <Title>Form add post</Title>

            <input 
                placeholder="Titulo do post"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="border rounded py-2 px-3"
            />
            <input 
                placeholder="Corpo do post"
                value={newPost.body}
                onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                className="border rounded py-2 px-3"
            />
            <button
                onClick={addPost}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            > 
            Send
            </button>

            <div>
                <ul>
                {posts.map((post) => (
                    <div className="bg-white shadow-md rounded p-4 mb-4">
                        <li key={post.id}>
                            <p>Title: {post.title}</p>
                            <p>Post: {post.body}</p>
                        </li>

                        <button
                            onClick={() => deletePost(post.id)}
                            className="bg-blue-500 text-white py-2 px-3 rounded"
                        > 
                            Delete 
                        </button>
                    </div>
                ))}
                </ul>
            </div>

            </Layout>
        </div>
    )
}

export default Posts;