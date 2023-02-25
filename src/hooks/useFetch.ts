import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import useSWR from "swr";

import firebaseApp from "../lib/firebase";

type useFetchReturn<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export const useFetch = <T extends {}>(key: string): useFetchReturn<T> => {
  const auth = getAuth(firebaseApp);
  const [user, loading, error] = useAuthState(auth);

  const getAuthRequestHeaders = async () => {
    return {
      headers: {
        Authorization: (await user?.getIdToken()) || "",
      },
    };
  };

  const { data, error: swrError } = useSWR<T, Error>(key, async () => {
    const reqOptions = await getAuthRequestHeaders();
    return await fetch(key, reqOptions)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("error");
        }
      })
      .catch((e) => {
        throw e;
      });
  });

  if (loading) {
    return {
      data: null,
      error: error || null,
      loading: true,
    };
  }
  return {
    data: data || null,
    error: swrError || null,
    loading: !data && !error,
  };
};
