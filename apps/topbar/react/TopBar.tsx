import React from 'react'

type Props = {
  name: string
}

function TopBar({ name }: Props) {

  return <div>Hey, {name}</div>
}

export default TopBar
