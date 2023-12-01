import { useRouter } from "next/router"

const config = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s –  Development Documentation'
      }
    }
  },
  logo: <span>Development Documentation</span>,
}

export default config