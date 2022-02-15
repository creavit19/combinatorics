// Комбинаторика
// Математические формулы:
// Выборка с учетом порядка: A = n! / ( n - k )!
// Выборка без учета порядка: C = n! / k! * ( n - k )!
// Где k - это количество выбираемых вариантов из n - возможных вариантов.
// A и C - это количество возможных комбинаций выборки
// с учетом порядка следования выбираемых вариантов и
// без учета порядка соответственно.

// Выборка с учётом порядка
function combinationsWithOrder(quantity, from) {
  if ( quantity > from ) return 'Error';
  let result = 1;
  while( quantity > 0 ) {
    result *= from;
    quantity--;
    from--;
  }
  return result;
};

// Выборка без учёта порядка
function combinationsWithoutOrder(quantity, from) {
  if ( quantity > from ) return 'Error';
  let result = 1;
  while( quantity > 0 ) {
    result *= from / quantity;
    quantity--;
    from--;
  }
  return Math.round(result);
};

// Примеры:

// Выбираем 5 вариантов из 36 возможных вариантов
// без учета порядка выбранных вариантов:
console.log(combinationsWithoutOrder(5, 36));
// Ответ: 376992

// Выбираем 2 варианта из возможных 5
// с учетом порядка следования выбранных вариантов:
console.log(combinationsWithOrder(2, 5));
// Ответ: 20

// Выбираем 16 варианта из возможных 50000
// без учета порядка выбранных вариантов:
console.log(combinationsWithoutOrder(16, 50000));
// Ответ: 7.275419857829341e+61

// P. S. Эти две функции для безвозвратных выборок,
// то есть выбранные варианты в повторном выборе не учавствуют.
