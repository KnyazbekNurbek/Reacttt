import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const user = {
    name: "Князьбек Нүрбек",
    email: "knazbeknurbek@gmail.com",
    avatar:
      "https://i.pravatar.cc/160?img=12"
  };

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h1 className="page-title">Главная</h1>
        <p className="lead">
          Добро пожаловать! Ниже пример карточки профиля.
        </p>

        <ProfileCard name={user.name} email={user.email} avatar={user.avatar} />

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Это демонстрационная страница. Здесь можно разместить описание сайта,
            команды или проекта.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Связаться с нами можно по e-mail: <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
