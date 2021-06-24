import Comment from './Comment';
const CommentList = ({ serviceId, comments, updateComment, deleteComment }) => {
    // console.log("CommentList", comments)
    return (
        <>
        { comments.map( c =>
            <Comment {...c} updateComment={updateComment} deleteComment={deleteComment} />
            )}
        </>
    
     )



    }


export default CommentList;

// import Service from './Service';
// const ServiceList = ({ workerId, services, updateService, deleteService }) => (
//     <>
//     { services.map( s =>
//         <Service {...s} updateService={updateService} deleteService={deleteService} />
//         )}
//     </>
// )

// export default ServiceList;