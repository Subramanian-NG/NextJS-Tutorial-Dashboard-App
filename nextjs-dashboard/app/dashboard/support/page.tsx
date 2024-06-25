export const revalidate = 0;

export default function Page() {
    // Render posts...
    return <p>Support Page</p>;
  }
   
  // This function gets called at build time
  // export async function getData() {
  //   // Call an external API endpoint to get posts
  //   const res = await fetch('https://.../posts')
  //   const posts = await res.json()
   
  //   // By returning { props: { posts } }, the Blog component
  //   // will receive `posts` as a prop at build time
  //   return {
  //     props: {
  //       posts,
  //     },
  //   }
  // }