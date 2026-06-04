 function calcular() {

    let C = document.getElementById("Capacitor").value;
    let R = document.getElementById("Resistencia").value;
    let T = document.getElementById("Tiempo").value;

    let vacios = [C, R, T].filter(x => x === "").length;

    if(vacios !== 1){
        document.getElementById("resultado").innerHTML =
        "Se tiene que dejar un campo vacío.";
        return;
    }

    C = parseFloat(C);
    R = parseFloat(R);
    T = parseFloat(T);

    if(isNaN(T)){
        let T = 5 * C * R;

        document.getElementById("resultado").innerHTML =
        `Tiempo = ${T.toFixed(6)} s`;
    }
    else if(isNaN(C)){
        let C = T / (5 * R);

        document.getElementById("resultado").innerHTML =
        `Capacitancia = ${C.toFixed(6)} F`;
    }
    else if(isNaN(R)){
        let R = T / (5 * C);
        
        document.getElementById("resultado").innerHTML =
        `Resistencia = ${R.toFixed(6)} Ω`;
    }
}