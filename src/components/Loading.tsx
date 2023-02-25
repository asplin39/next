const Loading = () => {
  return (
    <div className="fixed top-[50%] left-[50%] z-[50] flex translate-x-[-50%] translate-y-[-50%] justify-center">
      <div className="border-main h-[40px] w-[40px] animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  );
};

export default Loading;
