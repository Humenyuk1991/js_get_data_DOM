'use strict';

const populationSpans = document.querySelectorAll('.population');
const populations = Array.from(populationSpans).map((span) => {
  const text = span.textContent.trim();
  const number = Number(text.replace(/,/g, ''));

  return number;
});

const total = populations.reduce((sum, value) => sum + value, 0);

const average = total / populations.length;

function formatNumber(num) {
  return num.toLocaleString();
}

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(average),
);
