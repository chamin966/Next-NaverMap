import { styled } from 'styled-components';
import { LiaAngleRightSolid } from 'react-icons/lia';

const SearchContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;

  z-index: 101;
  background-color: white;
  width: 390px;
  height: 100vh;
  box-shadow: 0px 0px 15px 0px #999;
  padding: 15px 25px;
`;

const SearchBar = styled.input`
  padding-left: 45px;
  height: 42px;
  width: 290px;
  border: 1.6px solid #19ce60;
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const FoldingButton = styled.button`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  height: 49px;
  width: 22px;
  background-color: white;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: aliceblue;
    color: #3b5bff;
  }
`;

function SearchSection() {
  return (
    <SearchContainer>
      <SearchBar placeholder="식당 검색"></SearchBar>
      <FoldingButton>
        <LiaAngleRightSolid size={20}>접기</LiaAngleRightSolid>
      </FoldingButton>
    </SearchContainer>
  );
}

export default SearchSection;
