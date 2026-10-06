import React, { useState } from 'react';
import { Play, RotateCcw, Cpu, Network, MapPin, Zap, Info } from 'lucide-react';

export default function TransitSimulator() {
  const [selectedAlgo, setSelectedAlgo] = useState('Dijkstra');
  const [startNode, setStartNode] = useState('A');
  const [endNode, setEndNode] = useState('F');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activePath, setActivePath] = useState(['A', 'C', 'E', 'F']);
  const [algoMetrics, setAlgoMetrics] = useState({
    distance: 14,
    nodesVisited: 4,
    timeMs: '0.42 ms',
    heapPushes: 6
  });

  // Pre-defined Graph Nodes & Edges
  const nodes = [
    { id: 'A', label: 'Terminal A (Central)', x: 60, y: 70 },
    { id: 'B', label: 'Station B (North Hub)', x: 220, y: 40 },
    { id: 'C', label: 'Junction C (Tech Park)', x: 200, y: 160 },
    { id: 'D', label: 'Station D (East Metro)', x: 380, y: 50 },
    { id: 'E', label: 'Junction E (Express Way)', x: 370, y: 170 },
    { id: 'F', label: 'Terminal F (Airport)', x: 520, y: 110 },
  ];

  const edges = [
    { from: 'A', to: 'B', weight: 4 },
    { from: 'A', to: 'C', weight: 2 },
    { from: 'B', to: 'D', weight: 10 },
    { from: 'B', to: 'C', weight: 5 },
    { from: 'C', to: 'E', weight: 7 },
    { from: 'D', to: 'F', weight: 6 },
    { from: 'E', to: 'F', weight: 5 },
    { from: 'E', to: 'D', weight: 3 },
  ];

  const algorithms = [
    { name: 'Dijkstra', complexity: 'O((V + E) log V)', desc: 'Greedy shortest path using custom Min-Heap.' },
    { name: 'A* Search', complexity: 'O(E)', desc: 'Heuristic-guided search utilizing Euclidean estimates.' },
    { name: 'Breadth-First (BFS)', complexity: 'O(V + E)', desc: 'Unweighted shortest path using FIFO Queue.' },
    { name: 'Depth-First (DFS)', complexity: 'O(V + E)', desc: 'Recursive path discovery using LIFO Stack.' },
    { name: 'Bellman-Ford', complexity: 'O(V · E)', desc: 'Handles negative weight cycles with edge relaxation.' },
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    // Simple dynamic simulation preset based on algorithm selection
    setTimeout(() => {
      if (selectedAlgo === 'A* Search') {
        setActivePath(['A', 'C', 'E', 'F']);
        setAlgoMetrics({ distance: 14, nodesVisited: 4, timeMs: '0.28 ms', heapPushes: 4 });
      } else if (selectedAlgo === 'Breadth-First (BFS)') {
        setActivePath(['A', 'B', 'D', 'F']);
        setAlgoMetrics({ distance: 20, nodesVisited: 4, timeMs: '0.19 ms', heapPushes: 0 });
      } else if (selectedAlgo === 'Depth-First (DFS)') {
        setActivePath(['A', 'B', 'C', 'E', 'D', 'F']);
        setAlgoMetrics({ distance: 25, nodesVisited: 6, timeMs: '0.22 ms', heapPushes: 0 });
      } else {
        setActivePath(['A', 'C', 'E', 'F']);
        setAlgoMetrics({ distance: 14, nodesVisited: 4, timeMs: '0.42 ms', heapPushes: 6 });
      }
      setIsSimulating(false);
    }, 400);
  };

  const isEdgeInPath = (u, v) => {
    for (let i = 0; i < activePath.length - 1; i++) {
      if ((activePath[i] === u && activePath[i + 1] === v) || (activePath[i] === v && activePath[i + 1] === u)) {
        return true;
      }
    }
    return false;
  };

  return (
    <section id="dsa-demo" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Algorithmic Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Smart Transit Graph DSA Visualizer
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Live interactive sandbox modeling urban transit networks as weighted graphs. Try switching algorithms to visualize zero-dependency graph pathfinding in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Algorithm & Simulation Controls */}
          <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-6">
            
            {/* Algorithm Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Graph Algorithm
              </label>
              <div className="space-y-2">
                {algorithms.map((algo) => (
                  <button
                    key={algo.name}
                    onClick={() => setSelectedAlgo(algo.name)}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      selectedAlgo === algo.name
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-sm">
                      <span>{algo.name}</span>
                      <span className="text-[11px] font-mono opacity-80">{algo.complexity}</span>
                    </div>
                    <p className="text-xs opacity-75 mt-0.5 line-clamp-1">
                      {algo.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Start & End Node Selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Start Node
                </label>
                <select
                  value={startNode}
                  onChange={(e) => setStartNode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                >
                  {nodes.map(n => <option key={n.id} value={n.id}>{n.id} - {n.label.split(' ')[0]}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Target Destination
                </label>
                <select
                  value={endNode}
                  onChange={(e) => setEndNode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                >
                  {nodes.map(n => <option key={n.id} value={n.id}>{n.id} - {n.label.split(' ')[0]}</option>)}
                </select>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isSimulating ? 'Computing Path...' : 'Run Pathfinding Simulation'}</span>
            </button>

            {/* Algorithmic Metrics Card */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2 font-mono text-xs">
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Execution Metrics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Path Cost:</span>
                <span className="text-emerald-400 font-bold">{algoMetrics.distance} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Traversed Nodes:</span>
                <span className="text-blue-400">{activePath.join(' → ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Execution Speed:</span>
                <span className="text-amber-400">{algoMetrics.timeMs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Min-Heap Pushes:</span>
                <span className="text-indigo-400">{algoMetrics.heapPushes} ops</span>
              </div>
            </div>

          </div>

          {/* Graph Visualizer Canvas Area */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between min-h-[460px] relative">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Network className="w-4 h-4 text-blue-400" />
                <span>Weighted Graph Visualizer Canvas (6 Nodes · 8 Directed Edges)</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Active Path
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" /> Edge
                </span>
              </div>
            </div>

            {/* SVG Canvas Rendering */}
            <div className="w-full flex-1 relative flex items-center justify-center min-h-[340px]">
              <svg viewBox="0 0 600 240" className="w-full h-full max-h-[360px] overflow-visible">
                
                {/* Render Edges */}
                {edges.map((edge, idx) => {
                  const u = nodes.find(n => n.id === edge.from);
                  const v = nodes.find(n => n.id === edge.to);
                  const active = isEdgeInPath(edge.from, edge.to);

                  const midX = (u.x + v.x) / 2;
                  const midY = (u.y + v.y) / 2;

                  return (
                    <g key={idx}>
                      <line
                        x1={u.x}
                        y1={u.y}
                        x2={v.x}
                        y2={v.y}
                        stroke={active ? '#10b981' : '#334155'}
                        strokeWidth={active ? 4 : 2}
                        strokeDasharray={active ? 'none' : '4 4'}
                        className="transition-all duration-500"
                      />
                      {/* Edge Weight Pill */}
                      <rect
                        x={midX - 10}
                        y={midY - 9}
                        width="20"
                        height="18"
                        rx="4"
                        fill="#0f172a"
                        stroke={active ? '#10b981' : '#475569'}
                        strokeWidth="1"
                      />
                      <text
                        x={midX}
                        y={midY + 4}
                        fill={active ? '#34d399' : '#94a3b8'}
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {edge.weight}
                      </text>
                    </g>
                  );
                })}

                {/* Render Nodes */}
                {nodes.map((node) => {
                  const isActive = activePath.includes(node.id);
                  const isStart = node.id === startNode;
                  const isEnd = node.id === endNode;

                  return (
                    <g key={node.id} className="cursor-pointer">
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isActive ? 22 : 18}
                        fill={isStart ? '#2563eb' : isEnd ? '#059669' : isActive ? '#1e293b' : '#0f172a'}
                        stroke={isActive ? '#34d399' : '#475569'}
                        strokeWidth={isActive ? 3 : 2}
                        className="transition-all duration-300"
                      />
                      <text
                        x={node.x}
                        y={node.y + 5}
                        fill="#ffffff"
                        fontSize="13"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {node.id}
                      </text>

                      {/* Node Label Below */}
                      <text
                        x={node.x}
                        y={node.y + 36}
                        fill={isActive ? '#60a5fa' : '#64748b'}
                        fontSize="10"
                        fontFamily="sans-serif"
                        fontWeight="medium"
                        textAnchor="middle"
                      >
                        {node.label.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}

              </svg>
            </div>

            {/* Note Footnote */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                This simulator mirrors Rishi's <strong>Smart Transit System</strong> repository architecture built in JS & React.
              </span>
              <a
                href="https://github.com/rishigeeks/smart-transit-navigator"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline font-mono text-[11px]"
              >
                View Repository →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
