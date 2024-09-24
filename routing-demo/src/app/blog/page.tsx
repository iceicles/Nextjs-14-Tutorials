import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Blog', // used by template property in root layout file
  title: {
    absolute: 'Blog', // ignores template property in root layout
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
