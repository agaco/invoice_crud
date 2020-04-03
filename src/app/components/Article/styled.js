import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid red;
`;

export const Sum = styled.div`
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

export const Label = styled.span`
  font-weight: bold;
  text-align: center;
`;

export const Image = styled.div`
  height:200px;
  width: 100%;
  background: url(${(props)=>props.src}) center center;
  background-size: cover;
`;

