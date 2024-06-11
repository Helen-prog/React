import './App.css';
import Article from './components/article/Article';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Nav from './components/navigation/Nav';
import data from './db.json';

function App() {
  let text = "Заголовок сайта";
  let slogan = "Описание сайта";
  let copy = "Copyright - 2024";

  let nav = {"Главная": "/index", "Новости": "/news", "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts"};

  let db = data.people;
  let icon = data.people.pol;

  return (
    <div className="App">
      <Header
        title={text}
        slogan={slogan} />
      <Nav navigation={nav} />
      <Article db={db} icon={icon} />
      <Footer text={copy} />
    </div>
  );
}

export default App;
