const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', bhaskara());

function bhaskara() { 
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    if (!a || !b || !c){
        resultado.innerText = 'Ingrese los valores los 3 valores de a, b y c'
    } else {
        const datoRaiz = (b * b) - 4 * (a * c)
        console.log(datoRaiz)
        if(datoRaiz < 0){
            alert ("El valor para calcular la raiz debe de ser un valor positivo")
        }else {
            const raiz = Math.sqrt(datoRaiz)
            const division = 2 * a
    
            const calculoPositivo = -b + raiz
            const calculoNegativo = -b - raiz
    
            const positivoDividido = calculoPositivo / division
            const negativoDividido = calculoNegativo / division

            return resultado.innerText = 'Los valores son ' + positivoDividido + ' y ' + negativoDividido;
        }
    }
}
