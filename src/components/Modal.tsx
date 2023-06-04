import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  width: 60%;
  height: 90%;
  z-index: 3;
  position: fixed;
  top: 80px;
  left: 20%;
  overflow: hidden;
  border-radius: 15px;
`;

const Area = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: -1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  z-index: 4;
`;

function Modal({ setModalOpen, id }) {
  const location = document.location.href;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Background>
        <Container>
          <Button onClick={closeModal}>X</Button>
          <Area>
            <Iframe src={`${location}character/${id}`}></Iframe>
          </Area>
        </Container>
      </Background>
    </>
  );
}
export default Modal;
