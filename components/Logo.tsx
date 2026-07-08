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
      className={`inline-flex items-center ${className ?? ""}`}
      aria-label="OZ Event Services"
    >
      <Image
        src="/logo.png"
        alt="OZ Event Services"
        width={520}
        height={140}
        sizes="(min-width: 640px) 240px, 180px"
        className="h-9 w-auto sm:h-10"
        priority={priority}
      />
    </Link>
  );
}

