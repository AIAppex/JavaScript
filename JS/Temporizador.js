<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time</title>
    <style> #temporizador { font-family: Arial, sans-serif; font-size: 24px; color: #333; } </style>
</head>
<body>
    <div id="temporizador"></div>
    <script>
        
        function calcularTempoRestante(dataFutura) {
            const agora = new Date().getTime();
            const tempoRestante = dataFutura - agora;
            const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

            return { dias, horas, minutos, segundos };
        }

        function atualizarTemporizador() {
            const dataFutura = new Date('2025-12-31T23:59:59').getTime();
            const { dias, horas, minutos, segundos } = calcularTempoRestante(dataFutura);

            document.getElementById('temporizador').innerHTML = 
                `Tempo Restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        setInterval(atualizarTemporizador, 1000);
    </script>    
</body>
</html>
