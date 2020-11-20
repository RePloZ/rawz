import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NotFound : FunctionComponent = () => (<>
    <h1>Page Not Found</h1>
    <Link to="/">Accueil</Link>
</>)

export default NotFound;