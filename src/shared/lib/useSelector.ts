import { useSelector as s } from "react-redux";

export const useSelector = s.withTypes<StoreType>();
