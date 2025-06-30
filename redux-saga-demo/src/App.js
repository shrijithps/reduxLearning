import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsersRequest } from './features/user/userSlice';
import { selectUsers, selectLoading, selectError } from './features/user/userSelectors';
import {fetchPostsRequest} from "./features/user/postSlice";
import {selectPosts, selectPostsError, selectPostsLoading} from "./features/user/postSelector";


export default function App() {
    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const posts = useSelector(selectPosts);
    const postsLoading = useSelector(selectPostsLoading);
    const postsError = useSelector(selectPostsError);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
        <ul>
            <h1>Data</h1>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        <button
            type="button"
            onClick={() => {dispatch(fetchPostsRequest())}}
            >
            Request Posts
            </button>

            {posts.length > 0 && (
                <ul>
                    <h2>Posts</h2>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    )
                    )}
                </ul>
                )
            }
        </div>
    );
}
