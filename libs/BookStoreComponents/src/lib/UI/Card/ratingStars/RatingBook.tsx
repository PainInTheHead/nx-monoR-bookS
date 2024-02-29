import Rating from "@mui/material/Rating";


const RatingBook:React.FC<{value:number}> = ({value}) => {
  return (
    <div className="stars">
      <Rating
        name="read-only "
        value={value}
        readOnly
        sx={{ width: "100%", justifyContent: "space-between" }}
        size="large"
      />
      <span className="rateNumber">{value}.0</span>
    </div>
  );
};

export default RatingBook;
