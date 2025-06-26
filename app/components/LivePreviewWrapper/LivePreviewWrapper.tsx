import React from 'react'

interface LivePreviewWrapperProps {
  uid?: string;
  children: React.ReactNode;
  className?: string;
}

const LivePreviewWrapper = ({ uid, children, className }: LivePreviewWrapperProps) => {
  const isLive = process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW === 'true';

  return (
        <div
            className={className}
            {...(isLive && uid
                ? {
                    'data-cslp': true,
                    'data-sys-entry-uid': uid,
                }
                : {})}
        >
            {children}
        </div>
    )
}

export default LivePreviewWrapper