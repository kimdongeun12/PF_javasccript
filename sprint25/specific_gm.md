################################
################################




## 동기와 비동기 

프로세스는 멀티스레드를 가질 수 있고, 멀티스레드는 하나의 싱글스레드로 구성된다.
싱글스레드는 1기능이 1동작으로 대응되는 것을 말하는데, 자바스크립트는 동기적 동작을 할 때,
싱글스레드로 동작한다. 

비동기의 개념은 스택과 큐의 구조를 함께 사용할 때, 더 잘 이해할 수 있다. 
스택으로 먼저 함수들을 쌓은 뒤, 비동기적 함수의 요소가 큐로 들어간 후, 
메인함수가 실행될 때, 스택에 있는 함수가 모두 실행된 후 큐에 있는 함수가 실행된다. 
이처럼 어떤 기능이 1개씩 진행되고 있을 때, 다른 기능이 다른 장소에서 대기를 하다가 
추후에 실행되며 한 프로세스가 끝나는 것을 말한다. 



## Promise (비동기 함수 구현방법 중 하나)

function() { // resolver : 비동기 성공, reject: 비동기 실패!
    return new Promise( (resolver,reject)=> { setTimeout(()=>{ resolver(100);}, 2000); } );
};

비동기 함수의 성공과 실패의 경우에 대한 setTimeout함수를 설정해둔다. 



## then, catch (Promise 함수와 함께 쓸 수 있는 것.)

promise.then(value => console.log(value));
promise.then(value => console.log(value));




## 구조분해할당 


데이터 타입에 따라 저장방식이 다르다.
순차적 데이터는 배열이 적당하고 
하나의 키로 관리하는 엔티티에 값에 여러개를 저장하고 싶으면 객체를 사용한다. 

구조분해할당은 이런 배열과 객체들의 요소 중 일부를 정제할 수 있게 해주는 스킬이다. 


배열에 미리 변수이름을 넣고 선언해준 뒤, 기존에 선언한 배열에 대한 변수를 할당해주면, 
"변수 요소의 이름 : 배열로 정의된 변수의 값"으로 대응될 수 있다. 
다시말하면, 값에대한 복사가 일어난 뒤 변수에 "분해"된다. 

예시1))

let [student1, student2, student3] = new Set(["동은","지영","승진"]);

예시2)) 키와 값이 있는 구조의 객체에서는 ${key} 와 ${value}로 대응시킬 수 있다. 


예시3)) 실질적으로 ...rest 파라미터도 "분할"하여 나머지 값을 가져오는 기능을한다. 


예시4))

중첩구조. 

let options = {
  name: "My name",
  job: ["Item1", "Item2"]
};

function showMenu({name = "Untitled", experiences = "option1", skills = 100, job = ["Item1", "Item2"]}) {}

출력할 때,  `${name} ${experiences} ${skills}` 으로 가능하다. 



