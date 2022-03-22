export default function Lection({ lection }) {
  return (
    <div className="col-8 lection">
      <h1>{lection.title}</h1>
      <p>{lection.content}</p>

      <div className="videos">
        {lection.video && (
          <iframe
            width="100%"
            height="315"
            src={lection.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {lection.img && <img src={lection.img} width="100%" />}
    </div>
  );
}
