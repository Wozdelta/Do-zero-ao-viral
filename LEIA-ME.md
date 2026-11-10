# Do Zero ao Viral — versão 8

Página de vendas React + Tailwind, backend Node + Express, sem banco de dados.

## Pagamento

Por solicitação do produtor, todos os botões de compra levam diretamente ao checkout oficial da Cakto: https://pay.cakto.com.br/37y6pfg_1307697. Não há pagamento dentro do site, formulário intermediário, SDK ou uso de chaves de API.

Preço anunciado: de R$ 349,99 por R$ 99,99. O contador permanece salvo no navegador e não reinicia ao atualizar. O valor continua disponível após zerar, conforme a indicação na página.

## Iniciar

Instale Node.js 22.12 ou superior. Na pasta principal do projeto:

```text
npm ci
npm run build
npm start
```

Abra http://127.0.0.1:3001. Para editar, use `npm run dev` e http://127.0.0.1:5173. Encerre com Ctrl+C.

## Personalizar

- `shared/offer.js`: link oficial usado nos botões.
- `frontend/src/main.jsx`: textos, seções, preços e redes.
- `frontend/src/redesign.css`: refinamento visual, galeria, promoção e botões.
- `frontend/src/Countdown.jsx` e `clock.js`: relógio alinhado e persistência.
- `frontend/src/HeroFilm.jsx`: destaque de mídia e anúncio.
- `backend/.env.example`: dados opcionais de fornecedor e contato, sem chaves secretas.

Para colocar o anúncio, salve o arquivo real em `frontend/public/media/anuncio.mp4`, compile e reinicie o servidor. Até lá, o destaque aparece como demonstração visual. Não foi entregue um vídeo real pelo produtor ainda.

Os quatro prints aparecem inteiros, em duas colunas no computador e uma no celular. Preservam os números fornecidos, sem atribuição a alunos não comprovada e sem promessa de renda. A arte principal foi gerada do zero; seu prompt está em PROMPTS-IMAGENS.md.

## Verificação e publicação

```text
npm test
npm run build
```

O Express serve `frontend/dist` e as rotas de configuração no mesmo domínio. Para publicar, use hospedagem Node com HTTPS e ajuste o host de escuta se a plataforma exigir. Não publique backend, referências privadas ou `.env` como arquivos estáticos.

O ZIP exclui dependências instaladas e arquivos privados. Confira CONFIGURAR-PAGAMENTO.md e VERIFICACAO.md. As seções históricas do prompt e do relatório de verificação foram preservadas; a revisão 8 prevalece quando houver instrução anterior sobre checkout próprio.
