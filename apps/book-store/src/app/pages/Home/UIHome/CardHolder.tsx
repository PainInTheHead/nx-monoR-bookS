import { Card } from "@book-store/BookStoreLibrary";
import { dataAboutBooks } from "../utils/Data";

const CardHolder = () => {
  return (
    <div className="catalog-content">
      {dataAboutBooks.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
    </div>
  );
};

export default CardHolder;
