import '/home.css'

const catalogo = [
  {
    nome: 'Kepler-452b',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original&#39'
  },
  {
    nome: 'HD 189733b',
    imagem: 'https://s2-oglobo.glbimg.com/TilppykMTZI_YY06G0yTWmwIDUs=/0x0:1200x900/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/k/G/ANvMrnTWCKiKiA1HaBRw/planeta-nasa.webp'
  },
  {
    nome: 'Proxima Centauri b',
    imagem: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=100&q=80&#39'
  },
  {
    nome: 'TRAPPIST-1e',
    imagem: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=100&q=80&#39'
  },
  {
    nome: 'Nebulosa do Caranguejo',
    imagem: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=100&q=80&#39'
  }
]
function Home() {
  return (
    <div className="pagina">

      <header className="cabecalho">

        <div className="logo">
          <div className="logoIcon">
            ◎
          </div>

          <div>
            <h1>COSMOS</h1>
            <span>OBSERVATORY</span>
          </div>
        </div>

        <nav>
          <a className="ativo">Início</a>
          <a>Explorar</a>
          <a>Planetas</a>
          <a>Sistemas</a>
          <a>Meu Perfil</a>
        </nav>

        <div className="perfil">
          <b>EC</b>
          <span>Elena Costa</span>
          <i>|</i>
          <a>Sair</a>
        </div>

      </header>