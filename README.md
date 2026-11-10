# Do Zero ao Viral

Página de vendas em React, Vite e Tailwind CSS, com execução local em Node.js/Express e configuração pronta para importar na Vercel.

## Compra

Todos os botões de compra abrem diretamente o checkout oficial:

https://pay.cakto.com.br/37y6pfg_1307697

O site não coleta dados de pagamento, não processa cartão e não usa chave de API da Cakto. O link está centralizado em `shared/offer.js`.

## Desenvolvimento local

Node.js 22.12 ou superior.

```sh
npm ci
npm run dev
```

Frontend: http://127.0.0.1:5173. Backend: http://127.0.0.1:3001.

Para servir a versão compilada:

```sh
npm run build
npm start
```

## Importar na Vercel

1. Importe este repositório no painel da Vercel.
2. Mantenha **Root Directory** na raiz do repositório.
3. O arquivo `vercel.json` configura `npm ci`, `npm run build` e a saída `frontend/dist`.
4. A configuração pública do site usa a função `api/config.js`; a Vercel não precisa executar o servidor Express local.
5. Não é necessário cadastrar credenciais da Cakto para redirecionar ao checkout.

Opcionais: `SELLER_NAME`, `SELLER_DOCUMENT`, `SUPPORT_EMAIL` e `REFERENCE_PRICE_CONFIRMED` podem ser definidos nas variáveis de ambiente do projeto.

## Anúncio

Salve o vídeo real em `frontend/public/media/anuncio.mp4`. Na Vercel, defina `AD_VIDEO_ENABLED=true` e faça um novo deploy. Na execução local, o arquivo é detectado automaticamente após compilar e reiniciar o servidor.

## Verificações

```sh
npm test
npm run build
```

O contador de visita usa armazenamento local e continua após recarregar a página. O preço anunciado permanece após zerar. Prints são exibidos como registros compartilhados pelo produtor, sem promessa de renda.

Arquivos privados `.env`, referências do produto, capturas de revisão, dependências e arquivos compilados não são enviados ao Git.
