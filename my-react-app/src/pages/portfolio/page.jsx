import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, ChevronLeft, ChevronRight, Play, Pause, Globe, Code, Palette, Smartphone } from 'lucide-react';

// Default images for fallback
import men1 from "../../assets/imgReviews/men1.jpg"
import men2 from "../../assets/imgReviews/men2.jpg"
import women from "../../assets/imgReviews/women.jpg"

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  const { t } = useTranslation();

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'web development':
        return <Globe size={16} />;
      case 'mobile app':
        return <Smartphone size={16} />;
      case 'ui/ux design':
        return <Palette size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl z-50 max-h-[90vh] overflow-y-auto mx-4"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* Project Image */}
              <div className="relative h-72 md:h-96 w-full bg-gradient-to-br from-violet-50 to-purple-50">
                {project.image_url ? (
                  <img 
                    src={`http://localhost:5000/images/portfolio/${project.image_url}`} 
                    alt={project.tittle || project.title || "Project"} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-purple-100" style={{display: project.image_url ? 'none' : 'flex'}}>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      {getCategoryIcon(project.category)}
                    </div>
                    <p className="text-gray-600 font-medium">{project.tittle || project.title || "Project"}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white shadow-lg border border-white/20"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* Project Info */}
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {project.tittle || project.title || "Project Details"}
                  </h3>
                  
                  {project.description && (
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                      {project.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 border border-violet-200">
                      {getCategoryIcon(project.category)}
                      {project.category || "Web Development"}
                    </span>
                    {project.technologies && project.technologies.map((tech, index) => (
                      <span key={index} className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {project.website_url && (
                      <motion.a
                        href={project.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl border border-violet-500/20"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={18} />
                       {t('projects.visitWebsite')}
                      </motion.a>
                    )}
                    
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Code size={18} />
                         {t('projects.viewCode')}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Carousel Component
const ProjectCarousel = ({ projects, setSelectedProject }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const itemsPerSlide = 6; // 2 rows × 3 columns
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPlaying && totalSlides > 1) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, totalSlides]);

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const getCurrentSlideProjects = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return projects.slice(startIndex, startIndex + itemsPerSlide);
  };

  if (projects.length <= 6) {
    // Show simple grid if 6 or fewer projects
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project._id || project.id || index} 
            project={project} 
            index={index} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative ">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
         <h3 className="text-xl font-semibold text-gray-900">
           {t('projects.showing')} {getCurrentSlideProjects().length} {t('projects.of')} {projects.length} {t('projects.projectsCount')}
         </h3>
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-violet-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleAutoplay}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>
          
          <motion.button
            onClick={prevSlide}
            className="p-2 rounded-lg bg-violet-100 hover:bg-violet-200 text-violet-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="p-2 rounded-lg bg-violet-100 hover:bg-violet-200 text-violet-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden rounded-2xl ">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const slideProjects = projects.slice(
              slideIndex * itemsPerSlide, 
              (slideIndex + 1) * itemsPerSlide
            );
            
            return (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 grid-rows-2">
                  {slideProjects.map((project, index) => (
                    <ProjectCard 
                      key={project._id || project.id || index} 
                      project={project} 
                      index={index} 
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const PagePortfolio = () => {
   const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v4/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        // Fallback to empty array on error
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-violet-50/30 text-gray-900 min-h-screen">
      <ProjectsSection 
        projects={projects}
        loading={loading}
        error={error}
        setSelectedProject={setSelectedProject} 
      />
      <TestimonialsSection />
      
      {/* Project Popup Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

const SectionWrapper = ({ children, id, className = "" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }
      }}
      className={`py-20  md:py-32 px-4 md:px-8 max-w-7xl mx-auto mt-30 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// Section title component with modern styling
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 md:mb-20 text-center relative">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-32 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
    
    <motion.h2 
      className="text-5xl md:text-6xl lg:text-7xl font-black mb-6  relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
    
    <motion.div 
      className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    
    <motion.p 
      className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

// Projects Section
const ProjectsSection = ({ projects, loading, error, setSelectedProject }) => {
     const { t } = useTranslation(); // Add this line

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'web development':
        return <Globe size={16} />;
      case 'mobile app':
        return <Smartphone size={16} />;
      case 'ui/ux design':
        return <Palette size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  if (loading) {
    return (
      <SectionWrapper id="projects">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Discover our latest work and innovative solutions that drive digital transformation." 
        />
        <div className="gri grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-2xl h-64 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper id="projects">
<SectionTitle 
  title={t('projects.title')} 
  subtitle={t('projects.subtitle')} 
/>
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <X size={32} className="text-red-600" />
          </div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">{t('projects.unableToLoad')}</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects">
      <SectionTitle 
  title={t('projects.title')} 
  subtitle={t('projects.subtitle')} 
/>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Code size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('projects.noProjectsFound')}</h3>
          <p className="text-gray-600">{t('projects.noProjectsMessage')}</p>
        </div>
      ) : (
        <ProjectCarousel projects={projects} setSelectedProject={setSelectedProject} />
      )}
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'web development':
        return <Globe size={14} />;
      case 'mobile app':
        return <Smartphone size={14} />;
      case 'ui/ux design':
        return <Palette size={14} />;
      default:
        return <Code size={14} />;
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border mb-15 m-5 border-gray-100 hover:border-violet-200"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: { 
            duration: 0.7,
            delay: index * 0.1,
            ease: "easeOut"
          }
        }
      }}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        y: -12,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      onClick={onClick}
    >
      {/* Image with advanced overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50">
        {project.image_url ? (
          <>
            <img 
              src={`http://localhost:5000/images/portfolio/${project.image_url}`} 
              alt={project.tittle || project.title || t('common.untitledProject')} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : null}
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-purple-100 ${project.image_url ? 'hidden' : 'flex'}`}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-xl flex items-center justify-center shadow-lg">
              {getCategoryIcon(project.category)}
            </div>
            <p className="text-sm text-gray-600 font-medium">{project.tittle || project.title || t('common.untitledProject')}</p>
          </div>
        </div>
        
        {/* Floating badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ExternalLink size={14} className="text-violet-600" />
          </div>
        </div>
      </div>
      
      {/* Content with glassmorphism effect */}
      <div className="relative p-6 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200">
            {getCategoryIcon(project.category)}
            {project.category || "Web Development"}
          </span>
        </div>
        
        <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
          {project.tittle || project.title || "Untitled Project"}
        </h3>
        
        {project.description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {project.description}
          </p>
        )}
        
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="text-sm font-semibold flex items-center gap-2 text-violet-600 hover:text-violet-700 group-hover:translate-x-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
           {t('projects.viewProject')}
            <motion.span
              className="text-violet-400"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.button>
          
          {project.technologies && (
            <div className="flex gap-1">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className="w-2 h-2 rounded-full bg-violet-300"></span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-violet-600/5 group-hover:via-purple-600/5 group-hover:to-indigo-600/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

// Testimonials Section with enhanced design
const TestimonialsSection = () => {
  const { t } = useTranslation(); // Add this line
  
  const testimonials = [
    {
      name: t('testimonials.clients.sarah.name'),
      position: t('testimonials.clients.sarah.position'),
      text: t('testimonials.clients.sarah.text'),
      avatar: men1,
      rating: 5
    },
    {
      name: t('testimonials.clients.michael.name'),
      position: t('testimonials.clients.michael.position'),
      text: t('testimonials.clients.michael.text'),
      avatar: men2,
      rating: 5
    },
    {
      name: t('testimonials.clients.emma.name'),
      position: t('testimonials.clients.emma.position'),
      text: t('testimonials.clients.emma.text'),
      avatar: women,
      rating: 5
    }
  ];

  return (
    <SectionWrapper id="testimonials" className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-transparent to-purple-50/50 rounded-3xl"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="relative z-10">
       <SectionTitle 
          title={t('testimonials.title')} 
          subtitle={t('testimonials.subtitle')} 
       />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="relative bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-100 via-purple-200 to-indigo-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
      
      <div className="relative z-10">
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
          ))}
        </div>
        
        {/* Quote */}
        <motion.svg 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.2, type: "spring" }}
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none"
          className="text-violet-600 mb-4"
        >
          <path d="M10 11L7 16H4L6 11V7H10V11ZM20 11L17 16H14L16 11V7H20V11Z" fill="currentColor" />
        </motion.svg>
        
        <p className="text-gray-700 mb-6 italic text-lg leading-relaxed font-medium">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-0.5">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-full h-full object-cover rounded-full bg-white" 
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
            <p className="text-violet-600 font-medium">{testimonial.position}</p>
          </div>
        </div>
      </div>
      
      { /*   Decorative elements   */ }
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-violet-800 to-purple-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default PagePortfolio;