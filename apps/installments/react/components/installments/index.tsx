import React from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles.css'

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

const Installments = () => {
  const product = useProduct()

  const commertialOffer =
    product?.selectedItem?.sellers?.[0]?.commertialOffer

  const price = commertialOffer?.Price ?? 0

  // parcelamento em até 12x sem juros
  const maxInstallments = 12
  const installmentValue = price / maxInstallments

  // desconto de 5% no Pix
  const pixDiscountPercentage = 0.05
  const pixPrice = price * (1 - pixDiscountPercentage)

  if (!commertialOffer) return null

  return (
    <div>
      <p className={styles.installments}>
        Em até <strong>{maxInstallments}x de {formatCurrency(installmentValue)}</strong> sem juros no cartão
      </p>
      <p className={styles.pix}>
        ou {formatCurrency(pixPrice)} à vista no Pix (5% de desconto)
      </p>
    </div>
  )
}

export default Installments