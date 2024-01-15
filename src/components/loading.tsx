
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';


interface ILoadingProps{
}

type Dispatch<A> = (value: A) => void;

export default function Loading(props: ILoadingProps) {

    const {
    } = props;


    return (<>


    <div className='lpdl-loading'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:'auto', background:'#fff', display:'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(20 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(40 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(60 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(80 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g>
</svg>
    </div>
 
    
    </>)
}   