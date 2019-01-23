/**
 * Excess Property Checks
 */
interface SquareConfig {
  color?: string;
  width?: number;
  // [propName:string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {

  // ...
}

// error
let mySquare = createSquare({ colour: 'red', width:100 });

// 回避方法1
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 回避方法2 は、 SquareConfig に [propName:string]: any を追加する

// 回避方法3
let squreOptions = { colour: 'red', width:100 };
let mySquare = createSquare(squreOptions);