'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000', // 修改弹窗背景颜色
        },
      },
    },
    // MuiDialogTitle: {
    //   styleOverrides: {
    //     root: {
    //       color: '#1976d2', // 修改标题颜色
    //     },
    //   },
    // },
    // MuiDialogContent: {
    //   styleOverrides: {
    //     root: {
    //       padding: '20px', // 修改内容的padding
    //     },
    //   },
    // },
  },
})

export { theme }
