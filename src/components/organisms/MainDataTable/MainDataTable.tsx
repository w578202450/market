'use client';

import { mockData } from '@/data/mockData';
import { MarketData } from '@/types/market';
import { Table } from 'antd';
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Settings,
  Flame,
  Leaf,
  Droplets,
  Mountain,
  Radiation,
  HelpCircle
} from 'lucide-react';

// 图标映射
const iconMap = {
  leaf: Leaf,
  gear: Settings,
  flame: Flame,
  droplet: Droplets,
  mountain: Mountain,
  radiation: Radiation,
  chart: BarChart3
};

// 图标颜色映射
const iconColorMap = {
  leaf: 'text-green-400',
  gear: 'text-blue-400',
  flame: 'text-red-400',
  droplet: 'text-cyan-400',
  mountain: 'text-purple-400',
  radiation: 'text-yellow-400',
  chart: 'text-orange-400'
};

// 小型趋势图组件
const MiniTrendChart = ({ trend: _trend }: { trend: 'up' | 'down'; className?: string }) => {
  return (
    <svg
      width="100%"
      height="54"
      viewBox="0 0 120 54"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="areaGradient-o9s6kcw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef5350" stopOpacity="0.3"></stop>
          <stop offset="100%" stopColor="#ef5350" stopOpacity="0.05"></stop>
        </linearGradient>
      </defs>
      <path
        d="
        M 0,40
        L 0,4.651162790697676
        L 1.7241379310344827,9.302325581395348 L 3.4482758620689653,4.651162790697676 L 5.172413793103448,5.581395348837212 L 6.896551724137931,7.441860465116278 L 8.620689655172413,3.720930232558139 L 10.344827586206897,2.7906976744186025 L 12.068965517241379,7.441860465116278 L 13.793103448275861,8.372093023255815 L 15.517241379310345,13.02325581395349 L 17.241379310344826,16.744186046511626 L 18.96551724137931,8.372093023255815 L 20.689655172413794,13.02325581395349 L 22.413793103448274,10.232558139534884 L 24.137931034482758,12.093023255813954 L 25.86206896551724,10.232558139534884 L 27.586206896551722,15.813953488372093 L 29.310344827586206,22.325581395348838 L 31.03448275862069,20.46511627906977 L 32.758620689655174,32.55813953488372 L 34.48275862068965,33.48837209302326 L 36.206896551724135,39.06976744186046 L 37.93103448275862,37.2093023255814 L 39.6551724137931,31.627906976744185 L 41.37931034482759,34.41860465116279 L 41.724137931034484,40 L 43.44827586206897,31.627906976744185 L 45.17241379310345,32.55813953488372 L 46.896551724137936,40 L 48.62068965517241,39.06976744186046 L 50.3448275862069,33.48837209302326 L 52.06896551724138,29.767441860465116 L 53.793103448275865,30.69767441860465 L 55.51724137931035,32.55813953488372 L 57.241379310344826,33.48837209302326 L 58.96551724137931,23.25581395348837 L 60.6896551724138,19.53488372093023 L 62.41379310344827,18.6046511627907 L 64.13793103448275,18.6046511627907 L 65.86206896551724,8.372093023255815 L 67.58620689655172,12.093023255813954 L 69.65517241379311,12.093023255813954 L 71.37931034482759,13.95348837209302 L 73.10344827586208,18.6046511627907 L 74.82758620689656,15.813953488372093 L 76.55172413793105,13.95348837209302 L 78.27586206896551,17.674418604651162 L 80,14.883720930232556 L 81.72413793103448,14.883720930232556 L 83.44827586206897,13.02325581395349 L 85.17241379310344,12.093023255813954 L 86.89655172413794,11.16279069767442 L 88.62068965517241,0 L 90.6896551724138,0.9302325581395365 L 92.41379310344827,2.7906976744186025 L 94.13793103448275,1.860465116279066 L 95.86206896551724,5.581395348837212 L 97.58620689655172,4.651162790697676 L 99.3103448275862,18.6046511627907 L 101.03448275862068,14.883720930232556 L 102.75862068965517,9.302325581395348 L 104.48275862068965,1.860465116279066 L 106.20689655172414,4.651162790697676 L 107.93103448275862,0.9302325581395365 L 109.65517241379311,0 L 111.37931034482759,0 L 113.10344827586206,1.860465116279066 L 114.82758620689654,1.860465116279066 L 116.55172413793103,3.720930232558139 L 118.27586206896552,2.7906976744186025 L 120,5.581395348837212
        L 120,40
        Z
      "
        fill="url(#areaGradient-o9s6kcw)"
      ></path>
      <path
        d="M 0,4.651162790697676 L 1.7241379310344827,9.302325581395348 L 3.4482758620689653,4.651162790697676 L 5.172413793103448,5.581395348837212 L 6.896551724137931,7.441860465116278 L 8.620689655172413,3.720930232558139 L 10.344827586206897,2.7906976744186025 L 12.068965517241379,7.441860465116278 L 13.793103448275861,8.372093023255815 L 15.517241379310345,13.02325581395349 L 17.241379310344826,16.744186046511626 L 18.96551724137931,8.372093023255815 L 20.689655172413794,13.02325581395349 L 22.413793103448274,10.232558139534884 L 24.137931034482758,12.093023255813954 L 25.86206896551724,10.232558139534884 L 27.586206896551722,15.813953488372093 L 29.310344827586206,22.325581395348838 L 31.03448275862069,20.46511627906977 L 32.758620689655174,32.55813953488372 L 34.48275862068965,33.48837209302326 L 36.206896551724135,39.06976744186046 L 37.93103448275862,37.2093023255814 L 39.6551724137931,31.627906976744185 L 41.37931034482759,34.41860465116279 L 41.724137931034484,40 L 43.44827586206897,31.627906976744185 L 45.17241379310345,32.55813953488372 L 46.896551724137936,40 L 48.62068965517241,39.06976744186046 L 50.3448275862069,33.48837209302326 L 52.06896551724138,29.767441860465116 L 53.793103448275865,30.69767441860465 L 55.51724137931035,32.55813953488372 L 57.241379310344826,33.48837209302326 L 58.96551724137931,23.25581395348837 L 60.6896551724138,19.53488372093023 L 62.41379310344827,18.6046511627907 L 64.13793103448275,18.6046511627907 L 65.86206896551724,8.372093023255815 L 67.58620689655172,12.093023255813954 L 69.65517241379311,12.093023255813954 L 71.37931034482759,13.95348837209302 L 73.10344827586208,18.6046511627907 L 74.82758620689656,15.813953488372093 L 76.55172413793105,13.95348837209302 L 78.27586206896551,17.674418604651162 L 80,14.883720930232556 L 81.72413793103448,14.883720930232556 L 83.44827586206897,13.02325581395349 L 85.17241379310344,12.093023255813954 L 86.89655172413794,11.16279069767442 L 88.62068965517241,0 L 90.6896551724138,0.9302325581395365 L 92.41379310344827,2.7906976744186025 L 94.13793103448275,1.860465116279066 L 95.86206896551724,5.581395348837212 L 97.58620689655172,4.651162790697676 L 99.3103448275862,18.6046511627907 L 101.03448275862068,14.883720930232556 L 102.75862068965517,9.302325581395348 L 104.48275862068965,1.860465116279066 L 106.20689655172414,4.651162790697676 L 107.93103448275862,0.9302325581395365 L 109.65517241379311,0 L 111.37931034482759,0 L 113.10344827586206,1.860465116279066 L 114.82758620689654,1.860465116279066 L 116.55172413793103,3.720930232558139 L 118.27586206896552,2.7906976744186025 L 120,5.581395348837212"
        fill="none"
        stroke="#ef5350"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
      <path
        d="M 1.7241379310344827,32.55060728744938 L 3.4482758620689653,38.8663967611336 L 5.172413793103448,40 L 6.896551724137931,39.02834008097165 L 8.620689655172413,37.89473684210525 L 10.344827586206897,38.54251012145749 L 12.068965517241379,36.27530364372469 L 13.793103448275861,33.36032388663968 L 15.517241379310345,27.368421052631593 L 17.241379310344826,18.947368421052623 L 18.96551724137931,22.834008097165988 L 20.689655172413794,22.186234817813776 L 22.413793103448274,21.052631578947373 L 24.137931034482758,19.919028340080974 L 25.86206896551724,23.157894736842124 L 27.586206896551722,24.45344129554655 L 29.310344827586206,24.777327935222683 L 31.03448275862069,19.75708502024292 L 32.758620689655174,9.878542510121477 L 34.48275862068965,0 L 36.206896551724135,8.09716599190283 L 37.93103448275862,7.449392712550619 L 39.6551724137931,11.983805668016196 L 41.37931034482759,11.821862348178144 L 43.44827586206897,16.35627530364372 L 45.17241379310345,16.842105263157908 L 46.896551724137936,9.230769230769234 L 48.62068965517241,10.202429149797581 L 50.3448275862069,16.35627530364372 L 52.06896551724138,13.765182186234838 L 53.793103448275865,12.3076923076923 L 55.51724137931035,8.74493927125507 L 57.241379310344826,17.16599190283401 L 58.96551724137931,19.595141700404866 L 60.6896551724138,16.35627530364372 L 62.41379310344827,10.202429149797581 L 64.13793103448275,10.040485829959529 L 65.86206896551724,11.821862348178144 L 67.58620689655172,14.89878542510121 L 69.65517241379311,13.92712550607289 L 71.37931034482759,14.736842105263154 L 73.10344827586208,13.441295546558703 L 74.82758620689656,14.736842105263154 L 76.55172413793105,13.117408906882595 L 78.27586206896551,13.441295546558703 L 80,16.032388663967613 L 81.72413793103448,13.441295546558703 L 83.44827586206897,13.603238866396758 L 85.17241379310344,14.89878542510121 L 86.89655172413794,12.631578947368439 L 88.62068965517241,19.10931174089071 L 90.6896551724138,18.299595141700415 L 92.41379310344827,18.62348178137652 L 94.13793103448275,19.43319838056681 L 95.86206896551724,17.813765182186252 L 97.58620689655172,19.595141700404866 L 99.3103448275862,18.299595141700415 L 101.03448275862068,16.35627530364372 L 102.75862068965517,11.659919028340088 L 104.48275862068965,11.497975708502036 L 106.20689655172414,14.89878542510121 L 107.93103448275862,16.680161943319852 L 109.65517241379311,13.92712550607289 L 111.37931034482759,15.060728744939293 L 113.10344827586206,17.004048582995956 L 114.82758620689654,14.574898785425102 L 116.55172413793103,9.878542510121477 L 118.27586206896552,7.125506072874515 L 120,5.9919028340081155"
        fill="none"
        stroke="#a21caf"
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
      <text
        x="0"
        className="text-xs text-white"
        y="48"
        fill="white"
        fontSize="10"
        textAnchor="start"
      >
        21:00
      </text>
      <text
        x="120"
        className="text-xs text-white"
        y="48"
        fill="white"
        fontSize="10"
        textAnchor="end"
      >
        15:00
      </text>
    </svg>
  );
};

