import Curso from "../components/Curso";

const cursos = [
  {
    title: "Curso 1",
    num: 1,
    img: "https://somoskudasai.com/wp-content/uploads/2020/06/portada_tate-no-yuusha-raphtalia.jpg",
  },
  {
    title: "Curso 2",
    num: 2,
    img: "https://www.anmosugoi.com/wp-content/uploads/2019/08/tate-no-696x392.jpg",
  },
  {
    title: "Curso 3",
    num: 3,
    img: "https://www.anmosugoi.com/wp-content/uploads/2019/08/tate-no-696x392.jpg",
  },
];

export default function CursosPage() {
  return (
    <>
      <div className="row pt-5">
        {cursos.map((curso) => (
          <Curso key={curso.num} curso={curso} />
        ))}
      </div>
    </>
  );
}
