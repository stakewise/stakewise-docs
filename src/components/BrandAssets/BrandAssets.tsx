import React from 'react'


const BrandAssets: React.FC = () => (
  <div className="mt-40 text-center">
    <a
      href="/stakewise-brand-assets.zip"
      download
    >
      <div className="text-t16m text-coral underline">
        Download StakeWise brand assets
      </div>
    </a>
  </div>
)


export default React.memo(BrandAssets)
