import { ReactNode } from 'react';

export default function ComplexDashboardLayout({
  children,
  revenue,
  users,
  notifications,
  login,
}: {
  children: ReactNode,
  revenue: ReactNode,
  users: ReactNode,
  notifications: ReactNode,
  login: ReactNode,
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className='flex'>
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        <div className="flex flex-1">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
