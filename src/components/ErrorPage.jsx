import { Link, useRouteError } from "react-router-dom";
const ErrorPage=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Opps!!!!</h1>
            <h2>somthig went wrong!!</h2>
            <h2>{err.status} : {err.statusText}</h2>
           <Link to="/"> <h3>  GO TO HOME click here!</h3></Link>
        </div>
    )
}
export default ErrorPage;