import './login.css';
import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*이벤트 처리*/
function ButtonAction(props){
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    function handleGoBack() {
        navigate('/');
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    if(props.mode === '0'){
        return(
            <button className="close_button" onClick={handleGoBack}>
                <img src="https://m.bunjang.co.kr/pc-static/resource/ee442d3dd827628bc5fe.png"  alt = {props.alt}
                className='login_close'></img>
            </button>
        );
    }
    else if(props.mode === '1'){
        return(
            <a href={()=>false} className="login_body_link"
            style={{ backgroundColor: isHovered ? '#D3D3D3' : null }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <div className="sertification login_type"></div>
                {props.title}
            </a>
        );
    }
  else if(props.mode === '2'){
    return(
        <button className="login_body_content"
        style={{ backgroundColor: isHovered ? '#fae100' : null }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="login_type kakao"></div>
                {props.title}
        </button>
    );
  }
  else if(props.mode === '3'){
    return(
        <button className="login_body_content"
        style={{ backgroundColor: isHovered ? '#3B5998' : null }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="login_type facebook"></div>
                {props.title}
        </button>
    );
  }
  else if(props.mode === '4'){
    return(
        <button className="login_body_content"
        style={{ backgroundColor: isHovered ? '#03CF5D' : null }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="login_type naver"></div>
                {props.title}
        </button>
    );
  }
  else{
    return console.log("일치 값이 없다고!!!")
  }
}

/*보이는 것들 처리 사실 설명 귀찮아*/
function Description(props){
    if(props.mode === '1'){
        return(<div className="login_description1">{props.title}</div>);  
    }
    else if(props.mode === '2'){
        return(<div className="login_description2">{props.title}</div>);
    }
    else{
        console.log("해당하는 것이 없어");
    }
}

function Href(props){
   if(props.mode === '1'){
        return(
            <p>
                도움이 필요하면
                <a href={()=>false} className="footer_email" > {props.title} </a>
                또는 고객센터
                <b> 1670-2910 </b>
                로 문의 부탁드립니다.
                고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </p>
        );
   }
   else{
    console.log("해당하는 것이 없어");
   }

}

function login(){
    return(
        <div className="login_background">
            <div className="login_page">
                <ButtonAction mode = '0' alt = '로그인 창 닫기'></ButtonAction>
                <div className = "login_margin">
                    <div className='BJ_logo2'></div>
                        <Description mode = '1' title = '번개장터로 중고거래 시작하기'></Description>
                        <Description mode = '2' title = '간편하게 가입하고 상품을 확인하세요'></Description>
                        <div className="login_body">
                            <ButtonAction mode = '2' title = '카카오로 이용하기'></ButtonAction>
                            <ButtonAction mode = '3' title = '페이스북으로 이용하기'></ButtonAction>
                            <ButtonAction mode = '4' title = '네이버로 이용하기'></ButtonAction>
                            <ButtonAction mode = '1' title = '본인인증으로 이용하기'></ButtonAction>
                        </div>
                    <div className="login_footer">
                        <Href mode = '1' title = '이메일'></Href>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;  