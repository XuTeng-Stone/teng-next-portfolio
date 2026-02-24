import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* 顶部导航栏 */}
      <nav className="w-full px-8 py-6 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">Teng.dev</div>
        <div className="space-x-8 text-sm font-medium text-gray-600 hidden md:block">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#ai" className="hover:text-blue-600 transition">Ask AI</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-24 max-w-6xl mx-auto mt-4">
        <div className="md:w-1/2 space-y-8 mt-12 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Hi, I'm <span className="text-blue-600">Teng Xu</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Software Developer building digital experiences. Specialized in Web Development, Machine Learning, and C#.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold text-center">
              View Projects
            </a>
            <a 
              href="https://github.com/XuTeng-Stone/TestLab1.git" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition font-semibold text-center"
            >
              GitHub
            </a>
          </div>
        </div>
        
        {/* 头像区域 */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full shadow-2xl border-8 border-white flex items-center justify-center overflow-hidden">
            <img src="/profile.jpg" alt="Teng Xu" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              I am a passionate developer and researcher currently studying at Kean University. My academic and technical journey is driven by a deep interest in bridging theoretical mathematics—such as linear algebra, calculus, and statistics—with practical software engineering.
            </p>
            <p>
              Currently, my focus lies at the intersection of Machine Learning and robust system design. Whether I am architecting web applications, diving into Object-Oriented Analysis and Design, or training algorithms to solve complex real-world problems, I thrive on building efficient, scalable, and impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          
          {/* Project Card */}
          <div className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Ultrasonic Breast Imaging Segmentation Research
            </h3>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Overview</h4>
                <p className="leading-relaxed">
                  An in-depth research project focused on automating and enhancing the accuracy of breast tumor segmentation in ultrasound imagery. This project addresses the critical challenge of reducing diagnostic variability by leveraging advanced Machine Learning techniques.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Contributions & Focus</h4>
                <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed">
                  <li><strong>Algorithmic Implementation:</strong> Applied machine learning methodologies to process and segment complex, noisy ultrasonic image data.</li>
                  <li><strong>Mathematical Modeling:</strong> Utilized statistical and linear algebra principles to optimize image processing pipelines and improve model accuracy.</li>
                  <li><strong>Real-World Impact:</strong> Designed to assist medical professionals by providing a reliable, algorithm-driven secondary perspective for diagnostic imaging analysis.</li>
                </ul>
              </div>

              {/* 技术栈标签 */}
              <div className="pt-4 flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">Machine Learning</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">Computer Vision</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">Data Analysis</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai" className="px-8 py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">AI-powered Chatbot Assistant</h2>
            <p className="text-gray-600 mt-4 text-lg">Have a question about my resume, skills, or project history? Ask my AI!</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <AIChat />
          </div>
        </div>
      </section>
    </main>
  );
}