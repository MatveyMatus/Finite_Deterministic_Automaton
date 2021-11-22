let S = 'anansasananaasananaasananasananas';
let T = 'ananas';
let lenT = T.length;
let lenS = S.length;
alph = new Array();

//Определяем алфавит строки t
for( i = 0; i < lenT; i++)
	alph[T.charAt(i)]=0;

//В двумерном массиве del храним таблицу переходов
del = new Array(lenT+1);
for( j = 0; j <= lenT; j++)
	del[j] = new Array();

//Инициализируем таблицу переходов
for(i in alph)
	del[0][i] = 0;

//Формируем таблицу переходов
for( j = 0; j < lenT; j++){
	prev = del[j][T.charAt(j)];
	del[j][T.charAt(j)] = j + 1;
	for(i in alph)
		del[j+1][i] = del[prev][i];
}

//Выводим таблицу переходов
console.log('Таблица переходов');
for(j=0; j <= lenT; j++){
	out = '';
	for (i in alph)
		out += del[j][i] + ' ';
	console.log(out);
}

let state = 0;
let coun = 0;
result = new Array();
for (i = 0; i < lenS; i++){
	state = del[state][S.charAt(i)];
	if (state == lenT){
		coun++;
		idx = i - lenT + 1;
		result.push(idx);
	}
}
console.log('\nСтрока:',S);
console.log('Подстрока:',T);
console.log('Количество вхождений подстроки:',coun);
console.log('Индексы вхождений подстроки:',result.join(', '));
