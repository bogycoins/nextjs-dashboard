export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <>
            <p>First customer</p>
            <p>Second customer</p>
        </>
    )
}