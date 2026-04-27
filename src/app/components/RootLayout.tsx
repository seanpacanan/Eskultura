import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "../context/AuthContext";

export function RootLayout() {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            fontFamily: "'Inter', sans-serif",
          },
        }}
      />
    </AuthProvider>
  );
}
