import { Route, Routes } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./App.css";
import AppBody from "./pages/AppBody";
import Notespage from "./pages/Notespage";

function App() {
    return (
        <>
            <div className="shadow-md">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<AppBody />} />
                <Route path="/notes" element={<Notespage />} />
            </Routes>{" "}
            <div className=" shadow-md">
                <Footer />
            </div>
        </>
    );
}

export default App;
