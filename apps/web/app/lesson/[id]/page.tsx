import { getLesson } from "../../../lib/lessons";
import RunnerPanel from "../../../components/RunnerPanel";

// Convert YouTube watch URL to embed URL
function getEmbedUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  
  // If already embed URL, return as-is
  if (url.includes('/embed/')) return url;
  
  // Convert watch URL to embed URL
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  
  return url;
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) {
    return <div className="mt-10 text-neutral-300">Lesson not found.</div>;
  }

  const videoUrl = getEmbedUrl(lesson.videoUrl);

  return (
    <div className="mt-8">
      {/* Video Tutorial Section */}
      {lesson.videoUrl && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📺</span>
            <h2 className="text-xl font-semibold">Video Tutorial</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/50">
            <iframe
              className="w-full aspect-video"
              src={videoUrl}
              title={`${lesson.title} Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; webkitallowfullscreen; mozallowfullscreen; allowfullscreen"
              allowFullScreen
            />
          </div>
          <p className="mt-2 text-sm text-neutral-400">
            💡 Watch this video to understand the concepts better, then try the code below!
          </p>
        </div>
      )}
      
      {/* Interactive Code Editor */}
      <div className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-neutral-400">{lesson.language} - {lesson.title}</span>
        </div>
        <RunnerPanel
          language={lesson.language}
          starterCode={lesson.starterCode}
          lessonTitle={lesson.title}
          lessonSummary={lesson.summary}
        />
      </div>
    </div>
  );
}
