import Rating from '@mui/material/Rating';

const RatingBook: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="stars">
      <Rating
        name="read-only"
        value={value}
        readOnly
        sx={{ width: '100%', justifyContent: 'space-between' }}
        size="large"
        icon={<img src="/bookDetail/Group2.png" alt="" />}
        emptyIcon={<img src="/bookDetail/emptyStar.png" alt="" />}
      />
      <span className="rateNumber">
        {Number.isInteger(value) ? `${value}.0` : value}
      </span>
    </div>
  );
};

export default RatingBook;
