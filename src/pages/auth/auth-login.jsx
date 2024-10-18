import { LoginForm } from '@dashboard/components/Forms/LoginForm/LoginForm'
import { useAuthContext } from '@dashboard/context/AuthContext'
import { useValidateLogged } from '@dashboard/hooks/useLogin/useValidateLogged'
import GlobalStyle from '@dashboard/style/GlobalStyles'
import { validateExpDate } from '@dashboard/utils/validateExpiredDate'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function AuthLogin() {
	const { loginData, logout } = useAuthContext()
	const { isLogged, fetchIsLogged } = useValidateLogged()
	const router = useRouter()

	useEffect(() => {
		if (isLogged) {
			router.push('/dashboard')
			return
		}
		fetchIsLogged()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogged, loginData])

	return (
		<>
			<GlobalStyle />
			<LoginForm />
		</>
	)
}

export default AuthLogin
