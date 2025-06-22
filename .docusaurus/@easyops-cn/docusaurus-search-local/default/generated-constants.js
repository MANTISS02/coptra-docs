import lunr from "C:\\Users\\erohi\\OneDrive\\Desktop\\practic\\coptra-docs\\node_modules\\lunr\\lunr.js";
require("C:\\Users\\erohi\\OneDrive\\Desktop\\practic\\coptra-docs\\node_modules\\lunr-languages\\lunr.stemmer.support.js")(lunr);
require("C:\\Users\\erohi\\OneDrive\\Desktop\\practic\\coptra-docs\\node_modules\\lunr-languages\\lunr.ru.js")(lunr);
require("C:\\Users\\erohi\\OneDrive\\Desktop\\practic\\coptra-docs\\node_modules\\lunr-languages\\lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","ru"];
export const searchIndexUrl = "search-index{dir}.json?_=8d2fb526";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;