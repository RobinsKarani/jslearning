lj /.// math =built-in object that provides a collection of properties and methods
/* 
Math.E
Euler's number and the base of natural logarithms; approximately 2.718.

Math.LN10
Natural logarithm of 10; approximately 2.303.

Math.LN2
Natural logarithm of 2; approximately 0.693.

Math.LOG10E
Base-10 logarithm of E; approximately 0.434.

Math.LOG2E
Base-2 logarithm of E; approximately 1.443.

Math.PI
Ratio of a circle's circumference to its diameter; approximately 3.14159.

Math.SQRT1_2
Square root of ½; approximately 0.707.

Math.SQRT2
Square root of 2; approximately 1.414.

Math[@@toStringTag]
The initial value of the @@toStringTag property is the string "Math". This property is used in Object.prototype.toString().

Static methods
Math.abs()
Returns the absolute value of x.

Math.acos()
Returns the arccosine of x.

Math.acosh()
Returns the hyperbolic arccosine of x.

Math.asin()
Returns the arcsine of x.

Math.asinh()
Returns the hyperbolic arcsine of a number.

Math.atan()
Returns the arctangent of x.

Math.atan2()
Returns the arctangent of the quotient of its arguments.

Math.atanh()
Returns the hyperbolic arctangent of x.

Math.cbrt()
Returns the cube root of x.

Math.ceil()
Returns the smallest integer greater than or equal to x.

Math.clz32()
Returns the number of leading zero bits of the 32-bit integer x.

Math.cos()
Returns the cosine of x.

Math.cosh()
Returns the hyperbolic cosine of x.

Math.exp()
Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

Math.expm1()
Returns subtracting 1 from exp(x).

Math.floor()
Returns the largest integer less than or equal to x.

Math.fround()
Returns the nearest single precision float representation of x.

Math.hypot()
Returns the square root of the sum of squares of its arguments.

Math.imul()
Returns the result of the 32-bit integer multiplication of x and y.

Math.log()
Returns the natural logarithm (㏒e; also, ㏑) of x.

Math.log10()
Returns the base-10 logarithm of x.

Math.log1p()
Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

Math.log2()
Returns the base-2 logarithm of x.

Math.max()
Returns the largest of zero or more numbers.

Math.min()
Returns the smallest of zero or more numbers.

Math.pow()
Returns base x to the exponent power y (that is, xy).

Math.random()
Returns a pseudo-random number between 0 and 1.

Math.round()
Returns the value of the number x rounded to the nearest integer.

Math.sign()
Returns the sign of the x, indicating whether x is positive, negative, or zero.

Math.sin()
Returns the sine of x.

Math.sinh()
Returns the hyperbolic sine of x.

Math.sqrt()
Returns the positive square root of x.

Math.tan()
Returns the tangent of x.

Math.tanh()
Returns the hyperbolic tangent of x.

Math.trunc() */

/* 
let  x =3.99;
let y = 2;
let z;
z = Math.round(x);//rounds off
z = Math.floor(x); //rounds down3.99= 3~floor
z = Math.ceil(x);//rounds up eg.3.43 = 4~ceiling
z = Math.trunc(x);//truncates
z = Math.sqrt(x)
z = Math.log(x)//as well as sine and cos and tan
z = Math.abs(x);..returns the absolute of the number eg . if number is negative the postive is the output
let  x =3;
let y = 2;
let z = 1;
let max = Math.max(x,y,z);
console.log(max);// returns the maximum number among x,y,z

let max = Math.max(Math.abs(x), Math.abs(y) its important to prevent users from putting negatives

*/





