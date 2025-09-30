import React from 'react'
import Layout from '@theme-original/Navbar/Layout'
import type LayoutType from '@theme/Navbar/Layout'
import type { WrapperProps } from '@docusaurus/types'


type LayoutWrapperProps = WrapperProps<typeof LayoutType>

const LayoutWrapper: React.FC<LayoutWrapperProps> = (props) => (
  <div id="custom-navbar">
    <Layout {...props} />
  </div>
)


export default React.memo(LayoutWrapper)