// 进度条组件
const ProgressBar = ({
  value,
  max = 100,
  className = ''
}: {
  value: number;
  max?: number;
  className?: string;
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`h-2 bg-gray-600 rounded-full ${className || 'w-20'}`}>
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
          background: 'linear-gradient(to right, rgb(193, 233, 108), rgb(249, 147, 160))'
        }}
      />
    </div>
  );
};

// 圆形进度组件
const CircularProgress = ({
  value,
  className = ''
}: {
  value: number;
  max?: number;
  className?: string;
}) => {
  // 计算圆点位置，沿着SVG path路径移动
  const getCirclePosition = (val: number) => {
    // 限制value在0-100范围内
    const clampedValue = Math.max(0, Math.min(100, val));

    // 定义path路径上的关键点（从底部到顶部）
    const pathPoints = [
      { x: 9.23, y: 54.62 }, // 起点（底部）
      { x: 14.55, y: 34.48 },
      { x: 17.7, y: 29.74 },
      { x: 34.2, y: 17.03 },
      { x: 39.59, y: 15.2 },
      { x: 60.41, y: 15.2 },
      { x: 65.8, y: 17.03 },
      { x: 82.3, y: 29.74 },
      { x: 85.45, y: 34.48 },
      { x: 90.77, y: 54.62 } // 终点（顶部）
    ];

    // 计算在路径上的位置
    const totalPoints = pathPoints.length - 1;
    const position = (clampedValue / 100) * totalPoints;
    const index = Math.floor(position);
    const fraction = position - index;

    // 如果到达最后一个点
    if (index >= totalPoints) {
      return pathPoints[totalPoints];
    }

    // 在两个点之间进行线性插值
    const currentPoint = pathPoints[index];
    const nextPoint = pathPoints[index + 1];

    const x = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction;
    const y = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction;

    return { x, y };
  };

  const circlePos = getCirclePosition(value);

  return (
    <div className={`relative w-20 h-10 ${className}`}>
      <svg className="w-20 h-10" viewBox="0 0 100 61.53846153846154">
        <path
          d="M 9.229999999999999 54.61538461538461 A 40.77 40.77 0 0 1 14.549999999999999 34.480000000000004"
          fill="none"
          stroke="#16C784"
          strokeLinecap="round"
          strokeWidth="4.62"
        ></path>
        <path
          d="M 17.7 29.74153846153846 A 40.77 40.77 0 0 1 34.2 17.033846153846152"
          fill="none"
          stroke="#93D900"
          strokeLinecap="round"
          strokeWidth="4.62"
        ></path>
        <path
          d="M 39.589999999999996 15.200000000000001 A 40.77 40.77 0 0 1 60.41 15.200000000000001"
          fill="none"
          stroke="#F3D42F"
          strokeLinecap="round"
          strokeWidth="4.62"
        ></path>
        <path
          d="M 65.8 17.033846153846152 A 40.77 40.77 0 0 1 82.3 29.74153846153846"
          fill="none"
          stroke="#EA8C00"
          strokeLinecap="round"
          strokeWidth="4.62"
        ></path>
        <path
          d="M 85.45 34.480000000000004 A 40.77 40.77 0 0 1 90.77 54.61538461538461"
          fill="none"
          stroke="#EA3943"
          strokeLinecap="round"
          strokeWidth="4.62"
        ></path>
        <circle
          cx={circlePos.x}
          cy={circlePos.y}
          fill="none"
          r="4.62"
          stroke="white"
          strokeWidth="1.54"
        ></circle>
        <circle cx={circlePos.x} cy={circlePos.y} fill="black" r="3.85"></circle>
      </svg>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-white">
        {value}
      </span>
    </div>
  );
};

