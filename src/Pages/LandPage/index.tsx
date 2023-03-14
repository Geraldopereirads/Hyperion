import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { SwiperComp } from "../../components/SwiperSlider";
import { StyledMainPage } from "./style";

export const LandPage = () => {
  return (
    <StyledMainPage>
      <div>
        <Header />
      </div>
      <section>
        <SwiperComp />
        <CardList />
      </section>
    </StyledMainPage>
  );
};
