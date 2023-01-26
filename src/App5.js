import { Fragment, useState } from "react"
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";


const App = () => {
    /* 
    p.495
    1. ContextAPI 외부에 선언 createContext() 훅 사용
    2. 자식 컴포넌트 consumer로 데이터를 받기
    3. 부모컴포넌트 provider로 데이터 전달(변경)

    */

    //select 태그를 만들고 useState를 활용해서 color값을 변경
    const [color,setColor]=useState('red');
    const change = (e)=>{
        setColor(e.target.value)
    }
    return (
        <ColorContext.Provider value={{ color: color }} >
            <select onChange={change}>
                <option value='red'>red</option>
                <option value='blue'>blue</option>
                <option value='aqua'>aqua</option>
            </select>
            {/* Provider는 사용할 root컴포넌트에 선언합니다. */}
            <ColorComponent/>

        </ColorContext.Provider>
    )
}


export default App;