import { Link, useLocation } from "react-router-dom";



const Home = () => {



    return (

        <div>
            <h3>home화면</h3>

            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to="/user?id=aa123&age=20">회원페이지</Link></li>

                <li><Link to="/info/1">info페이지</Link></li>
                <li><Link to="/info/2">info페이지</Link></li>
                <li><Link to="/info/3">info페이지</Link></li>

                {/* 중첩라우터 */}
                <li><Link to="/board">board페이지</Link></li>

                {/* navigate 컴포넌트 */}
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </div>
    )

}

export default Home;