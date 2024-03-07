import { useRef } from 'react';
import { useState } from 'react';
import axioS from '../../../api/axios.config';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import { actionNewAvatar } from '../../../store/slices/userSlice';

const ProfileAvatar = () => {
  const avatarFile = useAppSelector(state => state.user.user.avatar)
  const dispatch = useAppDispatch();
  const filePicker = useRef<any>(null);

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    dispatch(actionNewAvatar(formData));
  };

  const handlePick = () => {
    filePicker.current?.click();
  };

  return (
    <>
      <div className="profile-images">
        <img
          className="Ava"
          src={avatarFile ? `http://localhost:3005/uploads/${avatarFile}` :'/profilePage/noneChel.png'}
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
