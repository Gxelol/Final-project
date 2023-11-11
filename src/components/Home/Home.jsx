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
                <strong>Valorant</strong> is a free-to-play
                first-person tactical shooter game developed and published by
                Riot Games. The game currently runs on the Unreal Engine 4. It
                was announced on October 15, 2019, under the codename "Project
                A," until it was officially revealed as Valorant on March 2,
                2020.
                <br />
                This website was created with the intention of informing players
                about the agents, weapons, and maps available in the game. It is
                a personal project and is not affiliated with the game's
                developer company. If you wish to find information about any of
                the content mentioned here, simply click on the desired item in
                the taskbar, and you will be redirected to the information page.
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
