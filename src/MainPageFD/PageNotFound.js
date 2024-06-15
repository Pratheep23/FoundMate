import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PageNotFound() {
    return <Navigate to="/" />;
}
