// import halaman home
import Home from "./pages/Home";

function App() {
    return (
        <>
        {
            /**
             * membuat routing
             * bungkus routing menggunakan routes
             * buat routing menggunakan route
             */
        }
        <Routes>
            <Route path= "/" element={<>Home</>}></Route>
        </Routes>
        </>
    );
}

export default App;