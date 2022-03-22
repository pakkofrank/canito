import { useParams } from "react-router-dom";
import { useState } from "react";
import json from "../../cursos.json";
import Lection from "../components/Lection";

export default function CursoPage() {
  const [index, setIndex] = useState(0);
  let params = useParams();

  const curso = json[params.id];
  const lection = curso.lections[index];

  return (
    <div>
      <h3>Este es el curso: {params.id}</h3>
      <div className="row">
        <div className="list-group col-4">
          {curso.lections.map((leccion, i) => (
            <button
              key={i}
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

        <Lection lection={lection} />
      </div>
    </div>
  );
}
