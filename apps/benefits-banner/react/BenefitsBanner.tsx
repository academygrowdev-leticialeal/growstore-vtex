import React from 'react'

type Props = {
  name: string
}

function BenefitsBanner({ name }: Props) {

  return <div>Hey, {name}</div>
}

export default BenefitsBanner
