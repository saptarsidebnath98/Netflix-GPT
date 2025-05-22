import { useEffect } from "react";

const useScrollLeft = (scrollRef) => {
      useEffect(() => {
        const scrollContainer = scrollRef.current;
    
        const handleWheel = (e) => {
          if (e.deltaY !== 0) {
            e.preventDefault(); // prevent vertical scroll
            scrollContainer.scrollLeft += e.deltaY;
          }
        };
    
        scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    
        return () => {
          scrollContainer.removeEventListener("wheel", handleWheel);
        };
      }, []);
}

export default useScrollLeft;