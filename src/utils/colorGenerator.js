import { ColorEnum } from 'utils/values';

const colorGenerator = (theme, intensity) => {
  let color;

  switch (theme) {
    case ColorEnum.RED:
      if (intensity < 128)
        color = `rgb(${intensity * 2},${intensity * 2}, 0)`;
      else color = `rgb(255,${intensity * 2 - 255}, 0)`;
      break;

    case ColorEnum.BLUE:
      if (intensity < 128)
        color = `rgb(0,${intensity * 2}, ${intensity * 2})`;
      else color = `rgb(0, ${intensity * 2 - 255},255)`;
      break;

    default:
      if (intensity < 128)
        color = `rgb(${intensity * 2},${intensity * 2}, 0)`;
      else {
        if (intensity * 2 - 255 > 240)
          console.log(intensity * 2 - 255);
        color = `rgb(255,${intensity * 2 - 255}, 0)`;
      }
  }

  return color;
};

export default colorGenerator;
