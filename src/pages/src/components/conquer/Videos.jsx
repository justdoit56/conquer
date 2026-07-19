import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { PlayCircle, Video } from "lucide-react";
import VideoPlayer from "@/components/conquer/VideoPlayer";

const sections = [
  {
    key: "section1",
    code: "01",
    title: "Basic 6 Foundations",
    blurb: "Number sense, fractions & the building blocks of confident maths.",
  },
  {
    key: "section2",
    code: "02",
    title: "JSS1 & JSS2 Core",
    blurb: "Algebra, geometry & reasoning that bridges primary to senior.",
  },
  {
    key: "section3",
    code: "03",
    title: "JSS3 Exam Prep",
    blurb: "BECE technique, past papers & timing for exam-day success.",
  },
];

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Video.list("-created_date")
      .then(setVideos)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="videos" className="bg-[#F8FAFC] blueprint-grid py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="font-[JetBrains_Mono] text-xs tracking-widest text-[#00D1FF] uppercase">
            Sample Lessons
          </span>
          <h2 className="font-[Fraunces] text-3xl sm:text-4xl font-semibold text-[#0F172A] mt-3">
            See how we make maths click.
          </h2>
          <p className="text-[#64748B] mt-3 leading-[1.618]">
            Three core areas. Real lessons from our tutors. New samples uploaded regularly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s) => {
            const vids = videos.filter((v) => v.section === s.key);
            return (
              <div key={s.key} className="glass-card rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-[#0F172A]/8">
                  <span className="font-[JetBrains_Mono] text-xs text-[#94A3B8]">{s.code}</span>
                  <h3 className="font-[Fraunces] text-xl font-semibold text-[#0F172A] mt-1">{s.title}</h3>
                  <p className="text-sm text-[#64748B] mt-2 leading-[1.5]">{s.blurb}</p>
                </div>
                <div className="p-6 space-y-4 min-h-[180px]">
                  {loading ? (
                    <div className="flex justify-center py-10">
                      <div className="w-6 h-6 border-2 border-[#0F172A]/10 border-t-[#00D1FF] rounded-full animate-spin" />
                    </div>
                  ) : vids.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-8 text-[#94A3B8]">
                      <Video className="w-8 h-8 mb-2" />
                      <p className="text-sm">No samples yet — check back soon!</p>
                    </div>
                  ) : (
                    vids.map((v) => (
                      <div key={v.id}>
                        <VideoPlayer src={v.video_url} title={v.title} />
                        <div className="mt-2 flex items-center gap-2">
                          <PlayCircle className="w-4 h-4 text-[#00D1FF] flex-shrink-0" />
                          <p className="text-sm font-medium text-[#0F172A] truncate">{v.title}</p>
                        </div>
                        {v.description && (
                          <p className="text-xs text-[#64748B] mt-1">{v.description}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
