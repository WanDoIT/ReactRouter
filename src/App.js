import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import User from './component/User';
import Info from './component/Info';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from './layout/Header';
import MyPage from './component/MyPage';

function App() {

  /* 
  라우터 적용방법

  1. index.js 에서 브라우저라우터로 app을 감싸줍니다.
  2. 각각의 컴포넌트를 만듭니다.
  3. Route를 이용해서 주소별로 컴포넌트 연결합니다.

  Link컴포넌트
  - a태그를 대체합니다
  - to속성에 연결할 요청주소를 적습니다.

  쿼리스트링 ?키=값
  - useLocation()
  - useSearchParams()

  URL파라미터
  - 라우터를 설정 /경로/:값
  - useParams() 값을 받습니다
  */
  return (
    <Routes>
      {/* 중첩라우터 - 헤더부분처리 (Header에서 Outlet컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User />} />{/* 쿼리스트링 */}
        <Route path="/info/:num" element={<Info />} />{/* URL파라미터 */}
      </Route>
      {/* 각각 다른화면이 보입니다 */}
      {/*    <Route path='/board' element={<Board/>}/>
      <Route path='/board/:num' element={<BoardContent/>}/>

 */}
      {/* 중첩라우터 -  공통부분처리 (Board에 가서 Outlet컴포넌트 표기)*/}
      <Route path='/board' element={<Board />}>
        <Route path=':num' element={<BoardContent />}>

        </Route>
      </Route>

  {/* navigate 컴포넌트 */}
    <Route path='/mypage' element={<MyPage/>}/>



    </Routes>
  );
}

export default App;
