import React, { useReducer, useEffect } from "react";
import axios from "axios";

// useReducer를 사용하여 LOADING, SUCCESS, ERROR 액션에 따라 다르게 처리하기
// useReducer로 구현했을 때의 장점은 useState의 setState 함수를 여러번 사용하지 않아도 된다는 점과,
// 리듀서로 로직을 분리하여 다른 곳에서 쉽게 재사용이 가능한 점
function reducer(state, action) {
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function UsersUseReducer() {
    const[state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async () => {
        dispatch({type: 'LOADING'});
        try{
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            dispatch({type: 'SUCCESS', data: response.data});
        }catch(e) {
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const {loading, data: users, error} = state;    // state.data를 users키워드로 조회

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return null;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default UsersUseReducer;