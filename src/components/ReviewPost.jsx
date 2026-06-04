import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

export default function ReviewPost({ user, date, action, rating, reviewText, image, bookTitle, bookAuthor }) {
  return (
    <div className="review-post">
      <div className="post-header">
        <div className="post-user-info">
          <img src={user.avatar} alt={user.name} className="post-avatar" />
          <div className="post-user-text">
            <span className="post-username">{user.username}</span>
            <span className="post-action">{action}</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="post-date">{date}</span>
          <MoreHorizontal size={18} className="post-options" />
        </div>
      </div>

      {rating && (
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className={`star ${star > rating ? 'empty' : ''}`} viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="rating-text">5.0 (Perfeito)</span>
        </div>
      )}

      {reviewText && <p style={{ marginBottom: '15px', fontSize: '0.95rem' }}>{reviewText}</p>}

      <div className="post-content-card">
        <div className="post-text-content">
          <h3 className="post-book-title">{bookTitle}</h3>
          <p className="post-book-author">{bookAuthor}</p>
        </div>
        <img src={image} alt="Momento" className="post-book-image" />
      </div>

      <div className="post-actions">
        <div className="action-btn liked">
          <Heart fill="currentColor" size={20} />
          <span>curtir</span>
        </div>
        <div className="action-btn">
          <MessageCircle size={20} />
          <span>comentar</span>
        </div>
      </div>
    </div>
  );
}
