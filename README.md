# Jayce Xavier Ferraz — Site institucional

Site institucional responsivo para apresentação profissional de Jayce Xavier Ferraz, fisioterapeuta pélvica e enfermeira.

## Tecnologias

- HTML5, CSS3 e JavaScript puro
- Imagens locais em WebP, otimizadas para web
- Layout responsivo para desktop, tablet e celular
- Sem dependências de build ou instalação local
- Deploy automatizado no Vercel por GitHub Actions

## Executar localmente

Como é um site estático, basta abrir `index.html` no navegador. Para testar com servidor local, na pasta do projeto execute:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicar no GitHub

1. Crie um repositório chamado **Jaycexavierferraz** no GitHub.
2. Extraia o conteúdo deste ZIP.
3. Abra o terminal dentro da pasta `Jaycexavierferraz` e execute:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/Jaycexavierferraz.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário do GitHub.

## Configurar Vercel + GitHub Actions

### 1. Criar o projeto na Vercel

1. Entre em https://vercel.com e crie/import o projeto.
2. Selecione o repositório `Jaycexavierferraz`.
3. Em **Project Settings → General**, confira o nome do projeto como `Jaycexavierferraz`.
4. Em **Build & Development Settings**, use:
   - Framework Preset: `Other`
   - Build Command: deixe desativado/vazio
   - Output Directory: `.` (raiz do projeto)
   - Install Command: deixe desativado/vazio
5. Faça o primeiro deploy pela própria Vercel para inicializar o projeto.

### 2. Obter os dados de integração

No painel da Vercel:

- **VERCEL_TOKEN**: crie um token em https://vercel.com/account/tokens.
- **VERCEL_ORG_ID**: disponível em **Settings → General** da equipe/conta, ou no arquivo `.vercel/project.json` após vincular o projeto localmente.
- **VERCEL_PROJECT_ID**: disponível em **Project Settings → General**, ou no arquivo `.vercel/project.json`.

### 3. Cadastrar secrets no GitHub

No repositório `Jaycexavierferraz`, acesse:

**Settings → Secrets and variables → Actions → New repository secret**

Cadastre estes três secrets, exatamente com estes nomes:

| Secret | Valor |
|---|---|
| `VERCEL_TOKEN` | Token criado na Vercel |
| `VERCEL_ORG_ID` | ID da conta/equipe Vercel |
| `VERCEL_PROJECT_ID` | ID do projeto Vercel |

### 4. Publicar

Depois de cadastrar os secrets, cada `push` na branch `main` executará o workflow em `.github/workflows/deploy.yml` e publicará a versão de produção na Vercel.

Você também pode executar manualmente em **GitHub → Actions → Deploy to Vercel → Run workflow**.

## Conteúdo e personalização

- `index.html`: textos, seções, links e informações profissionais.
- `styles.css`: cores, tipografia, espaçamentos e responsividade.
- `script.js`: menu mobile e ano automático do rodapé.
- `assets/images/`: fotografias selecionadas dos arquivos fornecidos e convertidas para WebP.
- `assets/favicon.svg`: ícone do site.

### Contatos configurados

- WhatsApp: +55 (75) 98883-4854
- E-mail: ferraz.jayce@gmail.com
- Instagram: [@fisio_jayce_ferraz](https://www.instagram.com/fisio_jayce_ferraz/)
- Localização divulgada: Paulo Afonso — Bahia
- Registro informado: CREFITO 408734-F

O botão flutuante e os botões de agendamento abrem uma conversa no WhatsApp com a mensagem inicial fornecida.

## Antes de divulgar

Revise com a profissional os textos e a correspondência dos serviços com sua habilitação e prática atual. O material de origem não informava endereço completo, convênios, modalidades de pagamento ou especialização formal específica em fisioterapia pélvica; por isso, esses dados não foram inventados nem publicados. A experiência em Enfermagem foi apresentada como iniciada em julho de 2019, considerando a orientação recebida para considerar essa informação válida.
