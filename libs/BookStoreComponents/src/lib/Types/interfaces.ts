import { OptionsDrop } from "./types"


export interface handleProprsForDrop {
    handleChangeDropDownActive: (optionsDrop: keyof OptionsDrop) => void,
    activeDrop: OptionsDrop
  }