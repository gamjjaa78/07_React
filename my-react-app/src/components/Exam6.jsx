//Context API:React 컴포넌트 트리 전체에서
//데이터 공유할 수 있는 방법 제공
//부모자식간 관계가 중첩된 구조에서 데이터를 전달하는데 있어
//불필요한 props drilling (상태 내리꽂기) 방지
//->사용키위해 useContext hook 필요

import { createContext, useContext, useState } from "react"

//React.createContext():Context 객체를 생성시 사용하는 함수
//Context : react에서 컴포넌트 계층 구조를 통해 데이터를 효율적으로 전달하기 위한 메커니즘(작동방식/원리)
//Provider: 데이터 제공하는 주체
//Consumer: 데이터 소비
const UserContext=createContext();

//부모 컴포넌트
const Exam6 = () => {
    const [user, setUser]=useState("홍길동");

    //Context.Provider 하위 컴포넌트에게 데이터전달(제공)할때 사용
    return (
      <UserContext.Provider value={{user, test:"test값이다"}}>
        <h1>부모:부모가 가진 상태값 {user}</h1>
        <Child1 />
      </UserContext.Provider>
    )
}

const Child1= () => {
    return(
        <>
            <h1>Child1</h1>
            <Child2 />
        </>

    )
}

const Child2= () => {
    const ContextValue = useContext(UserContext);
    //Context로 등록된 객체 중 이름이 UserContext를 꺼내 데이터사용(소비)
    return(
        <>
            <h1>Child2 : {ContextValue.user} / {ContextValue.test} </h1>
            <Child3 />
        </>

    )    
}
const Child3= () => {
    const ContextValue = useContext(UserContext);

    return(
        <h1>Child3 : {ContextValue.user} / {ContextValue.test}</h1>
    )
}


export default Exam6;