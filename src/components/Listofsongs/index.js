const SongsList = props => {
  const {songDetails} = props
  const {imageUrl, name, genre, duration} = songDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
    </li>
  )
}

export default SongsList
