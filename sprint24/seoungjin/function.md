###함수 선언의 종류


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



###원시타입과 참조타입


#원시타입의 종류
*String
*Number
*Boolean
*Bigint
*undefined
*Symbol
*null


#참조타입의 종류
참조타입의 종류는 위의 7종류를 제외한 나머지 모든 것
*객체
*배열
*함수


#워시타입의 특징
*불변성 : 데이터가 변하지 않는 속성


#참조타입의 특징
*가변성 : 데이터가 수정 가능한 속성


####원시타입과 참조타입의 차이점

<table>
    <tr>
        <th></th>
        <th>원시타입</th>
        <th>참조타입</th>
    </tr>
    <tr>
        <td></td>
        <td>7개만 존재하는 타입</td>
        <td>그 외 모든 타입</td>
    </tr>
    <tr>
        <td>갑의 저장 방법</td>
        <td>하나의 데이터만 가진다.</td>
        <td>heap에 데이터'들'을 저장 후, 주소를 가진다.</td>
    </tr>
    <tr>
        <td>변수에 할당 시</td>
        <td>값(value)</td>
        <td>주소(reference)</td>
    </tr>
</table>