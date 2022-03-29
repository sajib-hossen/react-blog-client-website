import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
        className="postImage"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postCatTitel">
          Lorem ipsum dolor sit amet consectetu
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nam
        hic delectus iusto. Ut, distinctio architecto? Non cupiditate natus
        saepe placeat ea odit a, deserunt laborum voluptatum, dolorum
        aspernatur. Assumenda?Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Repudiandae inventore quas facere distinctio illo
        numquam nisi, cum harum corrupti suscipit id ea eos amet vitae at sed
        minus commodi eaque?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsa, molestias voluptates odio dolore porro unde nisi quisquam
        itaque qui consequatur assumenda, tempore laborum necessitatibus
        consequuntur iusto quasi est. Cum, dignissimos?Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Suscipit, nemo numquam sed error
        tempore laborum molestiae quisquam totam iure nisi esse pariatur sint
        autem, neque qui, deserunt vero tenetur id. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Magnam fugiat animi quisquam recusandae
        voluptatibus aut nulla explicabo eius voluptas dolor cumque quos ea, at
        aliquam accusantium commodi consequuntur tempora omnis!
      </p>
    </div>
  );
};

export default Post;
