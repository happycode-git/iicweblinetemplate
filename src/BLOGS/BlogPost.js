import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { c_footer, c_nav } from "../Constants";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BlogPost1 } from "./BlogPost1";

export function BlogPost() {
  const location = useLocation();
  const post = location.state;
  const navigate = useNavigate();
  return (
    <div className="">
      {c_nav()}
      <div className={"separate_horizontal padding"}>
        <FaArrowLeftLong
          size={"40px"}
          onClick={() => {
            navigate("/blog");
          }}
          className="pointer"
        />
        <div className=""></div>
      </div>
      <div className="padding_v slide_from_bottom">
        {post.id == 0 && <BlogPost1 args={post} />}
      </div>
      {c_footer()}
    </div>
  );
}
