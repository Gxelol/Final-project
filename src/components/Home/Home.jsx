import valorantLogo from "../../images/valorant-logo-removebg-preview.png";

export default function Home(props) {
  return (
    <>
      <main className="home">
        <section id="home" className="home__section">
          <div className="home__content-container">
            <div className="home__content">
              <h2 className="home__title">HOME</h2>
              <p className="home__text">
                <strong>Valorant</strong> é um jogo de tiro tático em primeira
                pessoa grátis para jogar, sendo desenvolvido e publicado pela a
                Riot Games. O jogo atualmente roda na Unreal Engine 4. O jogo
                foi anunciado no dia 15 de outubro de 2019, com o codenome
                "Project A", até que foi oficialmente revelado como Valorant em
                2 de março de 2020. 
                <br />
                Esse site foi criado no intuito de informar
                jogadores sobre os agentes, armas e mapas disponíveis no jogo. É
                um projeto pessoal e não tem vinculação com a empresa
                desenvolvedora do jogo. Se quiser se informar sobre algum dos
                conteúdos citados aqui, apenas clique no desejado na barra de
                tarefas e você será redirecionado para a página de informações.
              </p>
            </div>
            <div className="home__image-container">
              <img className="home__image" src={valorantLogo} alt="valorant" />
            </div>
          </div>
          <div className="home__trailer-container">
            <h2 className="home__title">TRAILER</h2>
            <iframe
              className="home__trailer"
              width="672"
              height="378"
              src="https://www.youtube.com/embed/h1Kp9x_ADZw?si=Wh1ll6I-5_Xzkoid"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
