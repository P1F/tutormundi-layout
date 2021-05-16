import StarFilled from "../../resources/img/estrelay.svg";
import StarEmpty from "../../resources/img/estrelaw.svg";
import styled from "styled-components";

const ImgWrapper = styled.div`
  img {
    width: 31px;
    height: 30px;
  }
`;

function StarIcon(props) {
  const filledStar = <img src={StarFilled} alt="Estrela Cheia" />;
  const emptyStar = <img src={StarEmpty} alt="Estrela Vazia" />;

  return (
    <ImgWrapper>
      {props.filled ? filledStar : emptyStar}
    </ImgWrapper>
  );
}

export default StarIcon;
