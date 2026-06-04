import { ChevronLeft, MoreHorizontal, UserCheck, Mail, Bookmark, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import ReviewPost from './ReviewPost';

export default function ProfileScreen() {
  const user = {
    name: 'Isadora Finkenauer',
    username: '@gabsgabsgabs',
    username2: '@elinordashwood',
    avatar: './public/dipper.png', // Placeholder cat reading
    avatar2: './public/ladybug.png', // Placeholder cat reading
    stats: {
      books: 174,
      followers: 8,
      following: 8
    }
  };

  const moments = [
    {
      id: 1,
      action: 'Fez um histórico de memórias',
      date: '13/12/2023',
      rating: 5,
      reviewText: 'Então... Por onde eu começo? Não lembro ao certo a data exata em que nos conhecemos, mas lembro que, no dia em que decidi ser "marcelinho por um dia" na van, pude conversar contigo pela primeira vez e conhecer a pessoa incrível que você é!',
      bookTitle: 'Primeira foto na galeria',
      bookAuthor: 'Van da Clori',
      image: '../public/van.jpeg'
    },
    {
      id: 2,
      action: 'Marcou como Inesquecível',
      date: '01/11/2023',
      rating: 5,
      reviewText: 'Pude conhecer essa pessoa que está sempre com um bom humor que contagia todos à sua volta, tornando qualquer situação em algo legal e divertido! Por conta disso eu costumava aparecer nos atendimentos de matemática. Não que eu estivesse mal em alguma matéria, mas porque eu gostava muito de conversar contigo e com o pessoal lá. Até o fato de eu carregar 500 pendrives se tornou algo engraçado.',
      bookTitle: 'Pendrives de Noitão Brinquedos do Mal à Venda',
      bookAuthor: 'Biblioteca do IF',
      image: '../public/pendrives.jpeg'
    },
    {
      id: 3,
      action: 'Fez um histórico de memórias',
      date: '10/10/2023',
      rating: 5,
      reviewText: 'Embora uma certa pessoa tenha usado seus poderes de amizade com os professores para prender eu e um cara aleatório em um lab da TCA (território inimigo), eu sei que ela é uma boa pessoa. Eu tenho esperanças ksksks',
      bookTitle: 'FECIC 2023',
      bookAuthor: 'Sem comentários :/',
      image: '../public/salsicha.jpeg'
    },
    {
      id: 4,
      action: 'Fez um histórico de memórias',
      date: '04/06/2026',
      rating: 5,
      reviewText: 'Eu poderia passar algumas horinhas por aqui tentando descrever o quanto você é importante para mim, o quanto você é especial... Mas acho que você já sabe disso de cor, né? Te agradeço demais por todos os momentos que passamos juntos, e por todos os que ainda vamos viver! Feliz aniversário!!!',
      bookTitle: 'FELIZ ANIVERSÁRIOOO!',
      bookAuthor: 'Com carinho, "o cara da TINF".',
      image: '../public/smile.jpeg'
    }
  ];

  return (
    <div className="profile-screen">
      <div className="header-top">
        <ChevronLeft className="header-icon" />
        <h1 className="header-title">{user.name}</h1>
        <MoreHorizontal className="header-icon" />
      </div>

      <div className="tabs">
        <div className="tab">
          <Bookmark size={20} />
        </div>
        <div className="tab active">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>"</span>
        </div>
        <div className="tab">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>📋</span>
        </div>
        <div className="tab">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
        </div>
        <div className="tab">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🕒</span>
        </div>
      </div>

      <div className="profile-header">
        <div className="cover-photo-wrapper">
          <div className="cover-photo" style={{ backgroundImage: "url('./public/paris.webp')" }}></div>
        </div>
        <div className="profile-info">
          <img src={user.avatar2} alt="Profile" className="profile-avatar" />

          <div className="profile-name-container">
            <h2 className="profile-name">
              {user.name}
              <ShieldCheck className="verified-badge" fill="currentColor" />
            </h2>
            <p className="profile-username">{user.username2}</p>
          </div>

          <div className="profile-actions">
            <button className="btn-follow">
              <UserCheck size={18} /> Seguindo
            </button>
            <button className="btn-message">
              <Mail size={18} /> Mensagem
            </button>
          </div>

          <button className="btn-remove">
            <UserCheck size={18} /> Remover amigo (Impossível!)
          </button>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-value">{user.stats.books}</span>
              <span className="stat-label">Momentos</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{user.stats.followers}</span>
              <span className="stat-label">Seguidores</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{user.stats.following}</span>
              <span className="stat-label">Seguindo</span>
            </div>
          </div>

          <div className="bio-container">
            Oi Isaaaa, bem vinda ao Scooby, uma rede social programada só para você! Aproveita a experiência!
          </div>

          <div className="reading-goal">
            <div className="goal-header">
              <span className="goal-title">Momentos especiais</span>
              <span className="goal-count">3 de 8</span>
            </div>
            <div className="books-container">
              {/* Placeholders for books/memories in the goal */}
              <div className="book-card">
                <Bookmark className="bookmark" size={24} />
                <img src="../public/smile.jpeg" alt="Book" className="book-cover" />
              </div>
              <div className="book-card">
                <Bookmark className="bookmark" size={24} />
                <img src="../public/van.jpeg" alt="Book" className="book-cover" />
              </div>
              <div className="book-card">
                <Bookmark className="bookmark" size={24} />
                <img src="../public/birthday.jpeg" alt="Book" className="book-cover" />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.85rem', marginTop: '5px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#2b9cff' }}>
                <span style={{ fontSize: '1.2rem' }}>◷</span> 8 momentos
              </span>
              <span>1072 de 2303</span>
            </div>
          </div>
        </div>
      </div>

      <div className="feed-container">
        <h3 className="feed-title">Feed</h3>


        {/* Mapeando os outros momentos (resenhas) */}
        {moments.map(moment => (
          <ReviewPost
            key={moment.id}
            user={user}
            date={moment.date}
            action={moment.action}
            rating={moment.rating}
            reviewText={moment.reviewText}
            bookTitle={moment.bookTitle}
            bookAuthor={moment.bookAuthor}
            image={moment.image}
          />
        ))}

      </div>
    </div>
  );
}
