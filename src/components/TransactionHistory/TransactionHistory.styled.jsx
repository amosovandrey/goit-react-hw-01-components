import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 16px;

  padding: 24px;
  max-width: 320px;
  height: fit-content;
  border-radius: 20px;

  text-align: left;
  background: #ededed;
  font-family: 'Nunito', sans-serif;
`;

export const TableHeader = styled.thead`
  background: #a4bdb7;
`;

export const TableHeaderItem = styled.th`
  border-width: 1px;
  border-color: grey;
  border-style: solid;

  font-size: 1.05em;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-bottom: 16px;
  padding: 8px;

  background-image: linear-gradient(to right, #d7a548 55%, #000000 45%);
  background-size: 220% 100%;
  background-position: 100% 50%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-repeat: no-repeat;
  transition: 0.5s ease-out;

  &:hover {
    background-position: 0% 50%;
  }
`;

export const TableBody = styled.tbody`
  justify-content: center;
  align-items: flex-start;
`;

export const TableRow = styled.tr`
  & :hover {
  }
`;

export const TableRowItem = styled.td`
  border-width: 1px;
  border-color: grey;
  border-style: solid;
  padding: 8px;
  font-size: 0.9em;

  transition: 0.25s ease-out;

  ${TableRow}:hover & {
    background: #d7a548;
    font-weight: bolder;
  }
`;
