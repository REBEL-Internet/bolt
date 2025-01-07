import { useState, useEffect } from "react"
import { DiskData } from "@/types"
import { fetchDiskData } from "@/lib/sheets"

export function useDiskData() {
  const [data, setData] = useState<DiskData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const diskData = await fetchDiskData()
        setData(diskData)
        setError(null)
      } catch (err) {
        setError("Failed to load disk data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading, error }
}