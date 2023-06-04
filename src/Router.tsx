import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./pages/NotFound";
import Character from "./components/Character";
import CharacterDetail from "./components/CharacterDetail";
import Modal from "./components/Modal";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Character />
            },
            {
                path: "character/:id",
                element: <CharacterDetail />
            },
            {
                path: "modal",
                element: <Modal />
            }
        ],
        errorElement: <NotFound />
    }
])

export default router;