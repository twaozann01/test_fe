import UserLayout from "../layouts/UserLayout"
import Home from "../pages/Home"
import Login from "../pages/Login"

const UserRouter = {
    path: "/",
    element: <UserLayout/>,
    children : [
        {index: true, element: <Home/>},
        {path: "login", element: <Login/>}
    ]
}

export default UserRouter