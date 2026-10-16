// src/components/ProjectCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  points: string[];
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  images,
  imageAlt,
  points,
  tags,
  githubUrl,
  liveDemoUrl,
  featured = false,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Limit to 4 strongest points
  const displayPoints = points.slice(0, 4);
  
  return (
    <article className="bg-[#111113] border max-w-4xl w-full mx-auto border-[#232327] rounded-xl overflow-hidden hover:border-[#34343c] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all flex flex-col">
      {/* Image Section - Consistent width */}
      <div className="px-6 pt-5 shrink-0">
        <div className="relative group">
          <div className="relative mx-auto w-[80%] max-w-160 aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0d] shadow-lg shadow-black/20">
            <Image
              src={images[currentImageIndex]}
              alt={imageAlt}
              fill
              unoptimized
              priority={featured}
              className="object-contain"
              sizes="(max-width:768px) 90vw, 580px"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/60"
                >
                  <ChevronLeft size={15} />
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/60"
                >
                  <ChevronRight size={15} />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`h-1 rounded-full transition-all ${
                        currentImageIndex === index
                          ? "w-5 bg-[#5B8CFF]"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content Section - Flexible height, consistent width */}
      <div className="px-8 pt-4 pb-6 flex-1 flex flex-col">
        {/* Title */}
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-xl font-semibold m-0 tracking-[-0.01em] text-[#ededef]">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <div>
          <p className="text-[14px] leading-6 text-[#a1a1a8] m-0 max-w-[62ch]">
            {description}
          </p>
        </div>
        
        {/* Points - 4 items */}
        <div className="mt-2 mb-3">
          <ul className="m-0 pl-5 text-[14px] leading-6 text-[#a1a1a8] list-disc">
            {displayPoints.map((point, index) => (
              <li
                key={index}
                className="mb-0.5 last:mb-0"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
        </div>
        
        {/* Tags - 6 items */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center bg-[rgba(255,255,255,0.04)] border border-[#232327] rounded-md px-2.5 py-1 text-[11px] text-[#a1a1a8]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Buttons - Always at bottom */}
        <div className="flex gap-2.5 pt-2 border-t border-[#232327] mt-auto">
          <Link
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold border border-[#232327] text-[#ededef] hover:border-[#3a3a42] hover:bg-[#111113] transition-colors"
            href={githubUrl}
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon size={14} />
            GitHub
          </Link>
          {liveDemoUrl && (
            <Link
              className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold border border-[#232327] text-[#ededef] hover:border-[#3a3a42] hover:bg-[#111113] transition-colors"
              href={liveDemoUrl}
              target="_blank"
              rel="noopener"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          ) }
        </div>
      </div>
    </article>
  );
}