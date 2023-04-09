import React from "react";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
            <div class="container">
                <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};