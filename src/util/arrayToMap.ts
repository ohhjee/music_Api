export const arrayToMap = (arrayData: any[]) => {
  let res = [] as unknown as any;

  arrayData.forEach((data: any) => {
    const temp = data.map((data: any) => data);

    res = [...temp];
  });

  return res;
};
