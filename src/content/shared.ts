import type { FooterContent, TrustBar } from "./types";

export const trustBar: TrustBar = {
  title: "[TODO: titolo breve della trust bar, senza numeri non verificati]",
  items: [
    { label: "[TODO: primo elemento di fiducia verificabile dal sito Pillar]" },
    { label: "[TODO: secondo elemento di fiducia verificabile dal sito Pillar]" },
    { label: "[TODO: terzo elemento di fiducia verificabile dal sito Pillar]" },
  ],
};

export const footer: FooterContent = {
  disclaimer: "Concept non ufficiale a scopo di portfolio. Non affiliato a Pillar Srl.",
  note: "[TODO: nota breve sull'autore del concept e sullo scopo del progetto]",
  links: [
    {
      label: "[TODO: etichetta del link al sito ufficiale o al portfolio]",
      href: "#",
    },
  ],
};
