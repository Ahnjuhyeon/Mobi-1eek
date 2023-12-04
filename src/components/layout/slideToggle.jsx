import { useState } from "react";
import { styled } from "styled-components";

const SliceToggle = () => {
  // 강사님.. 죄송해요 왜 useState에 콜백함수를 사용한걸까요..?
  //mdn을 봤는데.. 너무 간단한 내용만 있꾸...
  // localStorage : 브라우저에서 제공하는 간단한 데이터 저장소
  const [isShowClientList, setIsShowClientList] = useState(() => {
    const storedValue = localStorage.getItem("isShowClientList");
    // 키값이며, 키값이 없으면 null 이 반환됨
    return storedValue ? JSON.parse(storedValue) : false;
    // storedValue 가 true면 JSON 형식의 문자열을 JavaScript 객체로 변환
  });

  const [isShowProductList, setIsShowProductList] = useState(() => {
    const storedValue = localStorage.getItem("isShowProductList");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const onClickHover = () => {
    // 상태 토글 및 localStorage에 저장
    setIsShowClientList((prev) => {
      localStorage.setItem("isShowClientList", JSON.stringify(!prev));
      //JavaScript 객체를 JSON 형식의 문자열로 변환
      return !prev;
    });
  };

  // 원래 이렇게 했다가 위에로 바꿈
  //   const onClickHover = () => {
  //     setIsShowClientList((prev) => !prev);
  //   };

  //-------------------------------------
  const onClickProductHover = () => {
    setIsShowProductList((prev) => {
      localStorage.setItem("isShowProductList", JSON.stringify(!prev));
      return !prev;
    });
  };
  return (
    <>
      <Wrapper>
        <p onClick={onClickHover}>회원관리</p>
        <ContentWrapper show={isShowClientList}>
          <ul>
            <li>회원목록</li>
            <li>회원등록</li>
          </ul>
        </ContentWrapper>
        <p onClick={onClickProductHover}>상품관리</p>
        <ContentWrapper show={isShowProductList}>
          <ul>
            <li>상품목록</li>
            <li>상품등록</li>
          </ul>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};
export default SliceToggle;

const Wrapper = styled.div`
  background-color: #a6faff;
  color: black;
  position: absolute;
  left: 100px;
  width: 172px;
  height: 500px;

  p {
    font-size: 20px;
    font-weight: 800;
    margin: 0;
    padding-top: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ContentWrapper = styled.div`
  overflow: hidden;
  /* background-color: beige; */
  max-height: ${(props) => (props.show ? "200px" : "0")};
  transition: max-height 0.3s ease-in-out;

  ul {
    list-style-type: none;
    padding: 0;

    & > li {
      &:hover {
        background-color: #d9d9d9;
      }
    }
  }
`;
/*
내가 하고싶은것
1. p를 클릭하면 ul들이 보였으면 좋겠음 
2. ... 새로고침을 해도 상태가 유지 되면 좋겠는데...
*/
