# Do Zero ao Viral

Projeto único em React + Vite + Tailwind, pronto para importar na Vercel pela raiz. Não há duas aplicações ou pastas frontend/backend para configurar.

## Subir na Vercel

1. Importe o repositório `Wozdelta/Do-zero-ao-viral`.
2. Em **Root Directory**, mantenha a raiz: `./`.
3. O arquivo `vercel.json` já define:
   - Instalação: `npm ci`
   - Build: `npm run build`
   - Pasta de saída: `dist`
4. Faça o deploy. Não precisa configurar servidor separado nem credenciais da Cakto.

## Rodar no computador

Node.js 22.12 ou superior. Abra o terminal nesta mesma pasta:

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:5173. Para conferir a versão compilada:

```sh
npm run build
npm start
```

Abra http://127.0.0.1:3001. Encerre com Ctrl+C.

## Onde fica cada coisa

```text
zero-ao-viral/
  index.html
  package.json
  package-lock.json
  vite.config.js
  vercel.json
  src/              página, componentes e estilos
  public/           imagens e anúncio
  api/config.js     configuração pública na Vercel
  lib/settings.js   configuração compartilhada
  tests/            verificações
```

Tudo é instalado, executado e publicado a partir desta pasta. As subpastas apenas organizam o conteúdo do mesmo projeto.

## Pagamento

Os botões levam diretamente ao checkout https://pay.cakto.com.br/37y6pfg_1307697. O site não coleta cartão, CPF ou dados de pagamento e não precisa de chave de API. Altere o link em `src/offer.js` se mudar a oferta.

Confira na Cakto os métodos de pagamento, a entrega e as taxas. Na revisão do checkout, a plataforma acrescentou R$ 0,99 ao produto de R$ 99,99, mostrando total de R$ 100,98.

## Colocar o anúncio

Salve o vídeo real em `public/media/anuncio.mp4`. Localmente ele é detectado automaticamente. Na Vercel, defina `AD_VIDEO_ENABLED=true` e faça um novo deploy. Até receber o vídeo, a página mostra uma demonstração visual identificada.

## Configurações opcionais

Na Vercel, pode preencher `SELLER_NAME`, `SELLER_DOCUMENT`, `SUPPORT_EMAIL` e `REFERENCE_PRICE_CONFIRMED`. Nenhuma credencial privada é necessária. Dados locais privados, referências do produto, capturas e dependências são excluídos do Git.

```sh
npm test
```

Os testes verificam a URL do checkout e o relógio persistente. O contador não encerra a promoção ao zerar; isso está informado na página. Os prints de Analytics não representam promessa de renda.
