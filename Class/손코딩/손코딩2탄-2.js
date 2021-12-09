new Promise(function(resolve, reject) {

    setTimeout(() => reject('error'), 1000);
  
  }).then(function(result) {
  
    alert(result + ' : 잘 수행!');
    return result + 'one';
  
  }).catch(function(result) {
  
    alert(result + ' : 애러 발생!'); // 1
    return result + 'two';
  
  }).then(function(result) {
  
    alert(result + ' : 잘 수행!'); // 2
    return result + 'three';
  
  });