// src/App.tsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Search
        </NavLink>
        <NavLink
          to="saved"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Saved
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
