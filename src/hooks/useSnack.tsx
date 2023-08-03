import { useContext } from "react";
import { SnackContext } from "../App";

export function useSnack(){
  return useContext(SnackContext)
}
