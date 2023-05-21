import './App.css';
import './img.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {removeText, setText} from './redux';

/*function changeLocation(region) {
  // setLocation은 2)번에서 생성한 action 객체
  dispatch(set(region));
}
*/

/*<a> 관련 처리*/
function NavigationA(props) {
  const navigate = useNavigate();
  function handleGoBack() {
      navigate('/');
  }
  if(parseInt(props.mode) === 1){
    return <a className="header_bar_content" onClick={handleGoBack}>
    <div className="appdownload_logo"></div>
      {props.title}
    </a>  
  }
  else if(parseInt(props.mode) === 2){
    return <a className="header_bar_content" onClick={handleGoBack}>
      {props.title}
    </a>  
  }
  else if(parseInt(props.mode) === 3){
    return <div>
      <a className="BJ_logo" onClick={handleGoBack}></a>
    </div>
  }
  else if(parseInt(props.mode) === 5){
    return <a className="rightside_button" onClick={handleGoBack}>
    <img src="https://m.bunjang.co.kr/pc-static/resource/31370b164bc5b7cc4fef.png" 
    alt="내상점 이미지" className="search_right_property">
      </img>{props.title}</a>
  }
  else if(parseInt(props.mode) === 6){
    return <a className="rightside_button">
    <img src="https://m.bunjang.co.kr/pc-static/resource/bcc7abb5d531bcf26033.png" 
    alt="판매하기 이미지" className="search_right_property">
      </img>{props.title}</a>
  }
  else if(parseInt(props.mode) === 7){
    return <div className="leftside_button_style1">
    <a onClick={handleGoBack} target="_blank" className="leftside_button_style2">
        <b>{props.title}</b>
    </a>
    <img src="https://m.bunjang.co.kr/pc-static/resource/34a01cb11e0b14957f81.png" 
    alt="판매자센터 이미지" className="sell_center"></img>
</div>
  }
  else if(parseInt(props.mode) === 8){
    return <a onClick={handleGoBack} target="_blank" className="footer_margin">{props.title}</a>
  }
  else{
    console.log("일치하는 결과가 없습니다.")
  }
}

/*버튼관련 처리*/
function NavigationButton(props){

  if(parseInt(props.mode) === 1){
    return <button className="header_bar_content">
      <div className="bookmark_logo"></div>
      {props.title}
      </button>
  }
  else if(parseInt(props.mode) === 3){
    return <button className="rightside_button">
    <img src="https://m.bunjang.co.kr/pc-static/resource/32554a59cf002b3def10.png" 
    alt="번개톡 이미지" className="search_right_property">
      </img>{props.title}</button>
  }
  else if(parseInt(props.mode) === 4){
    return <div className="leftside_button">
    <img src="https://m.bunjang.co.kr/pc-static/resource/9ddac97c001dd6e0c2eb.png" 
    alt="메뉴 버튼 아이콘" className="menu_button"></img>
    </div>
  }
  else{
    console.log("일치하는 결과가 없습니다.")
  }
}

function Login(props){
    const navigate = useNavigate();
    function handleGoBack() {
        navigate('/Login');
    }
    return(
      <button className="header_bar_content" onClick={handleGoBack}>
          {props.title}
      </button>
    );
}

/*input관련 처리*/
function Input(props){
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const onChange = (e) => {
        setSearch(e.target.value)
        dispatch(setText(search))
    }
  const handleReset = () => {
    setSearch('검색버튼을 눌렀습니다.');
    dispatch(removeText(search))
  };

  if(parseInt(props.mode) === 1){
    return <input type="text" placeholder={"상품명, 지역명, @상점명 검색"} 
      className="search_input_box" value={search} onChange={onChange}>
  </input>
  }

  else if(parseInt(props.mode) === 2){
    return (
      <a className="search_img" onClick={handleReset} ></a>
    );

  }

  else{
    console.log("일치하는 결과가 없습니다.")
  }
}

function Adv(){
  return <div className = "adv_section2">
    <img src={process.env.PUBLIC_URL + '/img/237e17f5cbe07edc8fff.png'} alt="앱 다운로드 베너 이미지"
  className="adv_img"></img>
</div>
}

