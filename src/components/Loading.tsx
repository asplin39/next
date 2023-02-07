const Loading = () => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center z-[50]">
      <div className="animate-spin h-[40px] w-[40px] border-4 border-main rounded-full border-t-transparent" />
    </div>
  )
}

export default Loading
