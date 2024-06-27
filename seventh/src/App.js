import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Layout from './components/Layout';
import AboutInfo from './AboutInfo';
import NotFoundPage from './NotFoundPage';
import { useState } from 'react';

function App() {
  let [registred, setRegistred] = useState(false);

  return (
    <div className="App">
      <div style={{textAlign: "center"}}>
        <h3>Пользователь авторизирован: {registred ? "Да" : "Нет"}</h3>
        <button onClick={() => setRegistred({registred: true})}>Авторизация</button>
      </div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={
            registred ? <About /> : <h2>Получить доступ к этой странице <br />могут только авторизированные пользователи</h2>
            } />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles-us" element={<Navigate to="/articles" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
