import React from 'react'
import styles from './styles/stylesBanner.css'

interface Props {
  tag?: string
  title?: string
  highlightedWord?: string
  subtitle?: string
  btnPrimaryLabel?: string
  btnPrimaryHref?: string
  btnSecondaryLabel?: string
  btnSecondaryHref?: string
  stat1Number?: string
  stat1Label?: string
  stat2Number?: string
  stat2Label?: string
  stat3Number?: string
  stat3Label?: string
  imageUrl?: string
  imageAlt?: string
}

interface HomeBannerComponent extends React.FC<Props> {
  schema?: object
}

const HomeBanner: HomeBannerComponent = ({
  tag = '— LOJA OFICIAL',
  title = 'Gear para',
  highlightedWord = 'Growdevers',
  subtitle = 'Produtos exclusivos e customizados das marcas Growdev e Growlabs. Para quem vive e respira tecnologia.',
  btnPrimaryLabel = 'Ver Todos os Produtos →',
  btnPrimaryHref = '/growlabs',
  btnSecondaryLabel = 'Growdev',
  btnSecondaryHref = '/growdev',
  stat1Number = '9+',
  stat1Label = 'Categorias',
  stat2Number = '50+',
  stat2Label = 'Produtos',
  stat3Number = '1.5k+',
  stat3Label = 'Growdevers',
  imageUrl = 'https://partnersigrowdev.vtexassets.com/assets/vtex.file-manager-graphql/images/f784535a-9fb8-4771-9ffe-2599e387e316___f5b739dd734a4deed7a06909d096324f.jpeg',
  imageAlt = 'Produtos Grow',
}) => {
  return (
    <div className={styles.homeBanner}>
      <img src={imageUrl} alt={imageAlt} className={styles.bannerImage} />
      <div className={styles.bannerContent}>
        <span className={styles.bannerTag}>{tag}</span>
        <h1 className={styles.bannerTitle}>
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
          <span className={styles.bannerHighlight}>{highlightedWord}</span>
        </h1>
        <p className={styles.bannerSubtitle}>{subtitle}</p>
        <div className={styles.bannerButtons}>
          <a href={btnPrimaryHref} className={styles.btnPrimary}>
            {btnPrimaryLabel}
          </a>
          <a href={btnSecondaryHref} className={styles.btnSecondary}>
            {btnSecondaryLabel}
          </a>
        </div>
        <div className={styles.bannerStats}>
          <div className={styles.statItem}>
            <strong>{stat1Number}</strong>
            <span>{stat1Label}</span>
          </div>
          <div className={styles.statItem}>
            <strong>{stat2Number}</strong>
            <span>{stat2Label}</span>
          </div>
          <div className={styles.statItem}>
            <strong>{stat3Number}</strong>
            <span>{stat3Label}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeBanner.schema = {
  title: 'Home Banner',
  description: 'Banner principal da home',
  type: 'object',
  properties: {
    tag: { title: 'Tag superior', type: 'string', default: '— LOJA OFICIAL' },
    title: { title: 'Título', type: 'string', default: 'Gear para' },
    highlightedWord: { title: 'Palavra destacada', type: 'string' },
    subtitle: {
      title: 'Subtítulo',
      type: 'string',
      default: 'Produtos exclusivos...',
    },
    btnPrimaryLabel: { title: 'Botão primário - texto', type: 'string' },
    btnPrimaryHref: { title: 'Botão primário - link', type: 'string' },
    btnSecondaryLabel: {
      title: 'Botão secundário - texto',
      type: 'string',
      default: 'Growdev',
    },
    btnSecondaryHref: { title: 'Botão secundário - link', type: 'string' },
    stat1Number: { title: 'Stat 1 - número', type: 'string' },
    stat1Label: { title: 'Stat 1 - label', type: 'string' },
    stat2Number: { title: 'Stat 2 - número', type: 'string' },
    stat2Label: { title: 'Stat 2 - label', type: 'string' },
    stat3Number: { title: 'Stat 3 - número', type: 'string' },
    stat3Label: { title: 'Stat 3 - label', type: 'string' },
    imageUrl: {
      title: 'URL da imagem',
      type: 'string',
      widget: { 'ui:widget': 'image-uploader' },
    },
    imageAlt: { title: 'Alt da imagem', type: 'string' },
  },
}

export default HomeBanner
