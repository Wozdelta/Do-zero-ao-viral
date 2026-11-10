# Pagamento no checkout oficial da Cakto

Todos os botões de compra abrem diretamente, na mesma aba:

https://pay.cakto.com.br/37y6pfg_1307697

Não há formulário de pagamento intermediário, coleta de cartão ou CPF, SDK de pagamento, integração de cobrança por API ou necessidade de chave secreta neste site. Pix, cartão e demais métodos disponíveis são escolhidos no ambiente da Cakto.

O link está centralizado em `shared/offer.js`. Para mudar de oferta, altere esse arquivo e execute `npm run build`. O valor anunciado continua R$ 99,99; confirme esse mesmo preço na oferta da Cakto.

Configure na Cakto os métodos de pagamento, entrega do conteúdo e mensagens de acesso. O produto do link fornecido está descrito como ebook. A página não aprova compras nem libera acesso por conta própria.

As credenciais criadas anteriormente não são utilizadas por esta versão. O arquivo privado `.env`, se existir, permanece excluído do ZIP. Não é necessário preenchê-lo para encaminhar os compradores.
