// import React, { useState, useEffect } from 'react';

// const SingleBook = ({ book }) => {
//   const [selected, setSelected] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   const handleBookClick = () => {
//     setSelected(!selected);
//   };

//   const handleFetchComments = async () => {
//     try {
//       const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book.asin}`);
//       const data = await response.json();
//       setComments(data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleAddComment = async () => {
//     try {
//       await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           asin: book.asin,
//           comment: newComment,
//         // }),
//       });
//       // Refresh comments after adding a new comment
//       handleFetchComments();
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch comments when the book is selected
//     if (selected) {
//       handleFetchComments();
//     }
//   }, [selected, book.asin]);

//   return (
//     <div>
//       <div onClick={handleBookClick}>
//         {/* Render book details */}
//         {selected && <CommentArea comments={comments} />}
//       </div>
//       {selected && (
//         <div>
//           <button onClick={handleAddComment}>Inserisci un commento</button>
//           <button onClick={handleFetchComments}>Mostra Commenti</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CommentArea;
