import { useState } from "react";
import StarIcon from "./StarIcon";
import styled from "styled-components";

const StarIconWrapper = styled.ul`
    padding:0px;
    margin:0px;
    list-style:none;

    li {
      display: inline-block;
    }
`;

function RatingIcon(props) {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [edit, setEdit] = useState(true);

  function handleHoverRating(idx) {
    setHoverRating(idx);
  }

  function handleRating(){
    setEdit(!edit);
    setRating(hoverRating);
  }

  return (
    <StarIconWrapper>
      {[...Array(5)].map((x, i) => {
        return (
          <li onMouseOver={() => handleHoverRating(i+1)}
              onClick={handleRating}
              onMouseLeave={() => handleHoverRating(0)} >
            <StarIcon filled={(i+1 <= hoverRating && edit) || (i+1 <= rating && !edit)}/>
          </li>
        );
      })}
    </StarIconWrapper>
  );
}

export default RatingIcon;
