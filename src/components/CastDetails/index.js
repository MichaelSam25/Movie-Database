import './index.css'

const CastDetails = props => {
  const {castDetails} = props
  const {originalName, imageUrl, characterName} = castDetails

  return (
    <>
      <li className="similar-product-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          className="similar-product-img"
          alt="img"
        />
        <p className="similar-product-title">Original Name: {originalName}</p>
        <p className="similar-product-title">Character Name: {characterName}</p>
      </li>
    </>
  )
}

export default CastDetails
