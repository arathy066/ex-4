import React from "react";
import Nav from '../component/nav'
import Header from '../component/header'

export default function Page() {
    return <div className="container py-4">
        <div className="row">

            <Header></Header>

            <Nav></Nav>


            <div className="col-9">
                <img className="d-block w-100 mb-3" src="https://cdn.pixabay.com/photo/2024/10/27/07/12/women-9152739_1280.jpg" />

                <h1>About</h1>
                <p>
                   Curated coffee. Conscious origins. Crafted for those who value flavor and freshness in every pour!
                </p>
            </div>

        </div>
    </div>
}