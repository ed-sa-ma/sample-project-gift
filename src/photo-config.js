//
// Photos from Jeremy Zero in unsplash.com and pixabay.com:
// 1. https://unsplash.com/@jeremy0 (personal site: https://jeremy0.com/)
// 2. https://pixabay.com/images/search/new%20caledonia/
//
export default [
  {
    name: "1.jpg",
    text: "This was a presentation with family pictures...",
  },
  {
    name: "2.jpg",
    text: "...with some messages for my brother",
  },
  {
    name: "3.jpg",
  },
  {
    name: "4.jpg",
    text: "Now these are photos of New Caledonia instead...",
  },
  {
    name: "5.jpg",
    text: "...where I currently live",
  },
  {
    name: "6.jpg",
  },
  {
    name: "7.jpg",
    text: `Kudos to &thinsp;${generateLink(
      "Jeremy Zero",
      "https://unsplash.com/@jeremy0"
    )}&thinsp; for most of these photos`,
  },
  {
    name: "8.jpg",
    text: `Music from &thinsp;${generateLink(
      "free-stock-music",
      "https://www.free-stock-music.com"
    )}...`,
  },
  {
    name: "9.jpg",
    text: `...songs' authors are &thinsp;${generateLink(
      "here",
      "https://soundcloud.com/ghostrifter-official"
    )},&thinsp;${generateLink(
      "here",
      "https://purrplecat.com"
    )}&thinsp; and &thinsp;${generateLink(
      "here",
      "https://soundcloud.com/sakurahertz"
    )}`,
  },
  {
    name: "10.jpg",
  },
  {
    name: "11.jpg",
    text: `Hope you liked it! by &thinsp;${generateLink(
      "@ed-sa-ma",
      "https://twitter.com/ed_sa_ma"
    )}`,
  },
];

function generateLink(text, url) {
  return `<a href="${url}" target="_blank" rel="noopener noreferer">${text}</a>`;
}
