import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { loginReducer } from "./user/Login";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import signupSlice from "./user/signupSlice";
import storeReducer from '../state/product/titleSlice';
import categoryReducer from '../state/product/createCategorySlice';
import descReducer from '../state/product/createDescriptionSlice';
import priceReducer from '../state/product/createPriceSlice';
import  productSlice  from "./product/createProductSlice";
import  productsSlice  from "./product/allProductsSlice";
import deleteProductSlice from "./product/deleteProductSlice";
import productDetailsSlice  from "./product/singleProductSlice";
import createrentSlice from './rent/rentSlice';
import createBuySlice from './buy/newbuySlice';
import myproductssSlice  from "./product/myProductsSlice";
import myrentproductssSlice from "./product/myRentSlice";


const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  signup: signupSlice,
  userDetails: persistedReducer,
  title:storeReducer,
  category:categoryReducer,
  description:descReducer,
  price:priceReducer,
  product:productSlice,
  products:productsSlice,
  delete:deleteProductSlice,
  productDetails:productDetailsSlice,
  rent:createrentSlice,
  buy:createBuySlice,
  myProduct:myproductssSlice,
  myRent:myrentproductssSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);