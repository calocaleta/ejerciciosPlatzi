// Arrow Function
const fibonacci = (fin) => {
    fibonacci_rec(1,1,0,fin);
};

const fibonacci_rec = (v1,v2,act,fin) => {
    // Operador condicional ternario
    (act == fin)
        ? 1
        : ( console.log(v1),
            fibonacci_rec(v2,v1 + v2,act + 1,fin))
};


fibonacci(15);