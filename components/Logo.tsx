import Image from "next/image";
import Link from "next/link";

export function Logo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
      aria-label="OZ Event Services"
    >
      <Image
        src="/icon.png"
        alt="OZ Event Services"
        width={40}
        height={40}
        sizes="40px"
        className="h-10 w-10 rounded-md ring-1 ring-white/10"
        priority={priority}
      />

      {/* Wordmark: use real logo where there is space */}
      <div className="hidden sm:block">
        <Image
          src="/logo.png"
          alt="OZ Event Services"
          width={420}
          height={120}
          sizes="(min-width: 640px) 240px, 0px"
          className="h-9 w-auto"
          priority={priority}
        />
      </div>
    </Link>
  );
}

