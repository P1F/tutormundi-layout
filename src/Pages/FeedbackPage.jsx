import BookImg from "../resources/img/livro.png";
import "./FeedbackPage.css";
import RatingIcon from "../components/GeneralPurpose/RatingIcon";
import ExtendedFeedback from "../components/ExtendedFeedback";
import { useState } from "react";

function FeedbackPage() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [elogio, setElogio] = useState("");
  const [recado, setRecado] = useState("");
  const [rating, setRating] = useState(0);

  function handleElogiarClick() {
    if (!showFeedback) setShowFeedback(true);
  }

  function handleBoxClick(msg) {
    setElogio(msg);
  }

  return (
    <>
      {!showFeedback && <img src={BookImg} alt="Livro" />}
      <div className="Como-foi-a-ajuda-do">
        <p>Como foi a ajuda do tutor?</p>
      </div>

      <RatingIcon lock={showFeedback} />

      {showFeedback && <ExtendedFeedback onBoxClick={handleBoxClick} />}

      <div className="Avaliacao">
        {!showFeedback && (
          <button
            className="Elogiar"
            onClick={handleElogiarClick}
            type="button"
          >
            <span>Elogiar</span>
          </button>
        )}

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
