export const pagesPath = {
  $url: (url?: { hash?: string }) => ({
    hash: url?.hash,
    pathname: "/" as const,
  }),
  login: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/login" as const,
    }),
  },
  signup: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/signup" as const,
    }),
  },
  test: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/test" as const,
    }),
  },
};

export type PagesPath = typeof pagesPath;
