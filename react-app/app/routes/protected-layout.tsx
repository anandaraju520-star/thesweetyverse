import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedLayout() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  async function checkAuthentication() {
    try {
      const response = await fetch(
        "https://api.thesweetyverse.com/api/auth/me",
        {
          method: "GET",
          credentials: "include",
        }
      );

      setAuthenticated(response.ok);
    } catch {
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}