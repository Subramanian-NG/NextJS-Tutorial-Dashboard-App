export default function Page() {
    // Render data...
    return <p>Workflow Page</p>;
  }
   
  // This gets called on every request
  export async function getData() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }