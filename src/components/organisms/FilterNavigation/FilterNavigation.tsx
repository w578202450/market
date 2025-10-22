'use client';

import {
  BarChart3,
  Settings,
  Flame,
  Leaf,
  Droplets,
  Mountain,
  Download,
  ChevronDown,
  FileText,
  FileSpreadsheet,
  FileJson
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface FilterNavigationProps {
  selectedCategory?: string;
  selectedExchange?: string;
  onCategoryChange?: (category: string) => void;
  onExchangeChange?: (exchange: string) => void;
}

export const FilterNavigation = ({
  selectedCategory: externalSelectedCategory,
  selectedExchange: externalSelectedExchange,
  onCategoryChange,
  onExchangeChange
}: FilterNavigationProps) => {
  const [internalSelectedCategory, setInternalSelectedCategory] = useState('全部');
  const [internalSelectedExchange, setInternalSelectedExchange] = useState('全部');
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCategory = externalSelectedCategory ?? internalSelectedCategory;
  const selectedExchange = externalSelectedExchange ?? internalSelectedExchange;

  const handleCategoryChange = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    } else {
      setInternalSelectedCategory(category);
    }
  };

  const handleExchangeChange = (exchange: string) => {
    if (onExchangeChange) {
      onExchangeChange(exchange);
    } else {
      setInternalSelectedExchange(exchange);
    }
  };

  const handleExport = () => {
    setIsExportDropdownOpen(false);
  };

  // 点击外部关闭Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExportDropdownOpen(false);
      }
    };

    if (isExportDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExportDropdownOpen]);

  return (
    <div className="rounded-lg p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        {/* 品种筛选 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCategoryChange('全部')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
              selectedCategory === '全部'
                ? 'bg-white text-gray-800'
                : 'text-gray-300 hover:bg-gray-600 border border-gray-700'
            }`}
          >
            <Mountain className="w-3 h-3 text-orange-500" />
            全部
          </button>
          {['股指', '金属', '能化', '农副', '油脂', '黑色'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
                selectedCategory === category
                  ? 'bg-white text-gray-800'
                  : 'text-gray-300 hover:bg-gray-600 border border-gray-700'
              } ${
                // 在小屏幕上隐藏部分按钮
                category === '农副' || category === '油脂' || category === '黑色'
                  ? 'hidden sm:flex'
                  : ''
              }`}
            >
              {category === '股指' && <BarChart3 className="w-3 h-3 text-red-500" />}
              {category === '金属' && <Settings className="w-3 h-3 text-yellow-500" />}
              {category === '能化' && <Flame className="w-3 h-3 text-red-500" />}
              {category === '农副' && <Leaf className="w-3 h-3 text-green-500" />}
              {category === '油脂' && <Droplets className="w-3 h-3 text-blue-500" />}
              {category === '黑色' && <Mountain className="w-3 h-3 text-orange-500" />}
              {category}
            </button>
          ))}
        </div>

        {/* 交易所筛选 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExchangeChange('全部')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              selectedExchange === '全部'
                ? 'bg-white text-gray-800'
                : 'text-gray-300 hover:bg-gray-600 border border-gray-700'
            }`}
          >
            全部
          </button>
          {['中金所', '上交所', '深交所', '上期所', '大商所', '郑商所', '能源中心', '广期所'].map(
            (exchange) => (
              <button
                key={exchange}
                onClick={() => handleExchangeChange(exchange)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  selectedExchange === exchange
                    ? 'bg-white text-gray-800'
                    : 'text-gray-300 hover:bg-gray-600 border border-gray-700'
                } ${
                  // 在小屏幕上隐藏部分交易所按钮
                  exchange === '深交所' ||
                  exchange === '大商所' ||
                  exchange === '郑商所' ||
                  exchange === '能源中心' ||
                  exchange === '广期所'
                    ? 'hidden md:flex'
                    : ''
                }`}
              >
                {exchange}
              </button>
            )
          )}
        </div>

        {/* 导出按钮 */}
        <div ref={dropdownRef} className="ml-auto relative hidden lg:block">
          <button
            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
            className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-600 flex items-center gap-1"
          >
            <Download className="w-3 h-3 text-white" />
            导出
            <ChevronDown className="w-3 h-3" />
          </button>
          {/* Dropdown菜单 */}
          {isExportDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-40 bg-gray-600 border border-gray-700 rounded-md shadow-lg z-10">
              <button
                onClick={() => handleExport()}
                className="w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2 text-left"
              >
                <FileJson className="w-4 h-4 text-yellow-500" />
                JSON
              </button>
              <button
                onClick={() => handleExport()}
                className="w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2 text-left"
              >
                <FileText className="w-4 h-4 text-green-500" />
                CSV
              </button>
              <button
                onClick={() => handleExport()}
                className="w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2 text-left"
              >
                <FileSpreadsheet className="w-4 h-4 text-blue-500" />
                Excel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
