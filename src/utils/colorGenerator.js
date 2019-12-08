import { ColorEnum } from 'utils/values';

const colorGenerator = (theme, intensity) => {
  let color;

  switch (theme) {
    case ColorEnum.RED:
      if (intensity < 128)
        color = `rgba(${intensity * 2},${intensity * 2}, 0, 1)`;
      else {
        color = `rgba(255,${intensity * 2 - 255}, 0, 1)`;
      }
      break;
    case ColorEnum.GREEN:
      color = `rgba(0, ${intensity}, 0, 1)`;
      break;
    case ColorEnum.BLUE:
      color = `rgba(0, 0, ${intensity}, 1)`;
      break;
    default:
      if (intensity < 128)
        color = `rgba(${intensity * 2},${intensity * 2}, 0, 1)`;
      else {
        if (intensity * 2 - 255 > 240)
          console.log(intensity * 2 - 255);
        color = `rgba(255,${intensity * 2 - 255}, 0, 1)`;
      }
  }

  return color;
};

export default colorGenerator;
