module.exports = function check(str, bracketsConfig) {
  // Преобразуем строку в массив
  const arrStr = str.split('');
  // Преобразуем в одномерный массив
  const brackets = bracketsConfig.reduce((acc, value) => {
        acc.push(...value);
    return acc;
  }, [])

  // Добавляем стэк
  const stack = [];
  
  // Функция нахождения индекса элемента в bracketsConfig
  const indexBrackets = (element) => brackets.indexOf(element);
  
    for (let i = 0; i < arrStr.length; i++) {
      let indexElem =  indexBrackets (arrStr[i]);
      if(indexElem % 2 === 0) {
          // Проверка если есть одинаковые значения для скобок (пример '||', '1,1', '#, #')
          if(arrStr[i] === brackets[indexElem +1]  && stack[stack.length-1] === arrStr[i]) {
            stack.pop();
          }else {
            stack.push(arrStr[i]);
          }
      }else {
        if (stack.pop() !== brackets[indexElem - 1]) {
            return false;
        }
      }
    }
  return stack.length === 0;
}