function Title(){
  return <div>
    <h2>오늘의 추천 상품</h2>
    </div>
}

function Goods(){
  return <div className="goods_backGround">
      <a className="goods_each" target="_blank" rel="noopener noreferrer">
        <div className="goods_img">
          <img src={process.env.PUBLIC_URL + 'https://item.kakaocdn.net/do/936a3cfd8572f61b631dec4e2eda5af79f5287469802eca457586a25a096fd31'} className="goods_img" alt="상품 이미지"></img>
          <div className="pay_position">
              <img src={process.env.PUBLIC_URL + '/img/번개페이이미지.svg'} alt="번개페이 이미지"></img>
          </div>
        </div>
        <div className="goods_text">
          <div className="context">Von O Vono</div>
          <div className="price">
              <div className="cost">
                  20000
              </div>
              <div className="time">
                  <span>몇 시간???</span>
              </div>
          </div>
      </div>
    </a>
  </div>
}

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/972337284_w2058.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/972522981_w2058.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/972522840_w2058.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/971133689_w3087.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/971140281_w3087.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="https://media.bunjang.co.kr/images/nocrop/969455407_w3087.jpg" alt=""></img></SwiperSlide>
      </Swiper>
    </>
  );
}

function Footer(props){
  if(parseInt(props.mode) === 1){
    return <div className="footer_margin2">
    <div className="footer_Title"> 번개장터(주) 사업자정보</div>
    <div className="footer_menu_info">
    대표이사 : 최재화, 강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;개인정보보호책임자 : 박병성
    <br/>
    사업자등록번호 : 113-86-45836&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;통신판매업신고 : 2019-서울서초-1126
    <br/>
    호스팅서비스 제공자 : Amazon Web Services (AWS)
    <br/>
    EMAIL : help@bunjang.co.kr&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FAX : 02-598-8241
    <br/>
    주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층
    <br/> 
    (서초동, 마제스타시티, 힐스테이트 서리풀)
    <br/>
    <a href="" target="_blank" className="footer_under">사업자정보 확인</a>
    </div>
    </div>
  }

  else if(parseInt(props.mode) === 2){
    return <div className="footer_margin3">
    <div className="footer_location footer_menu_info">
        <div>
            <b>번개장터(주)더현대서울점</b>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화, 강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;365-85-01581
            <br/>
            서울특별시 영등포구 여의대로 108, 지하2층(여의도동, 파크원)
        </div>
        <div>
            <b>번개장터(주)코엑스점</b>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화, 강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;142-85-27412
            <br/>
            서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동, 코엑스)
        </div>
        <div>
            <b>번개장터(주)센터필드점</b>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화, 강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;808-85-01905
            <br/>
            서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층 W124호(역삼동)(역삼동, 센터필드)
        </div>
    </div>
</div>
  }
  else{
    console.log("일치하는 결과가 없습니다.")
  }
}

