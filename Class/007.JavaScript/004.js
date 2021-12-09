let m = new Map();

// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);