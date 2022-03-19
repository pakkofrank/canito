import { useParams } from "react-router-dom";
import { useState } from "react";
import Leccion1 from "../components/Curso1/Leccion1";
import Leccion2 from "../components/Curso1/Leccion2";
import Leccion3 from "../components/Curso1/Leccion3";

const lecciones = [
  {
    id: 1,
    title: "Leccion 1",
    component: <Leccion1 />,
  },
  {
    id: 2,
    title: "Leccion 2",
    component: <Leccion2 />,
  },
  {
    id: 3,
    title: "Leccion 3",
    component: <Leccion3 />,
  },
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

        <div className="col-8">{leccion.component}</div>
      </div>
    </div>
  );
}
