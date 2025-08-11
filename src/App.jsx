import { useState } from 'react'
import './App.css'

function App() {
  // 좋아요 상태 추가!
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(10)

  // 댓글 관련 상태 추가
  const [comments, setComments] = useState([
    { id: 1, username: '친구1', text: '와 정말 아름다워요!'}
  ])
  const [newComment, setNewComment] = useState('')

  // 하트 클릭 함수
  const handleLike = () => {
    setIsLiked(!isLiked)
    if (!isLiked) {
      setLikeCount(likeCount + 1)
    } else {
      setLikeCount(likeCount - 1)
    }
  }

  // 댓글 함수 추가
  const handleAddComment = (e) => {
    e.preventDefault() // 폼 제출 시 페이지 새로고침 방지

    if (newComment.trim() !== '') {
      const comment = {
        id: Date.now(), 
        username: '나',
        text: newComment
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <div className='App'>
      <div className="instagram-post">
        {/* 프로필 영역 */}
        <div className="post-header">
          <div className="profile-pic">😉</div>
          <div className="username">Nelson</div>
          <div className="more-menu">⋯</div>
        </div>

        {/* 이미지 영역 */}
        <div className="post-image">
          <img src="https://picsum.photos/400/400" alt="게시물 이미지" />
        </div>

        {/* 버튼 영역 */}
        <div className="post-actions">
          <div className="left-actions">
            <span className="action-btn" onClick={handleLike}>
              {isLiked ? '❤️' : '🤍'}
            </span>
            <span className="action-btn">💬</span>
            <span className="action-btn">📤</span>
          </div>
          <div className="right-actions">
            <span className="action-btn">🔖</span>
          </div>
        </div>

        {/* 좋아요 개수와 댓글 영역 추가!*/}
        <div className="post-content">
          <div className="likes">
            좋아요 {likeCount}개
          </div>
          <div className="caption">
            <span className="username">Nelson</span>
            <span className="text"> 멋진 풍경이에요! 🌅</span>
          </div>

          {/* 댓글 목록 */}
          <div className="comments-list"> 
            {comments.map(comment => ( 
              <div key={comment.id} className="comment">
                <span className="username">{comment.username}</span>
                <span className="text"> {comment.text}</span>  
              </div>
            ))} 
          </div>

          <div className="time">2시간 전</div>             
        </div>

        {/* 댓글 입력 창 추가! */}
        <form className="comment-form" onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="댓글 달기..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          /> 
          <button
            type="submit"
            className="comment-submit"
            disabled={newComment.trim() === ''}
          >
            게시
          </button>
        </form>

      </div>
    </div>
  )
}

export default App