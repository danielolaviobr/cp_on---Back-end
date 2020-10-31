import Cp from "../models/CpModel";

export default {
  render(cp: Cp) {
    return {
      text: cp.text,
      uid: cp.uid,
    };
  },
  renderMany(cps: Cp[]) {
    return cps.map((cp) => this.render(cp));
  },
};
