// this file automatically wraps page.tsx file and all its nested children within a react suspense boundary
// nextjs allows the creation of shared layouts that remain interactive while new route segments are loading
// users can continue interacting with certain parts of the application, such as a navigation menu or sidebar, even if the main content is still being fetched

export default function Loading() {
  return <h1>Loading</h1>;
}
