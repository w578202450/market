'use client';

import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

import { FilterNavigation } from '@/components/organisms/FilterNavigation';
import { Header } from '@/components/organisms/Header';
import { MainDataTable } from '@/components/organisms/MainDataTable';
import { SummaryCards } from '@/components/organisms/SummaryCards';

export default function MarketDashboard() {
  const [varietyType, setVarietyType] = useState<'all' | 'night'>('all');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedExchange, setSelectedExchange] = useState('全部');

  return (
    <div className="min-h-screen text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* 隐藏滚动条 */
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .custom-table .ant-table {
          background: transparent;
          color: white;
        }
        .custom-table .ant-table-thead > tr > th {
          background: transparent !important;
          border-bottom: 1px solid #374151 !important;
          color: #9ca3af !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          padding: 8px 12px !important;
        }
        .custom-table .ant-table-thead > tr > th::before {
          background-color: #2d3748 !important;
        }
        .custom-table .ant-table-thead .ant-table-cell {
          background: transparent !important;
          color: #9ca3af !important;
        }
        .custom-table .ant-table-tbody > tr > td {
          background: transparent;
          border-bottom: 1px solid #374151;
          padding: 8px 12px;
        }
        .custom-table .ant-table-tbody > tr:hover > td {
          background: rgba(75, 85, 99, 0.8) !important;
        }
        .custom-table .ant-table-tbody > tr.ant-table-row:hover > td {
          background: rgba(75, 85, 99, 0.8) !important;
        }
        .custom-table .ant-table-tbody > tr:last-child > td {
          border-bottom: none;
        }
        .custom-table .ant-table-column-sorter {
          color: #9ca3af !important;
        }
        .custom-table .ant-table-column-sorter:hover {
          color: #d1d5db !important;
        }
        .custom-table .ant-table-column-sorter-up.on,
        .custom-table .ant-table-column-sorter-down.on {
          color: #000000 !important;
        }
        .custom-table .ant-table-column-sorter-up.on:hover,
        .custom-table .ant-table-column-sorter-down.on:hover {
          color: #000000 !important;
        }
        .custom-table .ant-table-filter-trigger {
          color: #9ca3af !important;
        }
        .custom-table .ant-table-filter-trigger:hover {
          color: #d1d5db !important;
        }
        .custom-table .ant-table-filter-trigger.active {
          color: #000000 !important;
        }
        .custom-table .ant-table-filter-trigger.active:hover {
          color: #000000 !important;
        }
      `
        }}
      />

      {/* 固定顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* 内容区域 */}
      <div className="pt-20 p-6">
        {/* 头部区域 */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-semibold text-white flex items-center">
            <span className="w-1 h-5 bg-white mr-3"></span>
            今日热点
          </h1>
          <div className="flex items-center gap-2 border border-gray-700 rounded-lg p-1.5">
            {varietyType === 'all' ? (
              <Sun className="w-4 h-4 text-white-400" />
            ) : (
              <Moon className="w-4 h-4 text-white-400" />
            )}
            <span className="text-sm text-gray-300">
              {varietyType === 'all' ? '全部品种' : '夜盘品种'}
            </span>
            <button
              onClick={() => setVarietyType(varietyType === 'all' ? 'night' : 'all')}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                varietyType === 'night' ? 'bg-white' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 rounded-full transition-transform ${
                  varietyType === 'night' ? 'translate-x-6 bg-black' : 'translate-x-0.5 bg-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* 摘要卡片区域 */}
        <SummaryCards />

        {/* 筛选导航栏 */}
        <FilterNavigation
          selectedCategory={selectedCategory}
          selectedExchange={selectedExchange}
          onCategoryChange={setSelectedCategory}
          onExchangeChange={setSelectedExchange}
        />

        {/* 主数据表格 */}
        <MainDataTable />
      </div>
    </div>
  );
}
