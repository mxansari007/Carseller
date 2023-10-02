
import Carscard from "../Components/Carscard/Carscard"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cars from "../pages/Cars/Cars";
import Searchbar from "../Components/Searchbar/Searchbar";
export default function Routing(){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/checkcarscard' element={<Carscard />} />
                    <Route path='/' element={<Cars />} />
                    <Route path='/page/:pageId' element={<Cars />} />
                    <Route path='/checksearchbar' element={<Searchbar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}