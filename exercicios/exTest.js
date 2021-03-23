let n1 = parseFloat(prompt("n1"));
let n2 = parseFloat(prompt("n2"));
let x;
let y;

x = Math.sqrt(16); // return 4
x = Math.sign(-20); // return -1
x = Math.max(20,100); // return 100
x = Math.min(55,2); // return 2
x = Math.pow(4,2); // return 4 * 2
x = Math.random()*100; // return random between 0 and 100
x = Math.floor(3.1) // return 3
x = Math.ceil(2.7); // return 3
//document.write(x);

switch (n1) {
    case 10:
        document.write(n1);
        break;
    default:
        document.write("dif de n1");
        break;
}