export const MainDataTable = () => {
  const columns = [
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          名称
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      sorter: (a: MarketData, b: MarketData) => a.name.localeCompare(b.name),
      filters: [
        {
          text: '白糖',
          value: 'Joe'
        },
        {
          text: '苹果',
          value: 'Jim'
        },
        {
          text: '铝',
          value: '铝'
        },
        {
          text: '橡胶',
          value: '橡胶'
        },
        {
          text: '豆粕',
          value: '豆粕'
        }
      ],
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: (text: string, record: MarketData) => {
        const IconComponent = iconMap[record.icon as keyof typeof iconMap] || Settings;
        const iconColor = iconColorMap[record.icon as keyof typeof iconColorMap] || 'text-gray-400';

        return (
          <div className="flex items-center gap-2">
            <IconComponent className={`w-4 h-4 ${iconColor}`} />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-white text-sm">{text}</span>
                {record.isMain && (
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-gray-600 text-xs font-medium rounded-sm">
                    主
                  </span>
                )}
              </div>
              <span className="text-gray-400 text-xs">{record.code}</span>
            </div>
          </div>
        );
      }
    },
    {
      title: <div className="flex items-center gap-1 text-sm text-white">最新价</div>,
      dataIndex: 'price',
      key: 'price',
      sorter: (a: MarketData, b: MarketData) => a.price - b.price,
      render: (value: number, record: MarketData) => (
        <div className="flex items-center gap-1">
          <span className="text-white">{value.toLocaleString()}</span>
          {record.priceChange === 'up' ? (
            <TrendingUp className="w-3 h-3 text-green-400" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-400" />
          )}
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          标的涨幅%
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'targetChange',
      key: 'targetChange',
      sorter: (a: MarketData, b: MarketData) => a.targetChange - b.targetChange,
      render: (value: number) => (
        <span className={value >= 0 ? 'text-red-400' : 'text-green-400'}>
          {value >= 0 ? '+' : ''}
          {value}%
        </span>
      )
    },
    {
      title: <div className="flex items-center gap-1 text-sm text-white">剩余时间</div>,
      dataIndex: 'remainingDays',
      key: 'remainingDays',
      sorter: (a: MarketData, b: MarketData) => a.remainingDays - b.remainingDays,
      render: (value: number) => <span className="text-white">{value}天</span>
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          当月隐波
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'currentVol',
      key: 'currentVol',
      sorter: (a: MarketData, b: MarketData) => a.currentVol - b.currentVol,
      render: (value: number) => <span className="text-white">{value}</span>
    },
    {
      title: <div className="flex items-center gap-1 text-sm text-white">隐波变化</div>,
      dataIndex: 'volChange',
      key: 'volChange',
      sorter: (a: MarketData, b: MarketData) => a.volChange - b.volChange,
      render: (value: number) => (
        <span className={value >= 0 ? 'text-red-400' : 'text-green-400'}>
          {value >= 0 ? '+' : ''}
          {value}
        </span>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">隐波涨速</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'volSpeed',
      key: 'volSpeed',
      sorter: (a: MarketData, b: MarketData) => a.volSpeed - b.volSpeed,
      render: (value: number) => (
        <span className={value >= 0 ? 'text-red-400' : 'text-green-400'}>
          {value >= 0 ? '+' : ''}
          {value}
        </span>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">实波</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'realVol',
      key: 'realVol',
      sorter: (a: MarketData, b: MarketData) => a.realVol - b.realVol,
      render: (value: number) => <span className="text-white">{value}</span>
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">溢价</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'premium',
      key: 'premium',
      sorter: (a: MarketData, b: MarketData) => a.premium - b.premium,
      render: (value: number) => (
        <span className={value >= 0 ? 'text-red-400' : 'text-green-400'}>
          {value >= 0 ? '+' : ''}
          {value}
        </span>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">当月偏度</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'skewness',
      key: 'skewness',
      sorter: (a: MarketData, b: MarketData) => a.skewness - b.skewness,
      render: (value: number) => (
        <span className={value >= 0 ? 'text-white' : 'text-red-400'}>
          {value >= 0 ? '+' : ''}
          {value}
        </span>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">隐波百分位</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'volPercentile',
      key: 'volPercentile',
      sorter: (a: MarketData, b: MarketData) => a.volPercentile - b.volPercentile,
      render: (value: number) => (
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1">
            <ProgressBar value={value} className="w-full" />
          </div>
          <span className="text-white text-sm whitespace-nowrap">{value}%</span>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 text-sm text-white">
          <div className="flex items-center gap-1 text-sm">偏度百分位</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      dataIndex: 'skewPercentile',
      key: 'skewPercentile',
      sorter: (a: MarketData, b: MarketData) => a.skewPercentile - b.skewPercentile,
      render: (value: number) => <CircularProgress value={value} />
    },
    {
      title: (
        <div className="flex items-center gap-1 justify-center text-sm text-white">
          <div className="flex items-center gap-1 text-sm">走势预览</div>
          <HelpCircle className="w-3 h-3 text-gray-500" />
        </div>
      ),
      align: 'center' as const,
      key: 'trend',
      render: (record: MarketData) => (
        <div className="flex items-center gap-1">
          <MiniTrendChart trend={record.trend} />
        </div>
      )
    }
  ];

  return (
    <div className="rounded-lg overflow-hidden">
      <Table
        dataSource={mockData.tableData}
        columns={columns}
        pagination={false}
        size="small"
        className="custom-table"
        rowKey="code"
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};
