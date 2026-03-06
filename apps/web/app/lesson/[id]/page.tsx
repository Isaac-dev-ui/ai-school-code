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
      {lesson.videoUrl && (
        <div className="mb-6">
          <div className="text-sm font-semibold text-neutral-400 mb-2">📺 Video Tutorial</div>
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <iframe
              className="w-full aspect-video"
              src={videoUrl}
              title={`${lesson.title} Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <RunnerPanel
        language={lesson.language}
        starterCode={lesson.starterCode}
        lessonTitle={lesson.title}
        lessonSummary={lesson.summary}
      />
    </div>
  );
}
