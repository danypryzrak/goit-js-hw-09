function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire4c75=r);var i=r("7Y9D8");const l=document.querySelector("form");function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function u({position:t,delay:n}){e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}function f({position:t,delay:n}){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}l.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.currentTarget),n={};for(const[e,o]of t.entries())n[e]=Number(o);let{amount:o,step:r,delay:i}=n;for(let e=1;e<=o;e++)i+=r,s(e,i).then(f).catch(u),l.reset()}));
//# sourceMappingURL=03-promises.4fc2dd91.js.map
