export class Rational {
     numerator: number;
     denominator: number;
     constructor(x: number, y: number) {
          if (y < 0) {
               y *= -1;
               x *= -1;
          }
          this.numerator = x;
          this.denominator = y;
     }
     gcd(a: number, b: number): number {
          if (a == 0) return b;
          if (b == 0) return a;
          if (b < a) return this.gcd(b, a % b);
          else return this.gcd(a, b % a);
     }
     add(r2: Rational) {
          let n = this.numerator * r2.denominator + r2.numerator * this.denominator
          let d = this.denominator * r2.denominator;
          const g = this.gcd(Math.abs(n), Math.abs(d));
          return new Rational(n / g, d / g);
     }

     sub(r2: Rational) {
          let n = this.numerator * r2.denominator - r2.numerator * this.denominator
          let d = this.denominator * r2.denominator;
          const g = this.gcd(Math.abs(n), Math.abs(d));
          return new Rational(n / g, d / g);
     }

     mul(r2: Rational) {
          let n = (this.numerator * r2.numerator);
          let d = (this.denominator * r2.denominator);
          const g = this.gcd(Math.abs(n), Math.abs(d));
          return new Rational(n / g, d / g);
     }

     div(r2: Rational) {
          let n = (this.numerator * r2.denominator);
          let d = (this.denominator * r2.numerator);
          const g = this.gcd(Math.abs(n), Math.abs(d));
          return new Rational(n / g, d / g);
     }

     abs() {
          if (this.numerator < 0) this.numerator *= -1;
          if (this.denominator < 0) this.denominator *= -1;
          const g = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
          return new Rational(this.numerator / g, this.denominator / g);
     }

     exprational(pow: number) {
          if (pow < 0) {
               let temp = this.numerator;
               this.numerator = this.denominator;
               this.denominator = temp;
               if (temp < 0) {
                    this.denominator *= -1;
                    this.numerator *= -1;
               }
               pow *= -1;
          }
          let npow = 1;
          let dpow = 1;
          while (pow > 0) {
               if ((pow & 1) == 1) {
                    npow *= this.numerator;
                    dpow *= this.denominator;
               }
               this.numerator *= this.numerator;
               this.denominator *= this.denominator;
               pow >>= 1;
          }
          return new Rational(npow, dpow);
     }

     expreal(p: number) {
          
     }

     reduce() {
          const g = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
          return new Rational(this.numerator / g, this.denominator / g);
     }
}
const actual = new Rational(2, 4).abs();
console.log(actual.numerator, actual.denominator);