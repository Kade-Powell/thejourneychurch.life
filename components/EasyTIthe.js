import Script from "next/script";
import Head from "next/head";

export const EasyTIthe = () => {
  return (
    <Head>
      <Script
        src="https://forms.ministryforms.net/embed.aspx?formId=612566d4-e253-4641-bfc4-1e370b04e42f"
        strategy="beforeInteractive"
      />
    </Head>
  );
};
