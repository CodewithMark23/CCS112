import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <>
            <Navbar />

            <div className="d-flex">
                <Sidebar />

                <main className="p-4 flex-grow-1">
                    <h1 className="mb-4">Welcome</h1>
                </main>

            </div>
            <Footer />
        </>
    );
}

export default App;