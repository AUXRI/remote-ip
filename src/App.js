import AboutUs from "./components/AboutUs";
import Drone from "./components/Drone";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Tests from "./components/Tests";
import Redirect from "./components/redirect"; // Убедитесь, что имя файла и путь правильные

function App() {
  return (
    <div className="main">
      <Redirect /> {/* Добавьте компонент Redirect */}
      <Header />
      <Main />
      <Tests />
      <AboutUs />
      <FAQ />
      <Drone />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
