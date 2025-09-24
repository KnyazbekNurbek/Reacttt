import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1>Hello, React!</h1>
        <p>Это моё первое React-приложение 🚀</p>
      </main>
      <Footer />
    </div>
  );
}
