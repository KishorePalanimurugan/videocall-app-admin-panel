import { post } from './api_helper'

export const handleTokenRefresh = async () => {
  const refreshToken = JSON.parse(localStorage.getItem('authUser'))?.tokens?.refresh?.token

  try {
    const response = await post('/refresh-token', {
      refresh_token: refreshToken,
    })
    const newAccessToken = response.data.access_token
    console.log(newAccessToken)

    // Update the new access token in session storage
    sessionStorage.setItem('accessToken', JSON.stringify(newAccessToken))
  } catch (error) {
    console.error('Error refreshing token:', error)
    // Handle error (e.g., redirect to login page)
  }
}
