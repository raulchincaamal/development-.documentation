import { useRouter } from "next/router"

const config = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s –  Documentation Develop'
      }
    }
  },
  logo: <span>Documentation Develop</span>,
}

export default config