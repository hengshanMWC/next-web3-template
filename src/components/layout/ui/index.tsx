import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import MainLayout from './main'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function UILayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <MainLayout>{children}</MainLayout>

        {/* Toast 组件 */}
        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={3000}
          hideProgressBar
          style={{ width: '400px' }}
        />
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
