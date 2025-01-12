import React, { useState } from "react";
import { deletePost, fetchPostData } from "../API/api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber,setPageNumber] = useState(0);
  const queryClient = useQueryClient();
  // const getFetchData = async () => {
  //   try {
  //     const res = await fetchPostData();
  //     return res.status === 200 ? res.data : [];
  //   } catch (error) {
  //     console.error(error);
  //     return []; // Return an empty array in case of an error
  //   }
  // };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts",pageNumber], // Correct spelling and format
    queryFn: () => fetchPostData(pageNumber),
    // staleTime:10000,
    // refetchInterval: 1000, // if u are going to another tab then retecthinterval is fetch data
    // refetchIntervalInBackground: true,
       placeholderData:keepPreviousData
  });

// mutation  function to delete the post 

const deleteMutation = useMutation({
  mutationFn: (id) => deletePost(id),
  onSuccess:(data,id) =>{
    console.log("data is here:",data,id)
    queryClient.setQueryData(['posts',pageNumber], (curElem)=>{
      return curElem?.filter((post)=>post !== id)
    });
  },
});


  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something Went Wrong!!</p>;
  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { title, body, id } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div className="pagination-section container">
      <button disabled= {pageNumber === 0 ? true : false  } onClick={() => setPageNumber((prev) => prev - 3) }>Prev</button>
      <h2>{(pageNumber/3) + 1}</h2>
      <button onClick={()=>setPageNumber((prev)=>prev + 3)}>Next</button>

      </div>
    </div> 
  );
};

export default FetchRQ;
