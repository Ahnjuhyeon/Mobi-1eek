// import { useState } from 'react';
// import styled from "styled-components";

import { MockUsersData } from "../../../__mock__/faker-data";

const ClientList = () => {
  const mock = MockUsersData(10);
  console.log(`mock`, mock);
  const columns = [
    "고유번호",
    "이름",
    "생년월일",
    "연락처",
    "마지막 로그인 시간",
  ];

  return (
    <div>
      <table>
        <thead>
          {/* 행 */}
          <tr>
            {columns.map((column) => (
              // th: 열
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {mock.map((user, idx) => (
            <tr key={idx}>
              <td>{user.id}</td>
              <td>{user.nickName}</td>
              <td>{JSON.stringify(user.birth)}</td>
              <td>{user.phoneNumber}</td>
              <td>{JSON.stringify(user.createdAt)}</td>
              {/* <td>{JSON.stringify(createdAt)}</td>  */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

// const Wrapper = styled.div``;

// const S = {
//   Wrapper,
// };
