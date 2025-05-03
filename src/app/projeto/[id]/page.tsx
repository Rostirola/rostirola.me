export default async function Detail({
    params
}: {
    params: Promise<{ id: string; }>
}) {

    const { id } = await params;

  return (
      <div style={{height: "100vh" }} >
          <h1>Detail: { id }</h1>
      </div>
  )
}