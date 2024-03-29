import ekaImage1 from "@/assets/images/projects/eka/eka1.png"
import ekaImage2 from "@/assets/images/projects/eka/eka2.png"
import ekaImage3 from "@/assets/images/projects/eka/eka3.png"

import snapnoteImage1 from "@/assets/images/projects/snapnote/snapnote1.png"
import snapnoteImage2 from "@/assets/images/projects/snapnote/snapnote2.png"

export default [
  {
    projectName: "SnapNote",
    typeOfProject: "Extension",
    description:
      "Open-source browser extension designed for fast note-taking during web browsing. Featuring a Notion-like editor powered by BlockNote, it provides a modern interface for rapid and versatile note creation. The extension also supports downloading notes in Markdown, as well as convenient text copying in both regular text and Markdown formats.",
    madeWith: "made with crxjs, react, typescript, redux, tailwind css and vite",
    url: "https://snapnote-demo.vercel.app/",
    gitRepo: "https://github.com/fred-gutierrez/snapnote",
    chromeUrl:
      "https://chromewebstore.google.com/detail/snapnote/gblgefagjalfolidiedaepbkacajaeng",
    firefoxUrl: "https://addons.mozilla.org/firefox/addon/snapnote/",
    images: [
      snapnoteImage1,
      snapnoteImage2
    ]
  },
  {
    projectName: "Eka Bienes Raices",
    typeOfProject: "Website",
    description:
      "A Realtor's property page that involves a robust system designed to automatically fetch, filter, and display the Realtor's properties directly from her Facebook posts. Notably, this system operates seamlessly without requiring any manual input from the Realtor.",
    madeWith:
      "made with next.js, react, typescript, tailwind css, vite, node.js, gsap, supabase, sql and postgresql",
    url: "https://ekabienesraices.vercel.app/",
    gitRepo: "https://github.com/fred-gutierrez/eka-bienes-raices",
    images: [
      ekaImage1,
      ekaImage2,
      ekaImage3
    ]
  },
];
