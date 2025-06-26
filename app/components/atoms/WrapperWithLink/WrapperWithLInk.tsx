import React from 'react'
import Link from 'next/link'

interface WrapperWithLinkProps {
  children: React.ReactNode;
  href?: string;
  classname?: string;
}

const WrapperWithLInk = ({href, children, classname}: WrapperWithLinkProps) => {
  return href 
    ? <Link href={href} className={classname}>{children}</Link>
    : <div className={classname}>{children}</div>;
}

export default WrapperWithLInk