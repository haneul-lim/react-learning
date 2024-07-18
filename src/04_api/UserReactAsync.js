import React from "react";
import axios from "axios";
import { useAsync } from "react-async";

async function getUser({ id }) {    // useAsync를 사용할 땐 프로미스를 반환하는 함수의 파라미터를 객체 형태로 하여야 함
    const response =  await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return response.data;
}

function UserReactAsync({ id }) {
    const {data: user, error, isLoading} = useAsync({
        promiseFn: getUser,
        id,
        watch: id   // watch값에 특정 값을 넣어주면 이 값이 바뀔 때마다 promiseFn에  넣은 함수를 다시 호출해줌
    });

    if(isLoading) return <div>로딩중 ... </div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    );
}

export default UserReactAsync;