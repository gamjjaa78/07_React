import { useContext } from 'react';
import { AuthProvider, AuthContext } from './components/AuthContext';
import DashBoard from './components/DashBoard';
import Login from './components/Login.jsx';
import './css/App.css';

//컴포넌트 분리해 하위 컴포넌트에서 useContext 사용기
function App() {
  return(
    <AuthProvider>
      <AppComponent />
    </AuthProvider>
  )
}

function AppComponent() {

  const {user} = useContext(AuthContext);
  //로그인을 했다면 DashBoard 렌더링
  //로그인을 안했다면 Login 렌더링
  //->조건:로그인 여부
  //->      로그인 했는지 여부를 기억해줄 상태값(user)
  //        user에는 로그인한 사람의 대한 정보가 세팅
  //        ContextAPI 를 이용해 렌더링 조건 처리 하겠다!

  return (
    <>
      { user ?
        (
          <div className='body-container'>
            <DashBoard />
          </div>
        )
        :
        (
          <div className='login-section'>
            <Login />
          </div>
        )
      }
    </>
  )
}

export default App
