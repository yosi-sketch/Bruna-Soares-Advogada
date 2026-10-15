# Bruna Soares — Advocacia e Consultoria Jurídica

Site institucional em português da Dra. Bruna Soares, advogada familiarista em Piumhi, MG. Inclui seis temas de Direito de Família com detalhes, apresentação profissional, avaliações, FAQ e contato.

## Desenvolvimento

Instalar dependências com npm install. Iniciar com npm run dev -- --port 3017. Prévia em http://localhost:3017.

Next.js 16.3.5, React 19, Tailwind CSS 4, Framer Motion e Lucide. Consulte node_modules/next/dist/docs antes de alterar APIs do Next, conforme AGENTS.md.

Verificações: npm run lint -- app; node node_modules/typescript/bin/tsc --noEmit; npm run build.

## Marca e conteúdo

Paleta amostrada do logo: rosé #f0b090, cobre #a06040, marfim #fff0e0 e marrom #301000. Neutros derivados para contraste. Títulos Cormorant Garamond e leitura Montserrat, servidos por next/font/google. Tema Tailwind em app/globals.css.

Dados e links em app/lib/brand.ts. Página e diálogos em app/page.tsx. Metadados e fontes em app/layout.tsx. CTA compartilhado em app/components/GlowingButton.tsx.

- WhatsApp e telefone: (37) 99863-5592 / 5537998635592.
- Endereço: Rua Rafael Gonçalves Tomé, 118 — Centro, Piumhi — MG, 37925-000.
- Instagram: https://www.instagram.com/advbrunascalves/.
- Google: nota 5,0 e 60 avaliações do material enviado, sem atualização ao vivo; CID 13549779888401519733.
- Serviços: divórcio, guarda e convivência, pensão alimentícia, união estável, partilha de bens e consultoria em Direito de Família.
- Avaliações: trechos literais de Luana Roberta 2, Fabiana Teixeira Melo de Souza Alves e Elisa Teixeira.

E-mail, horários, número OAB e domínio não foram informados. Configurar NEXT_PUBLIC_SITE_URL com o domínio real para habilitar imagens sociais absolutas.

## Assets

| Arquivo | Dimensões | Uso |
| --- | --- | --- |
| public/bruna-soares-logo.png | 1998 × 787 | Cabeçalho, rodapé e metadados |
| public/bruna-soares-retrato.png | 730 × 837 | Retrato principal |
| public/bruna-soares-sobre.png | 651 × 844 | Apresentação profissional |

Cópias binárias integrais dos anexos, com proveniência e SHA-256 em .impeccable/asset-origins.json. Otimização em tempo de exibição por next/image, sem alteração dos originais.

## Documentação

PRODUCT.md reúne fatos e limites. DESIGN.md e .impeccable/design.json registram o sistema visual. .impeccable/bruna-soares-direction.md registra a direção aplicada. Capturas e evidências de validação em .impeccable/review/ são locais, fora do versionamento.
