import DashboardLayout from "../layouts/DashboardLayout"
import CreatePost from "../pages/CreatePost"
import EditPost from "../pages/EditPost"
import Posts from "../pages/Posts"
import PrivateRoute from "../shared/components/PrivateRouter";

const DashboardRouter = {
    path: "/posts",
    element: (
    <PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>
  ),
    children : [
        {index: true, element: <Posts/>},
        {path: "create", element: <CreatePost/>},
        {path: "edit/:id", element: <EditPost/>},
    ]
}
export default DashboardRouter