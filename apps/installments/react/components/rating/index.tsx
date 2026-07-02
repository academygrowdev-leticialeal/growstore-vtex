import React from 'react'
import styles from './styles.css'

// Responsavel por mostrar a avaliacao do produto
const RATING = 3.8
// Quantidade de avaliacoes
const REVIEWS_COUNT = 35
// Quantidade de estrelas
const MAX_STARS = 5

const ProductRating = () => {
  // Calcula a quantidade de estrelas preenchidas
  const filledStars = Math.round(RATING)

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.starsWrapper}>
        {Array.from({ length: MAX_STARS }).map((_, index) => (
          <span
            key={index}
            className={index < filledStars ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>

      <span className={styles.reviews}>
        {RATING} ({REVIEWS_COUNT} avaliações)
      </span>

      <a href="#avaliacoes" className={styles.reviewsLink}>
        Ver avaliações
      </a>
    </div>
  )
}

export default ProductRating