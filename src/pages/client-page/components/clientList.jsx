// import { useState } from 'react';
// import styled from "styled-components";

import { useState } from "react";
import { MockUsersData } from "../../../__mock__/faker-data";
import FilterPage from "../../../components/filter";

const ClientList = () => {
  const totalUsers = MockUsersData(100);
  console.log(`mock`, totalUsers);
  const columns = [
    "고유번호",
    "이름",
    "생년월일",
    "연락처",
    "마지막 로그인 시간",
  ];

  // 페이지당 user 수
  const [usersPerPage, setUsersPerPage] = useState(20);
  // 현재 페이지 번호
  // const [currentPage, setCurrentPage] = useState(1);
  // 페이지의 첫 게시물의 위치를 담음
  // const offset = (currentPage - 1) * usersPerPage;
  // const setPage = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <div>
      <FilterPage
        totalUsers={totalUsers}
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
      />
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
          {totalUsers.map((user, idx) => (
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
