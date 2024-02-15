import productList from "./productList.mjs";
import { getParam } from "./utils.mjs";

const param = getParam("product")


productList(".product-list", param);