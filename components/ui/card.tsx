import { cn } from "cn";

const Card = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex h-fit w-fit flex-col rounded-lg border border-neutral-600 bg-neutral-800 p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
