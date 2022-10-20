### 함수 선언식 vs 함수 표현식


```
function 함수선언식(param1, param2){
    // ...code here
    return 결과값
}
```

- 함수 선언식
함수명이 정의되어 있고, 별도의 할당 명령이 없는 것

```
const 함수표현식 = function(param1, param2){
	// ...code here
	return 결과값;
};
```

- 함수 표현식
정의한 function을 별도의 변수에 할당하는 것


--- 

주요 차이점은 호이스팅에서 차이가 나며 

함수 선언식에서는 전체에서 *호이스팅을하여 정의된 범위의 맨 위로 호이스팅되서 함수 선언 전에 함수를 사용할 수 있다는점이 있어요.

함수 표현식은 별도의 변수에 할당하게 되는데 호이스팅의 영향을 받지 않아요

*호이스팅 : 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. 

ex)

```

sum(10 , 10); // 20
minus(30 , 10) // Uncaught ReferenceError: minus is not defined

function sum (num1 , num2){
    return num1 + num2;
};

const minus = function(num1 , num2) {
    return num1 - num2;
};

sum(10 , 20) // 30
minus(30 , 10) // 20

```

```
sum(10 , 10); // 0

function sum (num1 , num2){
    return num1 + num2;
};

const minus = function(num1 , num2) {
    return num1 - num2;
};

sum(10 , 20) // -10
minus(30 , 10) // 20

function sum (num1 , num2){
    return num1 - num2;
};

const minus = function(num1 , num2) { // Uncaught SyntaxError: Identifier 'minus' has already been declared
    return num1 * num2;
};

```

선언식을 사용하면 재할당이 가능하기에 선언이된 맨 마지막 함수가 선언이되어요
표현식을 사용하면 재선언이 불가능하기에 예상치 못한 결과를 막을 수 있어요.

### 화살표 함수

```
const 함수표현식 = (param1, param2) => {
	// ...code here
	return 결과값;
};
```
- 화살표 함수 
함수 표현식과 거의 동일하게 사용 가능
