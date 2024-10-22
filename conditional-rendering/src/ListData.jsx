import StudentComponent from "./StudentComponent.jsx"


function ListData(){

    const students = [
        {
            studentName : "Femi Adedokun",
            studentEmail : "fadedokun@gmail.com",
            studentScore : 77,
            studentID : "H58Z002"
        },
        {
            studentName : "Lindsay Lohan",
            studentEmail : "lindlohan@gmail.com",
            studentScore : 88,
            studentID : "H58M003"
        },
        {
            studentName : "Wendy Loafers",
            studentEmail : "wendyloaf@gmail.com",
            studentScore : 67,
            studentID : "H58Z119"
        }
    ]

    return(
        <div className="main-container">
            {students.map((student, index)=>(
                <div key={index}>
                    {student.studentScore > 50? <StudentComponent 
                    studentname = {student.studentName}
                    studentid = {student.studentID}
                    studentemail = {student.studentEmail}
                    /> : " "}
                </div>
            ))}
        </div>
    )
}

export default ListData