const FilterPage = ({ totalUsers, usersPerPage, setUsersPerPage }) => {
  // console.log(totalUsers);
  // const [usersPerPage, setUsersPerPage] = useState(20);
  const onChangeFilter = (e) => {
    const value = e.target.value;
    // console.log("야", value); //나오구
    // 선택한 옵션에 따라 usersPerPage 상태를 설정합니다.
    if (value === "20개씩") {
      setUsersPerPage(20);
    } else if (value === "50개씩") {
      setUsersPerPage(50);
    }
  };
  return (
    <>
      <div>
        <select
          // onChange={(e) => {
          //   const value = e.target.value;
          //   console.log("야", value);
          // }}
          onChange={onChangeFilter}
        >
          <option>게시물보기</option>
          <option>20개씩</option>
          <option>50개씩</option>
        </select>
        <select>
          <option>조회목록</option>
          <option>이름</option>
          <option>로그인</option>
          <option>생년월일</option>
        </select>
      </div>

      {/* <tbody>
          {totalUsers.slice(0, usersPerPage).map((user, idx) => (
            <tr key={idx}>
              <td>{user.id}</td>
              <td>{user.nickName}</td>
              <td>{JSON.stringify(user.birth)}</td>
              <td>{user.phoneNumber}</td>
              <td>{JSON.stringify(user.createdAt)}</td>
            </tr>
          ))}
        </tbody> */}
    </>
  );
};
export default FilterPage;
