import { useState } from "react";
import Boxes from "./Boxes";
import "./ExtendedFeedback.css";

function ExtendedFeedback(props) {
  return (
    <div className="ExtendedFeedback">
      <div className="Escolha-elogio">
        <span className="Envie-um-elogio">Envie um elogio</span>
        <Boxes />
      </div>
      <div className="Recado">
        <span className="Deixe-um-recado">Deixe um recado</span>
        <div className="CommentBox">
          <span>
            Tutor muito atencioso fez tudo que eu queria uma delicia ele muito
            bom mesmo recomenndo ta de parabens o cara fez o pasoso a psso
            direitinho nossa sinhora que cara foda Tutor muito atencioso fez
            tudo que eu queria uma delicia ele muito bom mesmo recomenndo ta de
            parabens o cara fez o pasoso a psso direitinho nossa sinhora que
            cara foda Tutor muito atencioso fez tudo que eu queria uma delicia
            ele muito bom mesmo recomenndo ta de parabens o cara fez o pasoso a
            psso direitinho nossa sinhora que cara foda Tutor muito atencioso
            fez tudo que eu queria uma delicia ele muito bom mesmo recomenndo ta
            de parabens o cara fez o pasoso a psso direitinho nossa sinhora que
            cara foda
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExtendedFeedback;
