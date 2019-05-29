import { promisify } from "util";

const products = [
  {
    name: "produto 1"
  },
  {
    name: "produto 2"
  }
];

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  async getAll(page, pageSize) {
    await timeout(2000);
    return products.slice((page - 1) * pageSize, pageSize);
  }
};
