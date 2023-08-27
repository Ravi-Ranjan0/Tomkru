const GroupComponent = () => {
  return (
    <div className="relative w-full h-[672px] text-left text-29xl text-white font-azonix">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[587px] h-[672px]" />
      <div className="absolute top-[25px] left-[32px] text-8xl font-akira-expanded">
        TomKru
      </div>
      <img
        className="absolute top-[22px] left-[517px] w-[37px] h-[37px] overflow-hidden"
        alt=""
        src="/windowclose.svg"
      />
      <div className="absolute top-[153px] left-[200px]">About</div>
      <div className="absolute top-[219px] left-[209px]">Login</div>
    </div>
  );
};

export default GroupComponent;
