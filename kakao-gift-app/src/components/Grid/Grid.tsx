import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export default Grid;
