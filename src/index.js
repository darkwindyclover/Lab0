alert("Let's integrate!");
p1 = prompt("First point", 0);
p2 = prompt("Second point", 0);
function calculate(a, b, integFunc) {
    n = 5           // Subintervals amount 
    dX = (b-a)/n    // Delta X
    sum = 0
    for (let i = 1; i<=n; i++) {
        sum += integFunc(a+i*dX);
    }
    sum = sum*dX
    alert("Ready:" + sum);
}

function Func3(x) {
    return x*x-x+1
}

calculate(p1, p2, Func3)
