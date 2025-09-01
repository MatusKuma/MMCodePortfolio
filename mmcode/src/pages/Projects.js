import "../styles/Background.css";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
export default function Projects() {
  return (
    <>
      <div className="Projects">
        <Navbar />
        <main className="ProjectsContent">
          <h3>Toto je Our Projects</h3>
          <Background />
        </main>
        <Footer/>
      </div>
    </>
  );
}
