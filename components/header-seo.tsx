import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  entryTitle: string;
  entryDescription: string;
  ogImgPath?: string;
}

export default function HeaderSeo({
  entryTitle,
  entryDescription,
  ogImgPath = '/gravyboat-og.png',
}: Props): JSX.Element {
  const title = `${entryTitle} | Gravyboat`;
  const desc = `${entryDescription}`;
  const ogImgRelativePath = `${ogImgPath}`;
  const siteURL = 'https://gravybo.at';
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
  const twitterHandle = '@nball';
  const siteName = 'Gravyboat';

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: 'website',
        locale: 'en_US', //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'author',
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${siteURL}/favicon.ico`,
        },
      ]}
    />
  );
}
