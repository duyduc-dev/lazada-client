function FormLogin() {
  return (
    <div className="bg-[#eff0f5]">
      <div className="flex justify-center ">
        <div className="w-[810px] ">
          <div className="pt-9 pb-9  ">
            <div className="text-title_arsenic text-[22px] relative ">
              Chào mừng đến với Lazada. Đăng nhập ngay!
            </div>
            <div className="text-[12px] text-sonic_silver float-right relative bottom-5 ">
              Thành viên mới<a className="text-blue_green no-underline"> Đăng kí</a> tại đây!
            </div>
          </div>
          <div className="flex justify-items-center  pb-[50px] pt-[25px]  w-[810px] border-box bg-white">
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form>
                <div className="relative  pb-5 mr-[-39px] ">
                  <label className=" left-4 top-0 mb-4 max-w-[90%] text-xs h-3.5 leading-4">
                    Số điện thoại hoặc email*
                  </label>
                  <input
                    placeholder="123"
                    type="text"
                    className=" text-[14px] pl-2 w-full h-10 outline  outline-1 outline-[#c4b0b0] pr-[35px]"
                  />
                </div>
                <div className="relative mb-6 mr-[-39px]">
                  <label className=" left-3 top-0 mb-4 max-w-[90%] text-xs h-3.5 leading-4 ">
                    Mật khẩu*
                  </label>
                  <input
                    placeholder="Vui lòng nhập mật khẩu của bạn"
                    type="password"
                    className="text-[14px] pl-2 w-full h-10 outline  outline-1 outline-[#c4b0b0] pr-[35px]"
                  />
                </div>
                <div className="float-right">
                  <a className="text-[#049cb9] text-xs">Quên mật khẩu ?</a>
                </div>
              </form>
            </div>
            <form>
              <div className=" pl-[5rem] pt-[20px] block w-full">
                <div>
                  <button
                    onClick={() => console.log('DDD')}
                    className=" justify-center bg-orange-500 hover:bg-orange-600 text-white  py-3 px-[7rem] border border-orange-500 rounded"
                  >
                    ĐĂNG NHẬP
                  </button>
                </div>
                <div className="my-2 text-[12px] text-[#757575]">
                  <span>Hoặc, đăng nhập bằng</span>
                </div>
                <div className="pt-1 ">
                  <button
                    onClick={() => console.log('DDD')}
                    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-[7.5rem] border border-blue-800 rounded"
                  >
                    Facebook
                  </button>
                </div>
                <div className="pt-[0.75rem] ">
                  <button
                    onClick={() => console.log('DDD')}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-[8rem] border border-red-600 rounded"
                  >
                    Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
