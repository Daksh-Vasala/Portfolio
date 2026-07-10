// src/components/SkillsSection.tsx
interface SkillCategory {
  label: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="reveal">
      {categories.map((category) => (
        <div key={category.label} className="flex items-baseline gap-5 flex-wrap py-3.25 border-b border-dashed border-[#232327] last:border-b-0">
          <span className="font-mono text-[12.5px] text-[#6b6b72] w-32.5 shrink-0">{category.label}</span>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="inline-flex items-center bg-[rgba(255,255,255,0.04)] border border-[#232327] rounded-md px-2.75 py-1.25 text-[13px] text-[#a1a1a8]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}