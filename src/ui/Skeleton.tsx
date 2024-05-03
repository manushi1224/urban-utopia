function Skeleton(): JSX.Element {
  return (
    <>
      {Array(8)
        .fill(0, 8)
        .map((index: number) => {
          return (
            <div
              className="flex flex-col bg-neutral-300 h-96 animate-pulse rounded-xl p-4 gap-4"
              key={index}
            >
              <div className="bg-neutral-400/50 w-full h-44 animate-pulse rounded-md"></div>
              <div className="flex flex-col gap-2">
                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Skeleton;
