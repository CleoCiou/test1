import Meta from "../../components/index";
import React, { useEffect, useState } from "react";

export async function getServerSideProps({ params }) {
  const url = "https://intersense.ddns.net:9022/api/Message/GetArticle";
  const data = { ArticleID: params.aid };

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  const item = await res.json();
  return { props: { item } };
}

function init({ item }) {
  const metaData = [
    {
      index: 4,
      "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/4",
      "og:title": "Como evitar a disseminação de desinformação?",
      "og:image":
        "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A01-Cover.png",
      "og:description":
        "Saiba as principais características dos conteúdos falsos replicados na internet e dicas de como não cair em possíveis golpes e sofrer com a falta de informação.",
    },
    {
      index: 5,
      "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/5",
      "og:title": "Como usar o Message Checker contra Fake News",
      "og:image":
        "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A02-Cover.png",
      "og:description":
        "Conheça o aplicativo que garante proteção a toda hora em todos os lugares e evite receber fake news e conteúdos perigosos.",
    },
    {
      index: 6,
      "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/6",
      "og:title": "O que são URLs maliciosas?",
      "og:image":
        "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A03-Cover.png",
      "og:description":
        "Apenas com um click é possível cair em uma cilada e se tornar vítima de um ataque de vírus.",
    },
  ];
  console.log(item);
  const meta = metaData.find((data) => data.index == item.ArticleID);

  return meta;
}

function ArticleSSR({ item }) {
  const [meta, setMeta] = useState(() => init({ item }));

  return (
    <>
      <Meta
        ogTitle={meta["og:title"]}
        ogUrl={meta["og:url"]}
        ogDescription={meta["og:description"]}
        ogImage={meta["og:image"]}
      />

      <article>
        <section className="blog">
          <div className="inner">
            <div className="title">{item.Title}</div>
            <div className="titleImg">
              <img src={item.TitleImageUrl} />
              <div className="author">{item.DateAuthor}</div>
            </div>
            {item.ListViceData.map((data, index) => (
              <div key={index}>
                <div className="viceTitle">{data.ViceTitle}</div>
                <div
                  className="vicePreface"
                  dangerouslySetInnerHTML={{ __html: data.VicePreface }}
                />

                {data.ViceImageUrl != "" && data.ViceImageUrl != null && (
                  <div className="viceImg">
                    <img src={data.ViceImageUrl} />
                  </div>
                )}

                <div
                  className="viceContent"
                  dangerouslySetInnerHTML={{ __html: data.ViceContent }}
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

export default ArticleSSR;
