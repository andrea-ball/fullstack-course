const Course = ({ course }) => {
    const courseParts = course.parts;
    const exerciseTotal = courseParts.reduce((total, part) => total + part.exercises, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            {courseParts.map(part =>
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            <strong>total of {exerciseTotal} exercises</strong>
        </div>
    )
}

export default Course