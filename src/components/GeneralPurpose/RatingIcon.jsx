import { useState } from "react";
import StarIcon from "./StarIcon";
import styled from "styled-components";

const StarIconWrapper = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  li {
    display: inline-block;
    transition: 0.2s;
    margin-left: 5px;

    &:hover {
      ${(props) => props.EditMode && "transform: scale(1.5);"}
    }
  }
`;

function RatingIcon(props) {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [EditMode, setEditMode] = useState(true);

  function handleHover(idx) {
    if (!props.lock) setHoverRating(idx);
  }

  function handleClick() {
    if (!props.lock) {
      setEditMode(!EditMode);
      setRating(EditMode ? hoverRating : 0);
    }
  }

  return (
    <StarIconWrapper EditMode={EditMode && !props.lock}>
      {[...Array(5)].map((x, i) => {
        return (
          <li
            onMouseOver={() => handleHover(i + 1)}
            onClick={handleClick}
            onMouseLeave={() => handleHover(0)}
          >
            <StarIcon
              filled={
                (i + 1 <= hoverRating && EditMode) ||
                (i + 1 <= rating && !EditMode)
              }
            />
          </li>
        );
      })}
    </StarIconWrapper>
  );
}

export default RatingIcon;
