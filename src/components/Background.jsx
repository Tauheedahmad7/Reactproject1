const Background = () => {
    return (
      <div>
        <>
          <div className="w-full h-screen fixed z-[2]">
            {/* Title */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-600 flex justify-center items-center py-10">
              Documents.
            </div>
  
            {/* Main Heading */}
            <h1 className="absolute text-[10vw] sm:text-[12vw] md:text-[15vw] tracking-tighter top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold">
              Docs
            </h1>
          </div>
        </>
      </div>
    );
  };
  
  export default Background;
  