import * as React from 'react';
import { FILES_URL, SITE_URL } from '../../config';
import { NextSeo } from 'next-seo';


interface ISEOfProps{ 
    title:string;
    id?:string;
    desc:string;
    img:string;
}

export default function SEOf(props: ISEOfProps) {
    const { 
        title,
        id,
        desc,
        img
    } = props;
     

    return (<>
            <NextSeo
                title={title}
                description={desc}
                canonical={`${SITE_URL}/fundraiser/${id}`}
                openGraph={{
                url: `${SITE_URL}/fundraiser/${id}`,
                title: title,
                description: desc,
                images: [
                    {
                        url: `${FILES_URL}/${img}`,
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