import LampadaIcon from "../GeneralPurpose/LampadaIcon";
import LupaIcon from "../GeneralPurpose/LupaIcon";
import CaniveteIcon from "../GeneralPurpose/CaniveteIcon";
import CheckedIcon from "../GeneralPurpose/CheckedIcon";
import SmileIcon from "../GeneralPurpose/SmileIcon";
import styled from "styled-components";
import { useState } from "react";

const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 88px;
  height: 102px;
  border-radius: 4px;
  border: solid 2px #2cc6d0;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2cc6d0;
  cursor: pointer;

  margin: ${(props) => props.theme.box_margin};
  //padding: ${(props) => props.theme.box_padding};

  ${(props) =>
    props.hoverOn &&
    `&:hover {
    color: #ffffff;
    background-color: #2cc6d0;
    svg g {
      fill: ${props.theme.fill === undefined ? "none" : props.theme.fill};
      stroke: #ffffff;
    }
  }`}

  ${(props) =>
    props.active &&
    `color: #ffffff;
    background-color: #2cc6d0;
    svg g {
      fill: ${props.theme.fill === undefined ? "none" : props.theme.fill};
      stroke: #ffffff;
    }`}

  svg {
    width: ${(props) => props.theme.svg_width};
    height: ${(props) => props.theme.svg_height};
    margin: ${(props) => props.theme.svg_margin};
    padding: ${(props) => props.theme.svg_padding};
  }

  .ElogioBox {
    width: 64px;
    height: 24px;
    margin: ${(props) => props.theme.span_margin};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.83px;
    text-align: center;
  }
`;

const theme = {
  lampada: {
    box_margin: "12px 11px 24px 0px",
    box_padding: "18px 12px",
    svg_width: "30px",
    svg_height: "36px",
    svg_margin: "0 17px 6px",
    svg_padding: "0",
    fill: "#ffffff",
    span_margin: "6px 0 0",
  },
  lupa: {
    box_margin: "12px 12px 24px 0px",
    box_padding: "20px 12px 18px",
    svg_width: "32px",
    svg_height: "32px",
    svg_margin: "0 16px 8px",
    svg_padding: "0",
    fill: "#ffffff",
    span_margin: "8px 0 0",
  },
  canivete: {
    box_margin: "12px 12px 24px 0px",
    box_padding: "18px 12px",
    svg_width: "38px",
    svg_height: "38px",
    svg_margin: "0 12px 4px 14px",
    svg_padding: "3.6px 2.9px 2.8px 2.4px",
    span_margin: "4px 0 0",
  },
  checkedSheet: {
    box_margin: "12px 12px 24px 0px",
    box_padding: "18px 12px",
    svg_width: "29.1px",
    svg_height: "36px",
    svg_margin: "0 17.9px 6px 17px",
    svg_padding: "3.2px 6.9px 0px",
    span_margin: "6px 0 0",
  },
  smileFace: {
    box_margin: "13px 0px 23px",
    box_padding: "18px 12px",
    svg_width: "34px",
    svg_height: "34px",
    svg_margin: "0 15px 8px",
    svg_padding: "0px 7.2px 0px 8.2px",
    span_margin: "8px 0 0",
  },
};

const boxes = [
  { theme: "lampada", msg: "Estimula a criatividade", icon: <LampadaIcon /> },
  { theme: "lupa", msg: "Estimula a curiosidade", icon: <LupaIcon /> },
  { theme: "canivete", msg: "Se adapta à necessidade", icon: <CaniveteIcon /> },
  { theme: "checkedSheet", msg: "Ótima didática", icon: <CheckedIcon /> },
  { theme: "smileFace", msg: "Gente boasíssima", icon: <SmileIcon /> },
];

function Boxes(props) {
  const [activeBox, setActiveBox] = useState(-1);
  const [hoverOn, setHoverOn] = useState(true);

  function handleClick(idx) {
    setActiveBox(idx);
    setHoverOn(false);
  }

  return (
    <BoxesWrapper>
      {boxes.map((box, idx) => {
        return (
          <Box
            hoverOn={hoverOn}
            active={idx === activeBox}
            theme={theme[box.theme]}
            onClick={() => {
              props.onClick(box.msg);
              handleClick(idx);
            }}
          >
            {box.icon}
            <span className="ElogioBox">{box.msg}</span>
          </Box>
        );
      })}
    </BoxesWrapper>
  );
}

export default Boxes;
