/**
 * Our First Interface
 */

/* interface を使わない例 */
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

// `label` があるかどうかだけをチェックするので、
// 他のプロパティが含まれていてもエラーにならない
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

/* interface を使った例 */
interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

// interface に定義されているプロパティがあるかだけをチェックする
let myObj2 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObj2);
