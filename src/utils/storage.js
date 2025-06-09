// utils/storage.js

const staticBlogs = [
  {
    id: 1,
    title: 'The Rise of React in Modern Web Development',
    author: 'Ashwini Kadam',
    category: 'Web Development',
    coverImage: 'https://th.bing.com/th/id/R.24218682cb0c22e52b64553723a8efd0?rik=yL%2bFS%2f8swpalgQ&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a74dd1223343fbc2207d00.png&ehk=A3T0PwCWea4%2beOuTONmVktg%2bdor24nRYHtgZ1HP8b58%3d&risl=&pid=ImgRaw&r=0',
    content: 'React has revolutionized how developers approach building user interfaces. Its component-based architecture and declarative style simplify the process of creating interactive web applications...'
  },
  {
    id: 2,
    title: 'Understanding Async/Await in JavaScript',
    author: 'John Doe',
    category: 'JavaScript',
    coverImage: 'https://th.bing.com/th/id/OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK?rs=1&pid=ImgDetMain',
    content: 'Async/await syntax in JavaScript provides a powerful way to handle asynchronous operations. It’s built on top of Promises and allows writing asynchronous code that looks synchronous...'
  },
  {
    id: 3,
    title: 'A Guide to Responsive Web Design',
    author: 'Jane Smith',
    category: 'CSS',
    coverImage: 'https://th.bing.com/th/id/OIP.fBJ2R5Y0m_tQXUxdc0icPQHaKd?rs=1&pid=ImgDetMain',
    content: 'Responsive web design ensures your websites look good on all devices. It involves flexible grids, layouts, images, and media queries to adapt the layout to different screen sizes...'
  },
  {
  id: 4,
  title: "The Importance of Mental Health Awareness",
  author: "Emily Johnson",
  category: "Health & Wellness",
  coverImage: "https://via.placeholder.com/600x300?text=Mental+Health+Awareness",
  content: "Mental health awareness is crucial in today's fast-paced world. It involves recognizing the signs of mental health issues, understanding their impact, and knowing how to seek help. Promoting mental well-being can lead to a more supportive and empathetic society."
},
{
  id: 5,
  title: "Tips for Sustainable Living",
  author: "Michael Lee",
  category: "Environment",
  coverImage: "https://via.placeholder.com/600x300?text=Sustainable+Living",
  content: "Adopting sustainable living practices can significantly reduce your environmental footprint. Simple actions like reducing waste, conserving energy, and supporting eco-friendly products contribute to a healthier planet for future generations."
},
{
  id: 6,
  title: "Exploring the Benefits of Yoga",
  author: "Sophia Martinez",
  category: "Lifestyle",
  coverImage: "https://via.placeholder.com/600x300?text=Yoga+Benefits",
  content: "Yoga offers numerous benefits, including improved flexibility, stress reduction, and enhanced mental clarity. Incorporating yoga into your daily routine can lead to a balanced and harmonious lifestyle."
},



];

// Get posts from localStorage or fallback to static data
export function getPosts() {
  const data = localStorage.getItem('blogs');
  return data ? JSON.parse(data) : staticBlogs;
}

// Save posts to localStorage
export function savePosts(posts) {
  localStorage.setItem('blogs', JSON.stringify(posts));
}
