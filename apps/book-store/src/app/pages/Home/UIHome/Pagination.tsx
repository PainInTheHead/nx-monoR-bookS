import { StyledBookSlider } from '../PaginationBook';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import { updateCurrentPage } from '../../../store/slices/bookSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();
  // const [curentPage, setCurentPage] = useState(0);
  // const pagesTotal = 2;
  // useAppSelector((state) => state.books.totalPages);
  const currentPage = useAppSelector((state) => state.books.currentPage);
  const pagesTotal = useAppSelector((state) => state.books.totalPages);

  const upHandlerPage = async () => {
    if (currentPage < pagesTotal - 1) {
      dispatch(updateCurrentPage({ page: currentPage + 1 }));
      // setCurentPage(curentPage + 1);
    } else if (currentPage >= pagesTotal - 1) {
      // setCurentPage(pagesTotal - 1);
      dispatch(updateCurrentPage({ page: pagesTotal - 1 }));
    }
  };

  const downHandlerPage = async () => {
    if (currentPage > 0) {
      // setCurentPage(curentPage - 1);
      dispatch(updateCurrentPage({ page: currentPage - 1 }));
    } else if (currentPage <= 0) {
      dispatch(updateCurrentPage({ page: 0 }));

      // setCurentPage(0);
    }
  };

  const clickOnPageHandler = (index: number) => {
    // setCurentPage(index);
    dispatch(updateCurrentPage({ page: index }));
  };

  return (
    <StyledBookSlider>
      {pagesTotal === 0 || !pagesTotal ? (
        <div>Nothig in book store</div>
      ) : (
        <>
          <button className="btn-left btn" onClick={downHandlerPage}>
            <img
              src="/pagination/arrow.svg"
              width={24}
              height={24}
              alt="back"
            />
          </button>

          {[...Array(pagesTotal)].map((_, index) => {
            if (index === currentPage) {
              return (
                <button className="btn" key={index}>
                  <img
                    src={`/pagination/Dots.svg`}
                    width={20}
                    height={20}
                    alt="back"
                  />
                </button>
              );
            }

            return (
              <button
                onClick={() => clickOnPageHandler(index)}
                className="btn"
                key={index}
              >
                <img
                  src="/pagination/DotsNone.svg"
                  width={20}
                  height={20}
                  alt="back"
                />
              </button>
            );
          })}

          <button className="btn-right btn" onClick={upHandlerPage}>
            <img
              src="/pagination/arrow.svg"
              width={24}
              height={24}
              alt="push"
            />
          </button>
        </>
      )}
    </StyledBookSlider>
  );
};

export default Pagination;
