import styled from "styled-components";

export const Section = styled.div`
  background-color: rgb(223,230,238);
  width: 100vw;
  max-width: 1000px;
  min-width: 420px;
  min-height: 100vh;
  padding: 20px;
`;

export const TaskGrid = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const ButtonImage = styled.button`
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  margin: 10px;
  border: none;
  &:hover {
    background-color: transparent;
    transform: scale(1.3);
  }
`;

export const LikeButton = styled(ButtonImage)`
  background-image: url("https://cdn-icons-png.flaticon.com/256/2107/2107845.png");
`;

export const CloseButton = styled(ButtonImage)`
  background-image: url("https://cdn-icons-png.flaticon.com/512/6861/6861362.png");
`;

export const Contain = styled.div`
margin: 5px 0 5px 0;
`;
