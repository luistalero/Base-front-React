import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../Loading";
import type { ReactNode } from "react";
import { publicRoutes } from "src/routes";

type Props = {
    children: ReactNode;
    loading: boolean;
};

const RoutesWithLoading = ({ children, loading }: Props) => {
    return loading ? (
        <Loading />
    ) : (
        <Routes>
            {children}
            <Route path="*" element={<Navigate to={`${publicRoutes.NOT_FOUND}`} />} />
        </Routes>
    );
};

export default RoutesWithLoading;
