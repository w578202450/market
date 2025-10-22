'use client';

import { ChevronDown, Users, MessageCircle, Gift } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-[#13161c]">
      <div className="flex items-center px-3 sm:px-6 py-3 sm:py-4">
        {/* 左侧Logo和品牌名 */}
        <div className="flex items-center gap-2 sm:gap-3 mr-4 sm:mr-12">
          <img
            src="https://www.openvlab.cn/logo.svg"
            alt="OpenVlab Logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-white font-bold text-sm sm:text-lg">OpenVlab</span>
        </div>

        {/* 中间导航链接 */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-1">
          <a href="#" className="text-white text-sm font-medium relative">
            市场
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300"
          >
            行情
            <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-gray-300">
            波动率
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-gray-300">
            异动
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300"
          >
            策略
            <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-gray-300">
            交易
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-gray-300">
            教学
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-gray-300 relative">
            社区
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-0.5 py-0 rounded text-[10px]">
              new
            </span>
          </a>
        </nav>

        {/* 移动端菜单按钮 */}
        <div className="md:hidden flex-1 flex justify-center">
          <button className="text-white text-sm font-medium">菜单</button>
        </div>

        {/* 右侧用户操作 */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 ml-auto">
          {/* 等待列表 - 小屏隐藏文字 */}
          <div className="flex items-center gap-1 sm:gap-2 text-white text-sm hover:text-gray-300 cursor-pointer">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">等待列表</span>
          </div>

          {/* 联系我们 - 小屏隐藏 */}
          <div className="hidden lg:flex items-center gap-2 text-white text-sm hover:text-gray-300 cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            联系我们
          </div>

          {/* 邀请好友 - 小屏隐藏文字 */}
          <div className="flex items-center gap-1 sm:gap-2 text-white text-sm hover:text-gray-300 cursor-pointer">
            <Gift className="w-4 h-4 text-green-400" />
            <span className="hidden sm:inline">邀请好友</span>
          </div>

          {/* 用户头像 */}
          <div className="relative">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-xs sm:text-sm">
              U
            </div>
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded text-[10px]">
              LV1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
