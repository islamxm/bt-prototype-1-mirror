import { useSelector as s, TypedUseSelectorHook } from "react-redux";

export const useSelector:TypedUseSelectorHook<StoreType> = s