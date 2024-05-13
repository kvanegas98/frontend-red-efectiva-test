import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getDataPosts, getDataUsers } from '../../services/api';
import Filters from '../../components/Grid/Filter';

const GridLayout = () => {
    const [dataPosts, setDataPost] = useState([]);
    const [dataUsers, setDataUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getDataUsers();
                setDataUsers(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getDataPosts();
                setDataPost(postData.map(post => ({ ...post, user: dataUsers.find(user => user.id === post.userId) })));
            } catch (error) {
                setError(error.message);
            }
        };

        if (dataUsers.length > 0) {
            fetchPosts();
        }
    }, [dataUsers]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Filters dataPosts={dataPosts} setDataPost={setDataPost} />
            <div className='table-responsive'>
                <Table striped bordered hover responsive className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Correo</th>
                            <th>Titulo</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPosts.map((res, index) => (
                            <tr key={index}>
                                <td>{res?.user?.name || res?.user[0]?.name}</td>
                                <td>{res?.user?.email || res?.user[0]?.email}</td>
                                <td>{res?.title}</td>
                                <td>{res?.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default GridLayout;
