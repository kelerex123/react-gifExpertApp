

export const GifGridItem = ({title="tituloDefecto", url="https://www.urlDefecto.com"}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}


