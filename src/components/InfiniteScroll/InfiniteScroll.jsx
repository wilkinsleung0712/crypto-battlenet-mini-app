import React from 'react';
import { useEffect, useRef } from 'react';


export const InfiniteScroll = ({
  hasNextPage,
  isFetching,
  children,
  className,
  fetchNextPage,
}) => {
  const scrollIndicator = useRef(null);
  const canFetchNextPage = hasNextPage && !isFetching;

  useEffect(() => {
    const indicator = scrollIndicator.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (canFetchNextPage && entry && entry.isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold: [1],
      },
    );

    if (indicator) {
      observer.observe(indicator);
    }

    return () => {
      if (indicator) {
        observer.unobserve(indicator);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canFetchNextPage]);

  return (
    <div className={className}>
      {children}
      <footer ref={scrollIndicator} className="py-6">
        {isFetching ? (
          <p className="text-center text-sm text-grey">Loading more...</p>
        ) : hasNextPage ? null : (
          <p className="text-center text-sm text-">No more data</p>
        )}
      </footer>
    </div>
  );
};
