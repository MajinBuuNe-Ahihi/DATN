'use-client'
import { Button } from '@components/common/Button'
import '@styles/404.scss'
import image from '../assets/404.svg'
import Link from 'next/link'
import { Resource } from '@/constants'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='page404'>
        <Image className='page404__image'  priority src={image} alt='PAGE NOT FOUND' />
        <h1 className='page404__title'>{Resource?.vi?.NotFound}</h1>
        <Link className='page404__link' href='..'>
          <Button bg={1} type={2} padding={'10px 12px'}>
            <>
              {Resource?.vi.Back}
            </>
          </Button>
        </Link>
      </div>
    )
  }
 