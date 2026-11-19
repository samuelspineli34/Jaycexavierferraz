# Jayce Xavier Ferraz — site institucional

Site institucional estático, responsivo e single-page para Jayce Xavier Ferraz.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo com temas claro e escuro
- JavaScript puro, sem framework ou backend
- Deploy estático na Vercel

## Desenvolvimento local

Abra `index.html` no navegador ou execute um servidor estático na raiz do projeto:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Deploy na Vercel via GitHub

1. Envie o conteúdo deste projeto para o repositório GitHub.
2. Na Vercel, importe o repositório.
3. Configure o projeto como estático: Framework Preset `Other`, Build Command vazio e Output Directory `.`.
4. Faça o deploy. Os próximos `git push` na branch principal publicam automaticamente.

## Prévia de compartilhamento

A imagem Open Graph está em `assets/images/social-preview-v2.jpg` (1200 × 630 px). O HTML usa URL absoluta HTTPS para os metadados `og:image` e `twitter:image`. Ao publicar uma nova versão, o WhatsApp pode manter prévias antigas em cache por algum tempo; esta versão usa um nome de arquivo novo para solicitar uma imagem atualizada.

## Personalização

- Conteúdo: `index.html`
- Identidade visual e responsividade: `styles.css`
- Menu, tema e navegação: `script.js`
- Logo: `assets/brand-lockup.svg`
- Favicon: `assets/favicon.svg` e `assets/favicon-32.png`
- Imagens: `assets/images/`
