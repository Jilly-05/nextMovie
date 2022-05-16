
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }
  return (
    <ul className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <li onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          {/* <Link href={`/movies/${movie.original_title}/${movie.id}`} key={movie.id}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link> */}
        </li>
      ))}
      <style jsx>{`
      img{
        position: absolute;
        width: 43%;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-60%);
        box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);
        transition-property: transform;
        transition-duration: .3s;
      }
      
      img:hover{
        transform: translateX(-40%) translateY(-70%) rotatez(25deg);
      }
      `}</style>
    </ul>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}