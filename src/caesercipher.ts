type KeyInput = string | undefined | null;
export class SimpleCipher {
     key: string = "";
     idx: number;
     constructor(k: KeyInput) {
          if (k) {
               this.key = k;
               this.idx = k.charCodeAt(0);
          }
          else {
               this.idx = Math.floor(Math.random() * (123 - 97) + 97);
               let k = String.fromCharCode(this.idx);
               this.key = k.repeat(100);
          }
     }
     encode(plainText: string): string {
          let cipher = "";
          for (let i = 0; i < plainText.length; i++) {
               let x = plainText.charCodeAt(i) - 97;
               let y = this.key.charCodeAt(i) - 97;
               let z = (x + y) % 26;
               // if (x > y) {
               //      z = x - y;
               // } else {
               //      z = 25-(y - x);
               // }
               cipher += String.fromCharCode(97+z);
          }
          console.log("encoded: " + cipher);
          return cipher;
     }
     decode(cipher: string): string {
          let decodedStr = "";
          for (let i = 0; i < cipher.length; i++) {
               let x = cipher.charCodeAt(i) - 97;
               let y = this.key.charCodeAt(i) - 97;
               let z;
               if (x >= y) {
                    z = x - y;
               } else {
                    z = 26-(y - x);
               }
               decodedStr += String.fromCharCode(97+z);
          }
          console.log("decoded: " + decodedStr);
          return decodedStr;
     }
}

const SimpleCipherObj = new SimpleCipher("abcdefghij");
console.log(SimpleCipherObj.decode("zabcdefghi"));