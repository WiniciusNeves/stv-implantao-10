
import { useAuth, UserRole } from './AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  roles: UserRole[];
  children: ReactNode;
}

export function ProtectedRoute({ roles, children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user || !roles.includes(user.role)) {
    // If the user is not logged in or their role is not in the allowed list,
    // don't render the children.
    return null;
  }

  // If the user has the required role, render the children.
  return <>{children}</>;
}
