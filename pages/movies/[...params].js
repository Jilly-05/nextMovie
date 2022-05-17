import Seo from "../../components/Seo";

export default function Detail({ data }) {
  const { title, poster_path } = data;

  return (
    <div className="card">
      <Seo title={title} />
      <div className="card__inner">
        <div className="card__image">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        </div>
      </div>
      <div className="content__group">
        <p className="content__heading">{title}</p>
        {data.genres?.map((detail)=>(
            <p className="content__category" key={detail.id}>{`${detail.name}`}</p>
        ))}
        <p className="content__description">
          {`${data.overview}`}
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
            height:calc(100vh - 94.11px);
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
            margin-left:5px;
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
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const data = await (await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
  return {
    props: { data },
  };
}


