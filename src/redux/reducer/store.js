// import { createStore } from "redux";
// import rootReducers from "./reducer"
// // Example import statement in store.js



// const store = createStore(rootReducers);

// export default store;
import { createStore } from "redux";
// import handleCart from "./handleCart";
import rootReducers from "./index";

const store = createStore(rootReducers);

export default store;
