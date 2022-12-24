import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebaseApp from '../lib/firebase'
import useSWR from 'swr'

type useFetchReturn<T> = {
  data: T | null
  loading: boolean
  error: Error | null
}

export const useFetch = <T extends {}>(key: string): useFetchReturn<T> => {
  const auth = getAuth(firebaseApp)
  const [user, loading, error] = useAuthState(auth)

  const getAuthRequestHeaders = async () => {
    return {
      headers: {
        Authorization: (await user?.getIdToken()) || '',
      },
    }
  }

  const { data, error: swrError } = useSWR<T, Error>(key, async () => {
    const reqOptions = await getAuthRequestHeaders()
    return await fetch(key, reqOptions)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('error')
        }
      })
      .catch((e) => {
        throw e
      })
  })

  if (loading) {
    return {
      data: null,
      loading: true,
      error: error || null,
    }
  }
  return {
    data: data || null,
    loading: !data && !error,
    error: swrError || null,
  }
}