const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3000;

const routes = {
  '/ok': 200,
  '/processing': 102,
  '/proxy': 305,
  '/bad': 400,
  '/notfound': 404,
  '/conflict': 409,
  '/unsupported': 415,
  '/failed': 417,
  '/error': 500,
  '/conection': 599
};


function sendHttpCatImage(res, statusCode) {
  const imageUrl = `https://http.cat/${statusCode}`;

  https.get(imageUrl, (imgRes) => {
    const headers = {
      'Content-Type': imgRes.headers['content-type'] || 'image/jpeg'
    };

    if (imgRes.headers['content-length']) {
      headers['Content-Length'] = imgRes.headers['content-length'];
    }

    res.writeHead(statusCode, headers);
    imgRes.pipe(res);
  }).on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Erro ao buscar imagem do http.cat' }));
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (routes[path]) {
    sendHttpCatImage(res, routes[path]);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Rota não encontrada. Tente /ok, /processing, /proxy, /bad, /notfound, /conflict, /unsupported, /failed, /error ou /conection'
    }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
