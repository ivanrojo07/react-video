import React, { Fragment } from "react";
import Header from "../components/Header";

const Page404 = ()=>{
    return (
        <Fragment>
           <Header />
            <h1>No encontrado</h1>
            <button>Regresa al home</button>
        </Fragment>
    )
}

export default Page404;