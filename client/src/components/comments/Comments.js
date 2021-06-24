import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => {
        setComments(res.data)
        console.log(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // const addComment = (serviceId, comment) => {
  const addComment = (comment) => {
    axios.post(`/api/services/${serviceId}/comments/`, { comment } )
      .then( res => {
        setComments([...comments, res.data])
        console.log(res.data)
      })
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment } )
      .then( res => {
      let updatedComments = comments.maps(c => c.id !== id? c : res.data)
       setComments(updatedComments)
        
      }).catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        setComments( comments.filter( c => c.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Comment</h1>
      <CommentForm addComment={addComment} up />
      <CommentList 
        serviceId={serviceId} 
        comments={comments} 
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;