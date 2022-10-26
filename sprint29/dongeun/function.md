## 동기와 비동기

> 동기란 

- 하나의 작업이 종료될 때까지 다음 동작은 기다리는 실행 방식을 의미해요.

> 비동기란 

- 하나의 작업이 진행됨과 동시에 또 다른 작업도 함께 진행되는 것을 이야기해요.

JavaScript의 실행 환경 내부에는 call stack과 callback queue라고 하는 영역이 존재해요

stack : LIFO(Last In First Out)으로 내부 데이터가 처리됩니다. 먼저 들어온 함수, 데이터가 가장 마지막에 처리되는 구조입니다.
queue : FIFO(First In First Out)으로 내부 데이터가 처리됩니다. 먼저 들어온 함수, 데이터가 가장 먼저 처리되는 구조입니다.


```
setTimeout(() => {
	console.log("setTimeout call")
})

const func3 = function() {
	console.log("func3 call")
}

const func2 = function() {
	func3()
	console.log("func2 call")
}

const func1 = function() {
	func2()
	console.log("func1 call")
}

func1()

log => 

func3 call
func2 call
func1 call
setTimeout call
```

사용자 입장에서 동기식으로 데이터를 받게 된다면 기다리는 시간이 비동기식으로 데이터를 받는것보다 상대적으로 길어지게 되어 불편해요

## Promise

- 자바스크립트에서 비동기를 간편하게 처리해주는 객체에요
- 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용해요.
- pending(대기), fullfilled(이행), rejected(거절) 총 3가지 상태가 존재해요.

```
const promiseTest01 = function () {
    return new Promise((resolver , reject) => {
        resolver(100);
    })
}

promiseTest01()

const promiseTest02 = function () {
    return new Promise((resolver , reject) => {
        setTimeout(() =>{
            resolver(100);
        } , 2000)
    })
}

promiseTest()

log =>

1.  Promise {fulfilled : 100} // 데이터를 바로 받았기에 데이터 100을 리턴
2.  Promise {pending} // 2초가 지나지 않았기에 pending(대기)상태
```
