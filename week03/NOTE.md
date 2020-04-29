<!--
 * @Description: 第三周作业
 * @Author: Looper
 * @Date: 2020-04-25 22:15:24
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-29 22:34:32
 * @FilePath: /Frontend-01-Template/week03/NOTE.md
 -->
## 第三周作业
---

### JavaScript | 表达式，类型转换
* 根据这节课上讲师已写好的部分，补充写完函数 convertStringToNumber
  
```javascript
function convertStringToNumber(str,base){
    if(!base) {
        base =10;
    }
    let chars=str.toLowerCase().split("");
    let offset=0;
    let num = 0,n=0;
    let i=0;
    if(chars[i]==='-' || chars[i]==='+' ){
        i++;
    }
    while(!isNaN(num) && i<chars.length && chars[i] !='.'){
        offset = chars[i]>'9' ? 39 : 0;
        num = num * base;
        n = chars[i].codePointAt(0)-'0'.codePointAt(0)-offset;
        n < base ? num+=n : num = NaN;
        i++;   
    }
    if(chars[i]==='.'){
        i++;
    }
    let decimals =1;
    while(!isNaN(num) && i<chars.length) {
        offset = chars[i]>'9' ? 39 : 0;
        decimals = decimals / base;
        n = chars[i].codePointAt(0)-'0'.codePointAt(0)-offset ;
        n < base ? num+=n*decimals : num = NaN;
        i++;
    }

    return chars[0]==='-'?num*(-1) : num;
}

convertStringToNumber('100010',2);  // 34
convertStringToNumber('100010',8);  // 32776
convertStringToNumber('1.023456'); // 1.023456
convertStringToNumber('1.023456a',8); // NaN
convertStringToNumber('+1BF',16);  // 447
convertStringToNumber('1BF',10);  // NaN
convertStringToNumber('-1BF',16); // -447

```
* 完善函数 convertNumberToString
  
```javascript
function convertNumberToString(num,base){
    if(num === 0 ) return '0';
    if(isNaN(num)) return NaN;
    const m= ['0','1','2','3','4','5','6','7','8','9','A','B',
                'C','D','E','F'];
    if(!base) {
        base =10; //default 10 base
    }
    let str = '';
    let integer = Math.floor(Math.abs(num));
    let decimals = Math.abs(num) - integer;
    while(integer >0) {
        str = m[integer % base] + str;
        integer = Math.floor(integer /base);
    }
    let d_len=1;
    if(decimals >0) {
        str+='.';
        let n = Math.abs(num);
        while(n-Math.floor(n)>0){
            n= n*(Math.pow(base,d_len));
            d_len++;
        }  
    }
    while(decimals > 0){
        str+= m[Math.floor(decimals * base)];
        decimals = (decimals * base - Math.floor(decimals * base)).toFixed(d_len+1);
    }
    return num>0?str:"-"+str;
}
convertNumberToString(0,10); // 0
convertNumberToString('s',10); // NaN
convertNumberToString(1.22,10); // '1.22'
convertNumberToString(-235.5); // '-235.5'
convertNumberToString(235.5,16); // 'EB.8'
convertNumberToString(235.0004999,10); // '235.0004999'
convertNumberToString(0x235,10); // '565'
convertNumberToString(0x235,16); // 235'

// cant pass
// convertNumberToString(235.0004999,10); 
// 235.0004999 .toString(16) // "eb.0020c2ee26b8"

```

