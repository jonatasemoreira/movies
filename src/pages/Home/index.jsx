import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from '../../components/Footer/Footer';

export default function Home () {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes () {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  }, [])

  return (
    <>
      <div className='container-head'>
        <input type="text" name="search" id="search" placeholder='Em breve...' />
      </div>
      <h1 className='title-container-home'>Lançamentos</h1>
      <div className="container-main-filmes">
        {filmes.map((filme) => {
            return (
              <>
                <article className='container-filme' key={filme.id}>
                  <Link className='acessarFilme' to={`/filme/${filme.id}`}>
                    <img src={filme.foto} alt={filme.nome} />
                  </Link>
                </article>
              </>
            )
          })};
      </div>
      <Footer/>
    </>
  );
}