'use client';

import { Table, Tooltip } from 'antd';
import {
  BarChart3,
  Settings,
  Flame,
  Leaf,
  Droplets,
  Mountain,
  Zap,
  Activity,
  TrendingUp,
  TrendingDown,
  Circle,
  Square,
  Triangle,
  HelpCircle,
  Hexagon,
  Star,
  Heart,
  Shield,
  Target,
  Rocket,
  Gem
} from 'lucide-react';

import { DualColorTrendChart, MiniTrendChart } from './TrendCharts';

// 图标映射
const iconMap = {
  BarChart3,
  Settings,
  Flame,
  Leaf,
  Droplets,
  Mountain,
  Zap,
  Activity,
  TrendingUp,
  TrendingDown,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star,
  Heart,
  Shield,
  Target,
  Rocket,
  Gem
};

// 图标颜色映射
const iconColorMap = {
  BarChart3: 'text-blue-400',
  Settings: 'text-gray-400',
  Flame: 'text-red-400',
  Leaf: 'text-green-400',
  Droplets: 'text-cyan-400',
  Mountain: 'text-purple-400',
  Zap: 'text-yellow-400',
  Activity: 'text-pink-400',
  TrendingUp: 'text-emerald-400',
  TrendingDown: 'text-rose-400',
  Circle: 'text-indigo-400',
  Square: 'text-orange-400',
  Triangle: 'text-lime-400',
  Hexagon: 'text-violet-400',
  Star: 'text-amber-400',
  Heart: 'text-red-500',
  Shield: 'text-blue-500',
  Target: 'text-green-500',
  Rocket: 'text-purple-500',
  Gem: 'text-cyan-500'
};