/*실제 main함수로 실행해주는 부분*/
function App() {
  return (
    <div>
      <div id="background">
        <div id="header_bar">
            <div className="bookmark_login">
                <NavigationA title = "앱 다운로드" mode = "1"></NavigationA>
                <NavigationButton title = "즐겨찾기" mode = "1"></NavigationButton>
            </div>

            <div className="bookmark_login">
                <Login title = "로그인/회원가입" ></Login>
                <NavigationA title = "내 상점" mode = "2"></NavigationA>
            </div>
        </div>
      </div>
      
      <div id="top_info">
        <div id="second_header_background">
            <div className="second_header_bar">
                <NavigationA mode = "3"></NavigationA>
                <div className="search-box">
                    <div className="search">
                        <Input mode = "1"></Input>
                        <Input mode = "2"></Input>
                    </div>
                </div>

                <div className="rightside_search">
                  <NavigationButton title = "번개톡" mode = "3"></NavigationButton>
                  <NavigationA title = "내상점" mode = "5"></NavigationA>
                  <NavigationA title = "판매하기" mode = "6"></NavigationA>
                </div>
            </div>

            <div className = "second_header_bar2">
                <NavigationButton mode = "4"></NavigationButton>
                <NavigationA title = "번개장터 판매자센터" mode = "7"></NavigationA>
            </div>
        </div>
      </div>

      <div id="main_background">
        <div className = "adv_section1">
            <div className = "adv_section1_slider" dir="ltr">
              <Slider></Slider>
            </div>
        </div>

            <Adv></Adv>
        <section className="main_section">
            <div className="main_goods">
                <Title></Title>
                <div>
                  <div className="goods_view">
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                        <Goods></Goods>
                  </div>
                </div>
            </div>
        </section>
      </div>
      <div id="footer_background">
        <div className="footer_menu1">
            <div className="footer_menu2">
                <NavigationA title = "회사소개" mode = "8"></NavigationA>
                <NavigationA title = "이용약관" mode = "8"></NavigationA>
                <NavigationA title = "운영정책" mode = "8"></NavigationA>
                <NavigationA title = "개인정보처리방침" mode = "8"></NavigationA>
                <NavigationA title = "청소년보호정책" mode = "8"></NavigationA>
                <NavigationA title = "광고제휴" mode = "8"></NavigationA>
            </div>
        </div>
        <div className="footer_menu3">
            <div className="footer_menu4">
                <div>
                    <div className="footer_menu_background">
                        <Footer mode = "1"></Footer>
                        <Footer mode = "2"></Footer>
                    </div>
                </div>
                <div>
                    <div className="footer_title">
                        고객센터&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="10" height="10" viewBox="0 0 10 20" 
                        role="img"><path fill="#9b99a9" fillRule="evenodd" 
                        d="M1 20a.994.994 0 0 0 .748-.337l8-9a.999.999 0 0 0 0-1.328l
                        -8-9A1 1 0 0 0 .254 1.663L7.664 10l-7.41 8.336A.999.999 0 0 0 1 20"></path></svg>
                    </div>
                    <div className="footer_menu_info">
                        <strong>1670-2910</strong>
                        <br/>
                        운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)
                        <br/>
                        <div className="footer_display">
                            <a href="" className="footer_under footer_margin4">공지사항</a>
                            <a href="" className="footer_under footer_margin4">1:1 문의하기</a>
                            <a href="" className="footer_under">자주 묻는 질문</a>
                        </div>
                    </div>
                    <div className="footer_margin5">
                        <div className="footer_title">
                            우리은행 채무지급보증 안내
                        </div>
                        <div className="footer_menu_info">
                            <div>번개장터㈜는 회사가 직접 판매하는 상품에 한하여, </div>
                            <div>고객님의 현금 결제 금액에 대해 우리은행과 채무지급보증 계약을</div>
                            <div>체결하여 안전거래를 보장하고 있습니다.</div>
                            <br/>
                            <a href="" className="footer_under">서비스 가입사실 확인</a>
                            <div className="rights-copy">Ⓒ Bungaejangter. Inc All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_menu5">
                <div className="footer_menu_background">
                    <a href="" target="_blank" className="footer_botttom">
                        <img src="https://m.bunjang.co.kr/pc-static/resource/ee757469a142ab4f2f48.png" alt="ISMS 인증마크"
                        className="footer_bottom_img"></img>
                        <div>
                            [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은 물리적 인프라 제외)
                            <div>
                                [유효기간] 2021.05.18 ~ 2024.05.17
                            </div>
                        </div>
                    </a>
                </div>
                <div className="footer_menu_info">
                    <div className="footer_botttom footer_margin2">
                        번개장터㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 
                        전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령 및 번개장터㈜의 약관에 따라 
                        상품, 상품정보, 거래에 관한 책임은 개별 판매자에게 귀속하고, 
                        번개장터㈜는 원칙적으로 회원간 거래에 대하여 책임을 지지 않습니다. 
                        다만, 번개장터㈜가 직접 판매하는 상품에 대한 책임은 번개장터㈜에게 귀속합니다.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
