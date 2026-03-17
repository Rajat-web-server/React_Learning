
export const Boxes = () => {
    const box = ["teddy", "car", "bike"]
    let index;
    return (
        <div>{
            box.map((boxes) => (
                <h1 key={index} className="bg-red-900 border-4 m-2 p-3">{boxes}</h1>
            )

            )
        }

        </div>
    )
}