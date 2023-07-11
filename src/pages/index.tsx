import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, NextPage } from "next";

const IndexPage: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <p>{t("title")}</p>
      </main>
    </>
  );
}
export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en")),
    },
  };
};
