import { StyledBookSlider } from '../PaginationBook';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import { updateCurrentPage } from '../../../store/slices/bookSlice';

interface PropsPagination {
  executeScroll: () => void
}



const Pagination: React.FC<PropsPagination> = ({executeScroll}) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.books.currentPage);
  const pagesTotal = useAppSelector((state) => state.books.totalPages);

  const upHandlerPage = async () => {
    if (currentPage < pagesTotal - 1) {
      dispatch(updateCurrentPage({ page: currentPage + 1 }));
      executeScroll()
    } else if (currentPage >= pagesTotal - 1) {
      dispatch(updateCurrentPage({ page: pagesTotal - 1 }));
      executeScroll()
    }
  };

  const downHandlerPage = async () => {
    if (currentPage > 0) {
      dispatch(updateCurrentPage({ page: currentPage - 1 }));
      executeScroll()
    } else if (currentPage <= 0) {
      dispatch(updateCurrentPage({ page: 0 }));
      executeScroll()
    }
  };

  const clickOnPageHandler = async (index: number) => {
    dispatch(updateCurrentPage({ page: index }));
    executeScroll()
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
