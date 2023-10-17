import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleMenu } from '../../redux/toggleMenu/toggle';

const SideBar = () => {
  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state) => state.toggleMenu);
  const handleToggle = () => {
    dispatch(setToggleMenu());
  };
 
  return (
    <div>
      <div className="max-w-sm border mt-2 rounded-md shadow-md p-4">
        <div className="top flex items-center">
          <div>
            <AiOutlineMenu onClick={handleToggle} className="text-2xl cursor-pointer" />
          </div>
          <h3 className="flex-1 text-lg text-center font-semibold">
            Driving directions
          </h3>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between gap-1 ">
            <span><HiOutlineLocationMarker className="text-blue-800" /></span>
            <div className="flex-1 rounded-md overflow-hidden relative">
              <input type="text" className="border text-xs p-3 w-full  bg-gray-100  outline-none" placeholder="Choose starting point" />
              <AiOutlineSearch className=" absolute right-1 top-1/2 -translate-y-1/2" />
            </div>

          </div>
          <div className="flex items-center justify-between gap-1 mt-3 ">
            <span><HiOutlineLocationMarker className="text-blue-800" /></span>
            <div className="flex-1 rounded-md overflow-hidden relative">
              <input type="text" className="border text-xs p-3 w-full  bg-gray-100  outline-none" placeholder="Choose starting point" />
              <AiOutlineSearch className=" absolute right-1 top-1/2 -translate-y-1/2" />
            </div>

          </div>

        </div>

      </div>
      <div className={`fixed top-0 max-w-xs w-full h-screen border border-gray-700 bg-gray-400 ${toggleMenu ? 'left-0' : '-left-full'}`}>
        <div className="p-4">
          <AiOutlineClose className="text-2xl" onClick={handleToggle} />

        </div>

      </div>

    </div>
  );
};

export default SideBar;
