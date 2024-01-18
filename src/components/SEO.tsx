// components/SEO.tsx
import Head from 'next/head';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage }) => {
  const openGraphImages = ogImage
    ? [
        {
          url: ogImage, 
          alt: title || '',
        },
      ]
    : undefined;

  const defaultSeoProps: DefaultSeoProps = {
    title,
    description,
    canonical,
    openGraph: {
      url: canonical,
      title,
      description,
      images: openGraphImages,
    },
  };

  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags can be added here */}
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
    </>
  );
};

export default SEO;
