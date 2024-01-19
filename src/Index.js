import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Channel from "./Pages/Channel";
import Search from "./Pages/Search";
import Header from "./components/Header";

const Index = ()=>{
    return (
       <> 
        <Header />
        <Outlet />
       </> 
    )
}


const router = createBrowserRouter([
    {
        path:"/",
        element:<Index />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"/video/:vidId",
                element:<Video />,
            },
            {
                path:"/channel/:chanId",
                element:<Channel />,
            },
            {
                path:"/search/:serchquery",
                element:<Search />
            }
        ]
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);