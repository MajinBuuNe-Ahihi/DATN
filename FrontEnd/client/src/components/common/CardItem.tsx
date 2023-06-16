import { ReactNode, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '@styles/card.scss';
import Link from 'next/link';

type Props = {
  image: {
    alt: string,
    src: string
  },
  children?: ReactNode,
  type?: string,

}

export  function CardItem({ image, children,type }: Props) {
  const [opacity,setOpacity] = useState<number>(0)
  return (
    <Link href={'/'} className={`card-item-component card-item-component--${type}`}>
      <LazyLoadImage className={`card-item-component-image card-item-component-image--${type}`}
        alt={image.alt}
        src={image.src}
        effect='blur'
        width={'100%'}
        height={'100%'}
        beforeLoad={() => setOpacity(0)}
        afterLoad={() =>setOpacity(1)}
        style={{opacity}}
      />
      <span className={`card-item-component-inner card-item-component-inner--${type}`}>
        {children}
      </span>
      {
        opacity == 0 && <SkeletonTheme baseColor='#ffffff' duration={3} highlightColor='#ee0033'>
          <Skeleton className='skeleton-card-slide' count={1}/>
          </SkeletonTheme>
      }
    </Link>
  )
}