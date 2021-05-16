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

      {/* Cuidados para tomar:
              1.  Tirar efeitos do elogiar?
              2.  Quando estiver na escolha da avaliação,
                  não permitir que os botões de confirmar
                  e pular sejam selecionados e que seus
                  efeitos sejam desabilitados
              3.  Problema do top no App
        */}

      <RatingIcon />

      <div className="Avaliacao">
        <button className="Elogiar" type="button">
          <span>Elogiar</span>
        </button>
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
