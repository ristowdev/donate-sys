import * as React from 'react';
import { FILES_URL, SITE_URL } from '../../config';
import { NextSeo } from 'next-seo';


interface ISEOProProps{ 
    title:string;
}

export default function SEOpro(props: ISEOProProps) {
    const { 
        title
    } = props;
     

    return (<>  
            <NextSeo
                title={title}
                description={"Join our crowdfunding community to support and fund meaningful causes. Start or contribute to campaigns that make a difference."}
                canonical={SITE_URL}
                openGraph={{
                url: SITE_URL,
                title: title,
                description: 'Join our crowdfunding community to support and fund meaningful causes. Start or contribute to campaigns that make a difference.',
                images: [
                    {
                        url: `${FILES_URL+'/social-share-rug.jpg'}`,
                        width: 800,
                        height: 600,
                        alt: '',
                        type: 'image/jpeg',
                    } 
                ],
                siteName: 'RiseUpGram',
                }}
                facebook={{
                    appId:'1787186335128133'
                }}
                twitter={{
                  handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
             

    </>)
}