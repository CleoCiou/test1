import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogSiteName,
  ogUrl,
  ogImage,
  ogDescription,
}) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={ogDescription} />
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Message Checker",
  description:
    "The most protective app ever! Secures you from endless frauds, and you can view your messages without notifying the sender.",
  ogTitle: "Message Checker: Protection Everywhere",
  ogSiteName: "Message Checker",
  ogUrl: "https://main.d2g43yuyj4bfeo.amplifyapp.com",
  ogImage:
    "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/messagecheckerapp.com.png",
  ogType: "website",
};
export default Meta;
