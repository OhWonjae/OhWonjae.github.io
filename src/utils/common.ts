// 연속적인 함수 호출 시 마지막 함수만 호출해주는 기능
export const debounce = (callback: (...args: any[]) => any, delay: number) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};
