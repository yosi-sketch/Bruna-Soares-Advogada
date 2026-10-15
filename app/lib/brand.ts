// Dados institucionais e avaliações do material fornecido; sem integração ao vivo.
export const brand = {
  name: "Bruna Soares",
  businessName: "Bruna Soares — Advocacia e Consultoria Jurídica",
  phone: "(37) 99863-5592",
  phoneDigits: "5537998635592",
  address: "Rua Rafael Gonçalves Tomé, 118 — Centro, Piumhi — MG, 37925-000",
  location: "Piumhi · Minas Gerais",
  logo: "/bruna-soares-logo.png",
  portrait: "/bruna-soares-retrato.png",
  aboutImage: "/bruna-soares-sobre.png",
  googleReviewCount: 60,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/advbrunascalves/",
  instagramHandle: "@advbrunascalves",
};

// Trechos literais dos depoimentos enviados, com autoria preservada.
export const testimonials = [
  { name: "Luana Roberta 2", text: "A Bruna é uma excelente advogada! Além de muito profissional, é atenciosa e confiável.Sou grata por sua paciência e orientação jurídica, que me trouxe paz e segurança!" },
  { name: "Fabiana Teixeira Melo de Souza Alves", text: "Excelente profissional. Atenciosa e com explicações claras. Deixa o cliente a par de tudo o que está acontecendo no processo." },
  { name: "Elisa Teixeira", text: "Excelente profissionais, muito capacitadas e principalmente um olhar humano sobre os processos. Eu tirei muitas dúvidas, tive muita ajuda, por isso recomendo esse escritório." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Bruna! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dra. Bruna! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = "https://www.google.com/maps?cid=13549779888401519733";
