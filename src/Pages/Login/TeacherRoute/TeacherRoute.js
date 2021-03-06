import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const TeacherRoute = ({ children, ...rest }) => {

    const { user, teacher, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && teacher ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};
export default TeacherRoute;