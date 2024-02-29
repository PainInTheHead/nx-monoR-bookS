import { StyledBookSlider } from "../PaginationBook";
import { useState } from "react";




const Pagination = () => {






  const pagesTotal = 5;
  const [curentPage, setCurentPage] = useState(1)
  return (
    <StyledBookSlider>
      <button className="btn-left btn" onClick={() => setCurentPage(curentPage-1)}>
        <img src="/pagination/arrow.svg" width={24} height={24} alt="back" />
      </button>

      {[...Array(pagesTotal)].map((_, index) => {
        if (index === curentPage) {

        return  (<button className="btn" key={index}>
            <img
              src={`/pagination/Dots.svg`}
              width={20}
              height={20}
              alt="back"
            />
          </button>)
        }

        return (
          <button className="btn" key={index}>
            <img
              src="/pagination/DotsNone.svg"
              width={20}
              height={20}
              alt="back"
            />
          </button>
        );
      })}

      <button className="btn-right btn" onClick={() => setCurentPage(curentPage+1)}>
        <img src="/pagination/arrow.svg" width={24} height={24} alt="push" />
      </button>
    </StyledBookSlider>
  );
};

export default Pagination;
