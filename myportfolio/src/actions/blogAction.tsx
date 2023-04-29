import { v4 as uuid } from "uuid";

export const addBlog = ({ title, desc, img,desc1,desc2 }:any) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    img: img,
    title: title,
    desc: desc,
    desc1: desc1,
    desc2: desc2,
   
  },
});
export const editBLog = (id:any, update:any) => ({
  type: "UPDATE_BLOG",
  id,
  update,
});
export const removeBlog = ({id}:any) => ({
  type: "REMOVE_BLOG",
  id:id
});
