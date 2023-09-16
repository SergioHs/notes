import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "@/app/components/Title";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', body: '', userId: ''});
    const {register, handleSubmit, formState: { errors }} = useForm();

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

    const onSubmit = async () => {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="Titulo do post"
                    {...register('title', {
                        required: 'Title é um campo obrigatório',
                        minLength: {value: 3, message: 'O campo título do post deve ter 3 caracteres ou mais!'},
                        maxLength: {value: 50, message: 'O campo título do post deve ter no máximo 50 caracteres!'},
                    })}
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="border rounded py-2 px-3"
                />
                <input 
                    placeholder="Corpo do post"
                    {...register('body', {
                        required: 'Body é um campo obrigatório',
                        minLength: {value: 50, message: 'O campo body do post deve ter 50 caracteres ou mais!'},
                        maxLength: {value: 500, message: 'O campo body do post deve ter no máximo 500 caracteres!'},
                    })}
                    value={newPost.body}
                    onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                    className="border rounded py-2 px-3"
                    />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    > 
                Send
                </button>
            </form>
            {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            {errors.body && <span className="text-red-500">{errors.body.message}</span>}
            <div>
                <ul>
                {posts.map((post) => (
                    <div className="bg-white shadow-md rounded p-4 mb-4">
                        <li key={post.id}>
                            <strong>Titulo: </strong> 
                            <Link 
                                href={`/posts/${post.id}`}
                                className='text-blue-500 hover:text-blue-800'
                            >
                                {post.title}
                            </Link>
                            <p><strong>Post: </strong>{post.body}</p>
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