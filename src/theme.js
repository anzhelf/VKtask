import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
		background: {
			default: '#fff',
			paper: '#f4f6f8',
		},
		text: {
			primary: '#000',
		},
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#848688',
						borderWidth: '1px',
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					'&.Mui-focused': {
						color: '#848688',
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-checked': {
						color: '#646cff',
					},
				},
			},
		},
	},
})

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9',
		},
		background: {
			default: '#121212',
			paper: '#1e1e1e',
		},
		text: {
			primary: '#fff',
		},
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#848688',
						borderWidth: '1px',
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					'&.Mui-focused': {
						color: '#848688',
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-checked': {
						color: '#646cff',
					},
				},
			},
		},
	},
})

export { darkTheme, lightTheme }
