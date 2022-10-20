--------------------
# 주요 테마: 함수 
--------------------




# HTML 구조의 요소를 가져오기.

querySelector() 의 경우, 
"div"를 입력하여 해당 태그의 값을 가져온다. 

다만, 대부분의 태그는 중복되기 때문에, 
#id 와 .class 의 표현을 쓴다. 


# HTML의 button tag에서 버튼 클릭에 대한 동작 설정이 가능한 메소드.

@onclick:할당되어 있는 수식, 혹은 코드를 실행

<head>
    <script>
        const btnFunc = function() {
            console.log("버튼이 눌렸어요!")
        }
    </script>
</head>
<body>
    <button onclick="btnFunc()">버튼</button>
</body>


# 날짜 객체 불러오기
new Date("0000-00-00")


# 함수의 리턴 
내부에 존재하는 데이터, 연산 결과를 
외부로 return 한다. 




# 함수의 표현식 : 

호이스팅 영향 여부
O : 함수 선언식의 기명함수 
X : 함수 표현식의 익명함수


# 익명함수 

const 변수 = function(param1, param2,... ) {

    return 결과값
}

    @가장 기본적인 형태 
    const 변수 = function() {
    } ....(1)
    
    () => { } ....(2) 화살표 함수의 익명함수 


# 함수의 선언문 : 

function 변수(param1, param2,...){

    return 결과값
}

    @가장 기본적인 형태 
    function 변수(){
    }


# 화살표 함수: (대괄호를 쓰는 것을 생략한 후 '=>'로 나타낸 형테)

const 변수 = (param1, param2,... )=> {

    return 결과값 
}

    @가장 기본적인 형태
    const 변수 = ()=> {
    }


# 매개변수와 return값은 필수가 아님. 


# 비교 연산자의 엄밀성

    == < ===

# 논리 연산자

&&
||
!

!( false == 0 == undefined == null == "" == NaN ) == true == 1 


# 데이터 타입:

    원시타입: String, Number, Boolean, Bight, undefined, System, null

        @메모리 주소와 값을 대응시켰을 때, 재할당 시, 다른공간에 저장된다. = "불변성"

    참조타입: 객체 타입과 유사하다. 

        @참조타입의 "가변성"이란, 기존 메모리에서 참조를 통한 새로운 메모리를 할당하는 속성이다. 
        기존 메모리가 "불변성"을 가지는 것은 동일하다.



# 조건문 기본 틀:

    if(user.name==="peter"){
        console.log("안녕하세요. peter님")
    }else if(user.name==="jason"){
        console.log("안녕하세요. jason님")
    }else{
        console.log("저희 멤버가 아니신가요?")
    }


