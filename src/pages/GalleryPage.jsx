import { useState } from 'react';
import Layout from '../layouts/Layout';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImage } from 'react-icons/fa';

const GALLERY_ITEMS = [
  { id: 1, title: 'JAIIB Batch Inauguration 2024', category: 'Events', color: 'from-blue-500 to-blue-700' },
  { id: 2, title: 'CAIIB Topper Felicitation Ceremony', category: 'Events', color: 'from-purple-500 to-purple-700' },
  { id: 3, title: 'Delhi Centre Classroom', category: 'Infrastructure', color: 'from-green-500 to-green-700' },
  { id: 4, title: 'Guest Lecture by RBI Officer', category: 'Workshops', color: 'from-yellow-500 to-yellow-700' },
  { id: 5, title: 'Bank PO Success Batch', category: 'Batches', color: 'from-rose-500 to-rose-700' },
  { id: 6, title: 'Faculty Training Session', category: 'Faculty', color: 'from-teal-500 to-teal-700' },
  { id: 7, title: 'Mumbai Centre Opening', category: 'Infrastructure', color: 'from-indigo-500 to-indigo-700' },
  { id: 8, title: 'Annual Awards Function 2024', category: 'Events', color: 'from-orange-500 to-orange-700' },
  { id: 9, title: 'IIBF Certification Workshop', category: 'Workshops', color: 'from-cyan-500 to-cyan-700' },
  { id: 10, title: 'Online Live Class Session', category: 'Batches', color: 'from-violet-500 to-violet-700' },
  { id: 11, title: 'Topper Meet & Greet', category: 'Events', color: 'from-amber-500 to-amber-700' },
  { id: 12, title: 'Study Material Distribution', category: 'Infrastructure', color: 'from-lime-500 to-lime-700' },
];

const CATEGORIES = ['All', 'Events', 'Batches', 'Infrastructure', 'Faculty', 'Workshops'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => {
    const idx = filtered.findIndex(i => i.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  };
  const prevImage = () => {
    const idx = filtered.findIndex(i => i.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📸 Gallery
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">IBS Bank Career Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A visual journey through our classrooms, events, success celebrations and memorable moments
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-20">
        <div className="container-custom flex flex-wrap gap-2 items-center justify-center">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${filter === c ? 'bg-primary text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500 hidden sm:block">{filtered.length} photos</span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(item => (
              <button key={item.id} onClick={() => openLightbox(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <FaImage className="text-white text-4xl opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full mb-1 font-medium">{item.category}</span>
                  <h3 className="text-white font-heading font-bold text-sm leading-tight">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FaImage className="text-6xl mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No photos found</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <FaTimes size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <FaChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <FaChevronRight size={20} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${lightbox.color} shadow-2xl mb-4 flex items-center justify-center`}>
              <FaImage className="text-white text-8xl opacity-30" />
            </div>
            <div className="text-center">
              <span className="inline-block text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-2 font-medium">{lightbox.category}</span>
              <h2 className="font-heading font-bold text-white text-xl">{lightbox.title}</h2>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
