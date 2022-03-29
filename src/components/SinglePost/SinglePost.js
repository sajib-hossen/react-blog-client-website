import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singleWrapper">
        <img
          src="https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singleImage"
        />
        <h1 className="sinlgePostTilte">
          Lorem ipsum dolor sit amet, consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Sajib</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlepostDescri">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed
          porro repudiandae, incidunt debitis amet omnis voluptatem dolor
          aspernatur at earum officiis pariatur nisi ea harum laudantium sint
          dolore aut magnam delectus doloribus accusamus! Dolor accusantium
          eaque tenetur assumenda excepturi eos amet voluptate eveniet libero
          asperiores, sapiente, atque, ullam corporis perspiciatis aperiam
          nulla. Reiciendis a inventore, excepturi delectus ab odio ut doloribus
          molestiae? Quo, molestiae? Fuga, quam iste blanditiis ea maiores
          dolorem fugit! Nam modi dicta quos reiciendis, eligendi ex obcaecati
          in veniam eius doloremque excepturi aliquid quisquam dolore! Enim
          nostrum quod eveniet atque repudiandae officia animi reiciendis nihil
          similique ad fuga eos hic laudantium obcaecati doloribus, aliquam
          autem deserunt magni possimus maiores eligendi distinctio. Consectetur
          vitae optio nobis fugiat laboriosam incidunt sed ut, eaque corrupti
          fuga, cumque quam maiores. Error id, praesentium cum distinctio ullam
          maiores eaque reiciendis nobis voluptates consequuntur quae,
          laboriosam molestiae veniam odio animi quaerat natus aliquam, quidem
          eligendi ipsa velit eius a. Atque tempore vel sequi incidunt tenetur,
          ducimus enim alias commodi, eius fuga architecto nisi vero praesentium
          doloremque ipsum! Aspernatur aperiam officia laboriosam maiores
          aliquam culpa ab ipsam, nisi voluptas incidunt molestiae dolor vero
          ducimus enim voluptatum itaque, quaerat distinctio deleniti
          accusantium iure? Asperiores.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
