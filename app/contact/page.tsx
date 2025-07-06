import React from "react";
import Nav from '../component/nav'
import Header from '../component/header'

export default function Page() {
    return <div className="container py-4">
        <div className="row">

            <Header></Header>

            <Nav></Nav>


            <div className="col-9">
                
                <h1>Contact</h1>
                <p>
                   Get In Touch!<br></br> Contact us at 647 778-2628.
                </p>
            </div>

        </div>
    </div>
}