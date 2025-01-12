import React from "react";
import { fetchInvPost } from "../../API/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
const FetchIndv = () => {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["post",id],
    queryFn: () => fetchInvPost(id),
  });

  
  return (
    <div>
      <ul className="section-accordion">
      <h1>Post Details Number {id}</h1>
      <div>
      <p>ID: {data?.id}</p>
      <p>Title: {data?.title}</p>
      <p>Body:{data?.body}</p>
      </div>
      <NavLink to="/rq">
      <button> Go Back</button>
      </NavLink>
      </ul>
    </div>
  );
};

export default FetchIndv;
