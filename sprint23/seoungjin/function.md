##함수 선언의 종류

*함수 표현식
```
const 함수이름 = function(param1, param2, ...){
	// ...code here
	return 결과값
}
```

*함수의 선언문
```
function 함수이름(param1, param2, ...){
    // ...code here
    return 결과값
}
```

*화살표 함수
```
const 함수이름 = ( param1, param2, ... )=>{
    // ...code here
    return 결과값
}
```

##함수 선언 방법에 따른 차이점

함수선언식의 기명함수는 호이스팅의 영향을 받는 반면에 함수 표현식의 익명함수는 호이스팅의 영향을 받지 않는다.