import { Home } from "../types/home";
import { homepic } from "../mocks/gethome";

class Homes {
  async get(): Promise<Home[]> {
    console.log("loading home");
    const value: Home[] = await new Promise((resolve) => {
      setTimeout(() => resolve(homepic), 3000);
    });
    return value;
  }
}

export default new Homes();