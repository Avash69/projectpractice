import { useEffect, useMemo, useState } from 'react'

export default function useFetch(url, options) {
  const opts = useMemo(() => options, [options])
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(Boolean(url))

  useEffect(() => {
    let cancelled = false
    async function run() {
      if (!url) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(url, opts)
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (e) {
        if (!cancelled) setError(e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [url, opts])

  return { data, error, loading }
}

