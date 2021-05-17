import LampadaIcon from "../GeneralPurpose/LampadaIcon";
import LupaIcon from "../GeneralPurpose/LupaIcon";
import CaniveteIcon from "../GeneralPurpose/CaniveteIcon";
import CheckedIcon from "../GeneralPurpose/CheckedIcon";
import SmileIcon from "../GeneralPurpose/SmileIcon";
import styled from "styled-components";

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

  margin: ${(props) => props.theme.box_margin};
  padding: ${(props) => props.theme.box_padding};

  &:hover {
    color: #ffffff;
    background-color: #2cc6d0;
    svg g {
      fill: ${(props) =>
        props.theme["fill"] === undefined ? "none" : props.theme.fill};
      stroke: #ffffff;
    }
  }

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
    box_margin: "12px 11px 24px 356px",
    box_padding: "18px 12px",
    svg_width: "30px",
    svg_height: "36px",
    svg_margin: "0 17px 6px",
    svg_padding: "0",
    fill: "#ffffff",
    span_margin: "6px 0 0",
  },
  lupa: {
    box_margin: "12px 12px 24px",
    box_padding: "20px 12px 18px",
    svg_width: "32px",
    svg_height: "32px",
    svg_margin: "0 16px 8px",
    svg_padding: "0",
    fill: "#ffffff",
    span_margin: "8px 0 0",
  },
  canivete: {
    box_margin: "12px 12px 24px",
    box_padding: "18px 12px",
    svg_width: "38px",
    svg_height: "38px",
    svg_margin: "0 12px 4px 14px",
    svg_padding: "3.6px 2.9px 2.8px 2.4px",
    span_margin: "4px 0 0",
  },
  checkedSheet: {
    box_margin: "12px 12px 24px",
    box_padding: "18px 12px",
    svg_width: "29.1px",
    svg_height: "36px",
    svg_margin: "0 17.9px 6px 17px",
    svg_padding: "13.8px 6.9px 12.5px",
    span_margin: "6px 0 0",
  },
  smileFace: {
    box_margin: "13px 356px 23px 9px",
    box_padding: "18px 12px",
    svg_width: "34px",
    svg_height: "34px",
    svg_margin: "0 15px 8px",
    svg_padding: "9.3px 7.2px 8.2px 8.2px",
    span_margin: "8px 0 0",
  },
};

function Boxes() {
  return (
    <BoxesWrapper>
      <Box theme={theme.lampada}>
        <LampadaIcon />
        <span className="ElogioBox">Estimula a criatividade</span>
      </Box>
      <Box theme={theme.lupa}>
        <LupaIcon />
        <span className="ElogioBox">Estimula a curiosidade</span>
      </Box>
      <Box theme={theme.canivete}>
        <CaniveteIcon />
        <span className="ElogioBox">Se adapta à necessidade</span>
      </Box>
      <Box theme={theme.checkedSheet}>
        <CheckedIcon />
        <span className="ElogioBox">Ótima didática</span>
      </Box>
      <Box theme={theme.smileFace}>
        <SmileIcon />
        <span className="ElogioBox">Gente boasíssima</span>
      </Box>
    </BoxesWrapper>
  );
}

export default Boxes;
