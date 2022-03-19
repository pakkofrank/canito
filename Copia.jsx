import { useParams } from "react-router-dom";
import { useState } from "react";

const lecciones = [
  {
    id: 1,
    title: "Leccion 1",
    content: "Primera leccion",
    img: "https://www.geekmi.news/__export/1636060699254/sites/debate/img/2021/11/04/raphtalia.jpg_1339198940.jpg",
  },
  { id: 2, title: "Leccion 2", content: "Segunda leccion" },
  { id: 3, title: "Leccion 3", content: "Tercera leccion" },
  { id: 4, title: "Leccion 4", content: "Cuarta leccion" },
  { id: 5, title: "Leccion 5", content: "Quinta leccion" },
  { id: 6, title: "Leccion 6", content: "Sexta leccion" },
];

export default function CursoPage() {
  const [index, setIndex] = useState(0);

  const leccion = lecciones[index];

  let params = useParams();

  return (
    <div>
      <h3>Este es el curso: {params.id}</h3>
      <div className="row">
        <div className="list-group col-4">
          {lecciones.map((leccion, i) => (
            <button
              key={leccion.id}
              type="button"
              className={`list-group-item list-group-item-action ${
                index == i ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            >
              {leccion.title}
            </button>
          ))}
        </div>

        <div className="col-8">
          <h1>{leccion.title}</h1>
          <p>{leccion.content}</p>
          {leccion.img && <img src={leccion.img} width="100%" />}
        </div>
      </div>
    </div>
  );
}