// 通用表格列组件
const TableColumn = {
  Name: ({ width = 80 }: { width?: number }) => ({
    title: <span className="text-white text-sm whitespace-nowrap">名称</span>,
    dataIndex: 'name',
    key: 'name',
    width,
    render: (text: string, record: { icon: string }) => {
      const IconComponent = iconMap[record.icon as keyof typeof iconMap] || BarChart3;
      const iconColor = iconColorMap[record.icon as keyof typeof iconColorMap] || 'text-gray-400';

      return (
        <div className="flex items-center gap-1">
          <IconComponent className={`w-3 h-3 ${iconColor}`} />
          <span className="text-white text-xs whitespace-nowrap">{text}</span>
        </div>
      );
    }
  }),

  Change: ({ width = 70, isPositive = false }: { width?: number; isPositive?: boolean }) => ({
    title: <span className="text-white text-sm whitespace-nowrap">标的涨幅%</span>,
    dataIndex: 'change',
    key: 'change',
    width,
    render: (value: number) => (
      <span
        className={`text-xs whitespace-nowrap ${
          isPositive
            ? value >= 0
              ? 'text-green-400'
              : 'text-red-400'
            : value >= 0
              ? 'text-red-400'
              : 'text-green-400'
        }`}
      >
        {value >= 0 ? '+' : ''}
        {value}%
      </span>
    )
  }),

  VolChange: ({ width = 60 }: { width?: number }) => ({
    title: <span className="text-white text-sm whitespace-nowrap">隐波变化</span>,
    dataIndex: 'volChange',
    key: 'volChange',
    width,
    render: (value: number) => (
      <span className="text-red-400 text-xs whitespace-nowrap">{value}</span>
    )
  }),

  CurrentVol: ({ width = 70 }: { width?: number }) => ({
    title: (
      <span className="text-white text-sm whitespace-nowrap flex items-center gap-1">
        当月隐波
        <Tooltip
          color="white"
          title={
            <span className="text-black bg-white">
              实际波动率 (1个月滚动窗口)
              <br />
              选定过去一个月(22个交易日)滚动窗口，
              <br />
              标的资产的实际波动率。
              <br />
              该项指标反映标的资产的历史波动水平。
              <br />
            </span>
          }
        >
          <HelpCircle className="w-3 h-3 text-white" />
        </Tooltip>
      </span>
    ),
    dataIndex: 'currentVol',
    key: 'currentVol',
    width,
    render: (value: number) => <span className="text-white text-xs whitespace-nowrap">{value}</span>
  }),

  RealVol: ({ width = 60 }: { width?: number }) => ({
    title: (
      <span className="text-white text-sm whitespace-nowrap flex items-center gap-1">
        实波
        <Tooltip
          color="white"
          title={
            <span className="text-black bg-white">
              实际波动率 (1个月滚动窗口)
              <br />
              选定过去一个月(22个交易日)滚动窗口，
              <br />
              标的资产的实际波动率。
              <br />
              该项指标反映标的资产的历史波动水平。
              <br />
            </span>
          }
        >
          <HelpCircle className="w-3 h-3 text-white" />
        </Tooltip>
      </span>
    ),
    dataIndex: 'realVol',
    key: 'realVol',
    width,
    render: (value: number) => <span className="text-white text-xs whitespace-nowrap">{value}</span>
  }),

  Premium: ({ width = 60, color = 'red' }: { width?: number; color?: 'red' | 'green' }) => ({
    title: (
      <span className="text-white text-sm whitespace-nowrap flex items-center gap-1">
        溢价
        <Tooltip
          color="white"
          title={
            <span className="text-black bg-white">
              实际波动率 (1个月滚动窗口)
              <br />
              选定过去一个月(22个交易日)滚动窗口，
              <br />
              标的资产的实际波动率。
              <br />
              该项指标反映标的资产的历史波动水平。
              <br />
            </span>
          }
        >
          <HelpCircle className="w-3 h-3 text-white" />
        </Tooltip>
      </span>
    ),
    dataIndex: 'premium',
    key: 'premium',
    width,
    render: (value: number) => (
      <span
        className={`${color === 'red' ? 'text-red-400' : 'text-green-400'} text-xs whitespace-nowrap`}
      >
        {value}
      </span>
    )
  }),

  Preview: ({ width = 60, type = 'dual' }: { width?: number; type?: 'dual' | 'mini' }) => ({
    title: <span className="text-white text-sm whitespace-nowrap">分时预览</span>,
    key: 'preview',
    width,
    render: (_: unknown, record: { change?: number; trend?: 'up' | 'down' }) => {
      if (type === 'dual') {
        return <DualColorTrendChart isPositive={(record.change || 0) >= 0} />;
      }

      return <MiniTrendChart trend={record.trend || 'up'} />;
    }
  })
};

// 通用表格组件
const SummaryTable = ({
  dataSource,
  columns
}: {
  dataSource: Record<string, unknown>[];
  columns: Record<string, unknown>[];
}) => (
  <Table
    dataSource={dataSource}
    pagination={false}
    size="small"
    className="custom-table"
    rowKey="name"
    scroll={{ x: 'max-content' }}
    columns={columns}
  />
);

