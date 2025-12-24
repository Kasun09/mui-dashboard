import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Alert,
    Typography,
} from "@mui/material";
import { api } from "../services/api";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Pagination state
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    // Slice users for current page
    const paginatedUsers = users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get("/users");
                setUsers(res.data.users);
            } catch (err) {
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;
    if (!loading && users.length === 0) {
        return <Alert severity="info">No users found.</Alert>;
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Users
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Age</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedUsers.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                            >
                                <TableCell>{user.id}</TableCell>
                                <TableCell>
                                    {user.firstName} {user.lastName}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ marginTop: 16 }}>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                        Previous
                    </button>
                    <span style={{ margin: "0 8px" }}>Page {page}</span>
                    <button
                        disabled={page * rowsPerPage >= users.length}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </TableContainer>
        </>
    );
};

export default Users;
