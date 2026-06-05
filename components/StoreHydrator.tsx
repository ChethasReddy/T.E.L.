'use client'

import { useEffect } from 'react'

import { useDrillStore } from '@/lib/store'

export default function StoreHydrator() {
  useEffect(() => {
    void useDrillStore.persist.rehydrate()
  }, [])
  return null
}
