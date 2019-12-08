const arrayValueAverager = (sourceArray, requiredSize) => {
  const subArraySize = Math.floor(sourceArray.length / requiredSize);
  const subArrays = [];

  for (let i = 0; i < requiredSize; i += 1) {
    subArrays[i] = sourceArray.slice(
      i * subArraySize,
      i * subArraySize + subArraySize,
    );
  }

  const newArray = subArrays.map(item => {
    const sum = item.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return Math.round(sum / item.length);
  });

  return newArray;
};

export default arrayValueAverager;
