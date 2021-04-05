export const drawRectangle = (detect, ctx) => {
  detect.forEach((predection) => {
    const [x, y, width, height] = predection['bbox'];
    const text = predection['class'];

    // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const color = 'black';
    ctx.strokeStyle = color;
    ctx.font = '18px sans-sherif';
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
