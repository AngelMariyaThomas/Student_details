import {configureStore} from "@reduxjs/toolkit"

import DetailsSlice from "./DetailsSlice"

const Store = configureStore({
  reducer:{
    Details:DetailsSlice
  }
})
export default Store