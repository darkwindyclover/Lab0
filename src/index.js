alert("Let's integrate!");
p1 = prompt("First point", 0);
p2 = prompt("Second point", 0);
function calculate(a, b, integFunc) {
    n = 10000  
    prevSum = 0
    sum = 0
    for (let j = 16; j<n; j*=2) {
        sum = 0
        dX = (b-a)/j    // Delta X      
        for (let i = 1; i<=j; i++) {
            sum += integFunc(a+i*dX);
        }
        sum = sum*dX
        console.log("prevsum = " + prevSum + ", sum = " + sum + ", j = " + j)
        if (Math.abs(prevSum-sum) < 0.01) { break }
        prevSum = sum
    }
    
    alert("Ready:" + sum);
}

function Func3(x) {
    return x*x-x+1
}

calculate(p1, p2, Func3)
