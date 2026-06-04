 function calcular() {

    let V = document.getElementById("voltaje").value;
    let I = document.getElementById("corriente").value;
    let R = document.getElementById("resistencia").value;

    let vacios = [V, I, R].filter(x => x === "").length;

    if(vacios !== 1){
        document.getElementById("resultado").innerHTML =
        "Se tiene que dejar un campo vacío.";
        return;
    }

    V = parseFloat(V);
    I = parseFloat(I);
    R = parseFloat(R);

    if(isNaN(V)){
        let V = I * R;
        if(V <= 0.001){
          V = V * 1000;
        }
        document.getElementById("resultado").innerHTML =
        `Voltaje = ${V.toFixed(6)} V`;
    }
    else if(isNaN(I)){
        let I = V / R;
        if(I <= 0.001){
            I = I * 1000;
        }
        document.getElementById("resultado").innerHTML =
        `Corriente = ${I.toFixed(6)} A`;
    }
    else if(isNaN(R)){
        let R = V / I;
        if(R <= 0.001){
            R = R * 1000;
        }
        document.getElementById("resultado").innerHTML =
        `Resistencia = ${R.toFixed(6)} Ω`;
    }
}