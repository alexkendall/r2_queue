import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"

const selectSelf = (state: RootState) => state

export const getAccessTokenSelector = createSelector(selectSelf, (state) => state.auth.accessToken)
