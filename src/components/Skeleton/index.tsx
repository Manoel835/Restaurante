import React from 'react'
import { SkeletonElement } from './styles'
export interface SkeletonProps {
  type: 'title' | 'thumbnail' | 'text' | 'image'
}

export default function Skeleton({type}: SkeletonProps) {
  return <SkeletonElement type={type} />
}
