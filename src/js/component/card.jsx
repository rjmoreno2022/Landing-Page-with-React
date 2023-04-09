import React from "react";

export const Card = ({title, text}) => {
    return (
        <div class="card my-2 mx-2 text-center" style={{width: "15rem"}}>
            <img src="https://www.copycat.dev/blog/wp-content/uploads/2022/11/27.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};