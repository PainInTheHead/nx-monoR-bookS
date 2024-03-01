import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const userEmailState = (state: RootState) => state.user.user.email;

export const userState = (state: RootState) => state.user.user;
