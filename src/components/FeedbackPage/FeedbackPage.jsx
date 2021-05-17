import BookImg from "../../resources/img/livro.png";
import "./FeedbackPage.css";
import RatingIcon from "../GeneralPurpose/RatingIcon";
import ExtendedFeedback from "./ExtendedFeedback";
import { useState } from "react";

function FeedbackPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  function handleElogiarClick() {
    if (!showFeedback) setShowFeedback(true);
  }

  return (
    <>
      {!showFeedback && <img src={BookImg} alt="Livro" />}
      <div className="Como-foi-a-ajuda-do">
        <p>Como foi a ajuda do tutor?</p>
      </div>

      {/* Cuidados para tomar:
              1.  Quando estiver na escolha da avaliação,
                  não permitir que os botões de confirmar
                  e pular sejam selecionados e que seus
                  efeitos sejam desabilitados
        */}

      <RatingIcon lock={showFeedback} />

      {showFeedback && <ExtendedFeedback />}

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
