import { Header } from "../../components/Header";
import { HomeStyled, About, HomeStart, Hero, Overlay, WaveBG } from "./style";
import Image from "../../assets/img/wave.png";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Overlay />
      <HomeStart>
        <Hero>
          <h1>遊戯</h1>
          <span>O seu universo de games</span>
        </Hero>
      </HomeStart>
      <About>
        <h2>Hyperion - Sobre</h2>
        <span>
          Site criado para aprensentar o nosso projeto da Kenzie Academy
        </span>
        <h2>Hyperion - Integrantes</h2>
        <ul>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/107319103?v=4"
              alt=""
            />
            <span>Vitor Hugo</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/vitorhugorm/">Linkedin</a>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/110185110?v=4"
              alt=""
            />
            <span>Geraldo Pereira</span>
            <a href="https://github.com/Geraldopereirads">Github</a>
            <a href="https://www.linkedin.com/in/geraldo-pereira/">Linkedin</a>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/114514318?v=4"
              alt=""
            />
            <span>Rafhael Cristian</span>
            <a href="https://github.com/Rafhaelcristian">Github</a>
            <a href="https://www.linkedin.com/in/rafhael-cristian-alc%C3%A2ntara-de-cunha-18629b251/">
              Linkedin
            </a>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/103015314?v=4"
              alt=""
            />
            <span>Lucas Ribeiro</span>
            <a href="https://github.com/LuckDev22">Github</a>
            <a href="https://www.linkedin.com/in/lucas-ribeiro-1ba28b229/">
              Linkedin
            </a>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/103394500?v=4"
              alt=""
            />
            <span>Mateus Carius</span>
            <a href="https://github.com/MattCari">Github</a>
            <a href="https://www.linkedin.com/in/mateus-carius-604033148/">
              Linkedin
            </a>
          </li>
        </ul>
        <h2>ありがとう</h2>
        <span>“Arigathanks” :P</span>
        <WaveBG src={Image} alt="wave Image" />
      </About>
    </HomeStyled>
  );
};
