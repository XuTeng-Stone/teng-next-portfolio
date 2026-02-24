import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* 顶部导航栏 */}
      <nav className="w-full px-8 py-6 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">Teng.dev</div>
        <div className="space-x-8 text-sm font-medium text-gray-600 hidden md:block">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a> {/* 新增的技能导航 */}
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
              Hi, I'm Teng Xu, currently a <strong>sophomore studying at Kean University</strong>. I have a strong passion for software development and solving practical problems through code. 
            </p>
            <p>
              My academic journey is built on a solid foundation in sciences, with extensive coursework in <strong>Calculus, Statistics, Linear Algebra, and Physics</strong>. As a second-year student, I am actively expanding my technical skill set. I am currently diving deep into <strong>Web Development, C#, and Object-Oriented Analysis and Design (OOAD)</strong>.
            </p>
            <p>
              Beyond my regular coursework, I am exploring the field of Machine Learning. Whether it's applying algorithms to my research on ultrasonic breast imaging segmentation or experimenting with building a quantitative trading bot, I am always eager to learn, grow, and take on new challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section (新增模块) */}
      <section id="skills" className="px-8 py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 编程语言 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">C#</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">Python</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">JavaScript / TypeScript</span>
              </div>
            </div>

            {/* Web 开发 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Web Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">React.js</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">Next.js</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">Tailwind CSS</span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">HTML & CSS</span>
              </div>
            </div>

            {/* 核心概念与理论 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Core Concepts & Theory</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">Machine Learning</span>
                <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">OOAD</span>
                <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">Operating Systems</span>
              </div>
            </div>

            {/* 数理基础 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Mathematical Foundation</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-100 transition">Calculus</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-100 transition">Linear Algebra</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-100 transition">Statistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (背景颜色调整为灰色以作区分) */}
      <section id="projects" className="px-8 py-24 bg-gray-50 border-t border-gray-100">
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
      <section id="ai" className="px-8 py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">AI-powered Chatbot Assistant</h2>
            <p className="text-gray-600 mt-4 text-lg">Have a question about my resume, skills, or project history? Ask my AI!</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
            <AIChat />
          </div>
        </div>
      </section>
    </main>
  );
}