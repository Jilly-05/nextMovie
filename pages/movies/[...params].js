import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const [title, id] = params || []; //getServerSideProps으로 params 받아옴. title, id 뜨는거 확인 함
    const [movies, setMovies] = useState(); //useState 이용해서 api json 받을 함수 선언
    useEffect(() => { //api fetch
      (async () => {
        const { results } = await (await fetch(`/api/movies/675353`)).json(); //원래는 끝애 ${id}(18번 줄 참고)로 썼는데 아무리해도 안먹히길래 직접 아이디까지 써서 fetch 해봤으나 fetch가 안됨
        setMovies(results); //fetch한 object movies에 넣기
      })();
    }, []);
    console.log(movies); //콘솔창에 undefined라고 나옴
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
        <Seo title={title} />
        <div className="card__inner">
            <div className="card__image">
                <img src={`https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg`} alt={title} /> {/*임의의 사진 링크*/}
            </div>
        </div>
        <div className="content__group">
            <p className="content__heading">{title}</p> {/* params로 받아온 title */}
            <p className="content__category">Science Fiction</p> {/* api 받아오면 map으로 장르 찍어낼 예정 */}
            <p className="content__description"> {/* api 받아요면 overview에서 받아오기 */}
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.
            </p>
        </div>
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
            color:pink;
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