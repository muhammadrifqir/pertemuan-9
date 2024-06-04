import Container from "../container/container";
import Footer from "../Components/footer/footer";
import Navbar from "../Components/navbar/Navbar";

/**
 * membuat componet layout
 * layout terdiri dari navbar, footer, children
 * menggunakan teknik composition:
 * - menampilkan konten dinamis
 * - menggunakan props children
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {/**
         * menggunakan components container
         * konten dibungkus dengan container  
         */}
         <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
