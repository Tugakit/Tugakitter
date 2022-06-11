import styled from 'styled-components';

const Button = styled.button`
  width: 225px;
  height: 52px;
  font-size: 17px;
  font-weight: bolder;
  line-height: 20px;
  letter-spacing: normal;
  text-align: center;
  background: #1d9bf0;
  border-radius: 9999px;
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
`;
const Tweeter = () => {
  return <Button>Suivez-moi!</Button>;
};

export default Tweeter;
