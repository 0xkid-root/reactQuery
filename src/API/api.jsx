import axios from "axios";

 const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});



export const fetchPostData = async(pageNumber)=>{
    try{
        const res = await  api.get(`/posts?_start=${pageNumber}&_limit=3`);
        return res?.status === 200 ? res?.data : [];


    }catch(error){
        console.log(error);
    }
}


export const fetchInvPost = async(id)=>{
    try{
        const res = await api.get(`/posts/${id}`)
        return res?.status === 200 ? res?.data : [];

    }catch(error){
        console.log(error);
    }
}

// delete post 

export const deletePost = async(id)=>{
    try{
        return api.delete(`/posts/${id}`);
    }catch(error){
        console.log(error);
    }
}

// update post 

export const updatePost = async(id) =>{
    try{
        return api.patch(`/posts/${id}`,{title:"I Have Updated"});
    }catch(error){
        console.log(error);
    }
}