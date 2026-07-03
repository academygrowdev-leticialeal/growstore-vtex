import React from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles.css'

const ShareButton = () => {
  const product = useProduct()

  const handleShare = async () => {
    const shareData = {
      title: product?.product?.productName ?? document.title,
      text: product?.product?.productName ?? '',
      url: window.location.href,
    }

    // Verifica se o navegador suporta a Web Share API
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        // Usuário cancelou o compartilhamento ou deu erro
        console.log('Compartilhamento cancelado', error)
      }
    } else {
      // Fallback pra navegadores sem suporte
      try {
        await navigator.clipboard.writeText(shareData.url)
        alert('Link copiado para a área de transferência!')
      } catch (error) {
        console.error('Não foi possível copiar o link', error)
      }
    }
  }

  return (
    <button onClick={handleShare} className={styles.shareButton}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    </button>
  )
}

export default ShareButton