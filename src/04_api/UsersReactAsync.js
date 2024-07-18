import React, { useState } from "react";
import axios from "axios";
import  { useAsync } from 'react-async';
import User from "./UserReactAsync";

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'    
    );
    return response.data;
}

function UsersReactAsync() {
    const [userId, setUserId] = useState(null);
    // reload함수를 사용하면 데이터를 다시 불러 올 수 있음. 그러면 컴포넌트를 렌더링하는 시점부터 데이터를 불러오게 됨
    // 렌더링 시점이 아닌  사용자의 특정 인터랙션에 따라 API를 호출하고 싶을 땐 promiseFn 대신 deferFn을 사용하고, reload 대신 run을 사용하면 됨 
    const { data: users, error, isLoading, reload } = useAsync({
        promiseFn: getUsers
    });

    if(isLoading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return <button onClick={reload}>불러오기</button>;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}

export default UsersReactAsync;