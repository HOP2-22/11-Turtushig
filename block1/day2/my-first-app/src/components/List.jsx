import React from "react"
import "./style/List.css"
import { useState } from "react"
export const List = () => {
    return <div className="comment">Hello World</div>
}
export const Comment = (commentText) => {
    return <div className="comment">{commentText}</div>
}
export default List