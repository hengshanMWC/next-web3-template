'use client'
import { Box, alpha, useTheme } from '@mui/material'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.background.default, 1),
        minWidth: '100vw',
        minHeight: '100vh',
        overflow: 'auto',
        color: theme.palette.common.white,
      }}
    >
      {children}
    </Box>
  )
}
