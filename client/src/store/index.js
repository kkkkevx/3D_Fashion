import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#a5e398",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./cat.png",
    fullDecal: "./cat.png",
});

export default state;