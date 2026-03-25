import MDXComponents from '@theme-original/MDXComponents';

import CustomLink from './CustomLink/CustomLink'


export default {
  ...MDXComponents,
  a: CustomLink,
};
