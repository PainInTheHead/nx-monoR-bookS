import { useRef } from "react";

const ProfileAvatar = () => {
  const filePicker = useRef<any>(null);
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  const handlePick = () => {
    filePicker.current?.click();
  };


  return (
    <>
      <div className="profile-images">
        <img
          className="Ava"
          src={"/profilePage/noneChel.png"}
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK4YnjXXPv-qE495K6XT1L5bSxoFkWrz06Q&usqp=CAU"
          width={305}
          height={305}
          alt="Yours Chel?"
        />
        <button className="btn-changeImage" onClick={handlePick}>
          <img
            src="/profilePage/button_photo.svg"
            width={48}
            height={48}
            alt="Yours Chel?"
          />
        </button>
      </div>
      <input
        className="hidden"
        type="file"
        ref={filePicker}
        onChange={(e) => handleChangeFile(e)}
      />
    </>
  );
};

export default ProfileAvatar;
