<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style> .estilo-paragrafos { color: blue; font-style: italic; } </style>
    <title>Seletores</title>
</head>
<body>
    <h1>React Native</h1>
    <ul>
        <li>Item React</li>
        <li>Item JavaScript</li>
        <li>Item Vite</li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem, ipsum.</p>
    <p>Lorem ipsum dolor sit.</p>
    <button id="botaoAlterar">Botão Original</button> 
    <button id="botaoReverter">Reverter Alterações</button>

    <script>

        function alterarElementos() {
            document.querySelector('h1').innerText = 'Alguem disse React?';

            const itensLista = document.querySelectorAll('ul li');
            itensLista.forEach(item => {
                item.style.color = 'red';
                item.style.fontWeight = 'bold';
            });

            const paragrafos = document.querySelectorAll('p');
            paragrafos.forEach(paragrafo => {
                paragrafo.classList.add('estilo-paragrafos');
            });

            document.querySelector('#botaoAlterar').innerText = 'Botão Alterado';
        }

        function reverterElementos() {
            document.querySelector('h1').innerText = 'Título Original';

            const itensLista = document.querySelectorAll('ul li');
            itensLista.forEach(item => {
                item.style.color = '';
                item.style.fontWeight = '';
            });

            const paragrafos = document.querySelectorAll('p');
            paragrafos.forEach(paragrafo => {
                paragrafo.classList.remove('estilo-paragrafos');
            });

            document.querySelector('#botaoAlterar').innerText = 'Botão Original';
        }

        document.querySelector('#botaoAlterar').addEventListener('click', alterarElementos);
        document.querySelector('#botaoReverter').addEventListener('click', reverterElementos);
    </script>
</body>
</html>
