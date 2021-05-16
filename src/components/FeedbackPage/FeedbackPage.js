import BookImg from "../../resources/img/livro.png";
import "./FeedbackPage.css";
import RatingIcon from "../GeneralPurpose/RatingIcon";

function FeedbackPage() {
  return (
    <>
      <img src={BookImg} alt="Livro" />
      <div className="Como-foi-a-ajuda-do">
        <p>Como foi a ajuda do tutor?</p>
      </div>

      <div className="Avaliacao">
        <button className="Elogiar" type="button">
          <span>Elogiar</span>
        </button>

        <RatingIcon />

        <div>
          <span className="Pular">Pular</span>
          <button className="Confirmar" type="button">
            <span>Confirmar</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedbackPage;
