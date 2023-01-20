import { useParams } from "react-router-dom";



const Info = ()=>{

    //예시 데이터
    const data = {
        1:{name:"홍길동",subject:"리액트라우터"},
        2:{name:"짱구",subject:"리액트props"},
        3:{name:"맹구",subject:"리액트state"}
    };

    //useParams()

    let param = useParams();
    // console.log(param)//URL주소에 값을 키로 받아줍니다.
    // console.log(param.num);

    const {name,subject}= data[param.num]


    return (
        <div>
            <h3>인포화면</h3>
            {name}님의 데이터 {subject}
        </div>
    )
}

export default Info;