// 模拟数据
const mockData = {
  maxVolIncrease: [
    { name: 'LPG', change: -0.65, volChange: 3.99, trend: 'up' as const, icon: 'Zap' },
    { name: 'PVC', change: -0.69, volChange: 3.99, trend: 'up' as const, icon: 'Activity' },
    { name: '丁二烯', change: -0.81, volChange: 3.7, trend: 'up' as const, icon: 'TrendingUp' },
    { name: 'LPM', change: 1.6, volChange: 2.93, trend: 'down' as const, icon: 'Circle' },
    { name: '沪铜', change: -0.7, volChange: 2.76, trend: 'up' as const, icon: 'Square' }
  ],
  maxVolDecrease: [
    { name: '沪金', change: -5.29, volChange: -5.13, trend: 'down' as const, icon: 'Gem' },
    { name: '沪银', change: -4.18, volChange: -2.94, trend: 'down' as const, icon: 'Shield' },
    { name: '豆油', change: -0.8, volChange: -1.52, trend: 'down' as const, icon: 'Droplets' },
    {
      name: '丁二烯橡胶',
      change: -0.23,
      volChange: -1.46,
      trend: 'down' as const,
      icon: 'TrendingDown'
    },
    { name: '沪铜', change: -0.49, volChange: -1.27, trend: 'down' as const, icon: 'Target' }
  ],
  maxPremium: [
    { name: '碳酸锂', currentVol: 29.57, realVol: 19.19, premium: 10.38, icon: 'Flame' },
    { name: '红枣', currentVol: 31.55, realVol: 22.55, premium: 9.0, icon: 'Heart' },
    { name: '氧化铝', currentVol: 22.29, realVol: 14.9, premium: 7.39, icon: 'Settings' },
    { name: '苹果', currentVol: 23.15, realVol: 16.24, premium: 6.91, icon: 'Star' },
    { name: '双胶纸', currentVol: 12.81, realVol: 6.14, premium: 6.67, icon: 'Triangle' }
  ],
  minPremium: [
    { name: '生猪', currentVol: 18.5, realVol: 33.28, premium: -14.78, icon: 'Leaf' },
    { name: '鸡蛋', currentVol: 17.62, realVol: 26.22, premium: -8.6, icon: 'Hexagon' },
    { name: '工业硅', currentVol: 22.77, realVol: 29.47, premium: -6.7, icon: 'Rocket' },
    { name: 'LPG', currentVol: 15.68, realVol: 21.96, premium: -6.28, icon: 'Mountain' },
    { name: '沪铜', currentVol: 16.24, realVol: 22.24, premium: -6.0, icon: 'BarChart3' }
  ]
};

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      {/* 隐波最大上升 */}
      <div className="bg-[#1e2028] rounded-lg p-4">
        <h3 className="text-sm font-medium mb-4 text-white">
          隐波最大<span className="text-red-600">上升</span>
        </h3>
        <SummaryTable
          dataSource={mockData.maxVolIncrease}
          columns={[
            TableColumn.Name({}),
            TableColumn.Change({}),
            TableColumn.VolChange({}),
            TableColumn.Preview({ type: 'dual' })
          ]}
        />
      </div>

      {/* 隐波最大下降 */}
      <div className="bg-[#1e2028] rounded-lg p-4">
        <h3 className="text-sm font-medium mb-4 text-white">
          隐波最大<span className="text-green-400">下降</span>
        </h3>
        <SummaryTable
          dataSource={mockData.maxVolDecrease}
          columns={[
            TableColumn.Name({}),
            TableColumn.Change({ isPositive: true }),
            TableColumn.VolChange({}),
            TableColumn.Preview({ type: 'mini' })
          ]}
        />
      </div>

      {/* 波动率溢价最高 */}
      <div className="bg-[#1e2028] rounded-lg p-4">
        <h3 className="text-sm font-medium mb-4 text-white">
          波动率溢价<span className="text-red-600">最高</span>
        </h3>
        <SummaryTable
          dataSource={mockData.maxPremium}
          columns={[
            TableColumn.Name({}),
            TableColumn.CurrentVol({}),
            TableColumn.RealVol({}),
            TableColumn.Premium({ color: 'red' })
          ]}
        />
      </div>

      {/* 波动率溢价最低 */}
      <div className="bg-[#1e2028] rounded-lg p-4">
        <h3 className="text-sm font-medium mb-4 text-white">
          波动率溢价<span className="text-green-400">最低</span>
        </h3>
        <SummaryTable
          dataSource={mockData.minPremium}
          columns={[
            TableColumn.Name({}),
            TableColumn.CurrentVol({}),
            TableColumn.RealVol({}),
            TableColumn.Premium({ color: 'green' })
          ]}
        />
      </div>
    </div>
  );
};
