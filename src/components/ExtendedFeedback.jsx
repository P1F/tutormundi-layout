import Boxes from "./Boxes";
import "./ExtendedFeedback.css";

function ExtendedFeedback(props) {
  return (
    <div className="ExtendedFeedback">
      <div className="Escolha-elogio">
        <span className="Envie-um-elogio">Envie um elogio</span>
        <Boxes onClick={props.onBoxClick} />
      </div>
      <div className="Recado">
        <span className="Deixe-um-recado">Deixe um recado</span>
        <div className="CommentBox">
          <textarea name="comment-area" rows="5" maxLength={230} />
        </div>
      </div>
    </div>
  );
}

export default ExtendedFeedback;
