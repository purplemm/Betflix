import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


const gnbIsActive = atom<string>({
  key: "gnbIsActive",
  default: "Home",
  effects_UNSTABLE: [persistAtom]
});

export { gnbIsActive };

