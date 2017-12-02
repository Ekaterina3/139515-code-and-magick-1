'use strict';

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getMaxValue = function (array) {
  var max = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

var drawHistogram = function (ctx, name, time, height, histoHeight, position) {
  ctx.fillStyle = '#000';
  ctx.fillText(time.toFixed(0), position, 90 + (histoHeight - height));

  ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0,0,255,0.' + getRandomNumber(1, 9) + ')';

  ctx.fillRect(position, 100 + (histoHeight - height), 40, height);

  ctx.fillStyle = '#000';
  ctx.fillText(name, position, 100 + histoHeight + 20);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = getMaxValue(times);
  var histoHeight = 150;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 90;
  var height;
  var position;

  for (var i = 0; i < times.length; i++) {
    height = step * times[i];
    position = histoX + columnIndent * i;
    drawHistogram(ctx, names[i], times[i], height, histoHeight, position);
  }
};
