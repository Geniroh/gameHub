import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"

export const BaseRoutes = () => (
    <Routes>
        <Route index element={<LandingPage />} />
    </Routes>
)