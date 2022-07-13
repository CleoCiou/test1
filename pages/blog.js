import Meta from "../components/index";

export async function getServerSideProps() {
  var url = "https://intersense.ddns.net:9022/api/Message/GetArticle";
  var data = { ArticleID: "4" };

  const res = await fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  const item = await res.json();
  return { props: { item } };
}

function ArticleSSR({ item }) {
  return (
    <>
      <Meta ogUrl={"https://main.d2g43yuyj4bfeo.amplifyapp.com/article"} />

      <article>
        <section className="blog">
          <div className="inner">
            {item.ListViceData.map((data) => (
              <div>
                <div className="viceTitle">{data.ViceTitle}</div>
                <div
                  className="vicePreface"
                  dangerouslySetInnerHTML={{ __html: data.VicePreface }}
                />
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
