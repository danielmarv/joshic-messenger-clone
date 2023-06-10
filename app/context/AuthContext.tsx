'use client';

import { SessionProviser } from "next-auth/react";

interface AuthContextProps {
    children: React.ReactNode;
}

export default function AuthContext({
    children
} : AuthContextProps) {
    return <SessionProviser>{children}</SessionProviser>
}