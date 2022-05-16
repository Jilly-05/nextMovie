import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const [title, id] = params || [];
    const [movies, setMovies] = useState();
    useEffect(() => {
      (async () => {
        const { results } = await (await fetch(`/api/movies/675353`)).json();
        setMovies(results);
      })();
    }, []);
    console.log(movies);
    // const [details, setDetails] = useState();
    // useEffect(() => {
    //   (async () => {
    //     const { results } = await (await fetch(`/api/movies/${id}`)).json();
    //     console.log("done");
    //     setDetails(results);
    //   })();
    // }, []);
    // console.log(details);
    return <div className="card">
        {/* <Seo title={details.name} />
        <div className="card__inner">
            <div className="card__image">
                <img src={`https://image.tmdb.org/t/p/w500/${details.belongs_to_collection.poster_path}`} alt={title} />
            </div>
        </div>
        <div className="content__group">
            <p className="content__heading">The Fountain</p>
            <p className="content__category">Science Fiction</p>
            <p className="content__description">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.
            </p>
        </div> */}
        <style jsx>{`
        img {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
        .card__image{
            width: 50vw;
            height:calc(100vh - 94.11px);
        }
        .content__heading {
            font-size: 42px;
          }
        .content__group {
            width:50vw;
            top:40px;
            bottom:40px;
            left:auto;
            padding: 8vw;
        }
        .content__category {
            background-color: cadetblue;
            display: inline-block;
            color: rgba(white, 0.8);
            font-size: 14px;
            padding: 0 12px;
            line-height: 30px;
            border-radius: 15px;
            align-self: flex-start;
            margin-top: 8px;
          }
          .content__description {
            font-size: 17px;
            line-height: 1.5;
            margin-top: 55px;
            color: #888888;
          }
          .card{
              display:flex;
          }
        `}</style>
    </div>;
}

export function getServerSideProps({params:{params}}) {
    return {
        props: {
            params,
        },
    };
}