initSidebarItems({"constant":[["DEFAULT_DOT_OPTIONS","constant for dot options `pub const DEFAULT_DOT_OPTIONS: &str = \"bgcolor=\\\"transparent\\\";\\n\\tfontsize=50;\\n\\t\\         node [shape=ellipse, penwidth=1, \\         fontname=\\\"Courier\\\", pin=true ];\\n\\tsplines=true;\";`"]],"enum":[["GraphErrors","Error messages"]],"struct":[["Bfs","Breadth first search Iterator with index and depth of corresponding nodes * iterator returns tuple: `(index, node, depth)`"],["Dfs","Depth first search Iterator"],["DfsWithIndex","Depth first search Iterator with index of corresponding nodes"],["Graph","Contains the topology and implements functions for analyzing topology used for graph ensembles # Example: A graph, where each node stores a phase ``` use net_ensembles::{Node,Graph}; use std::fs::File; use std::io::prelude::*; // define your own vertices, if you need to store extra information at each vertex #[derive(Debug, Clone)] pub struct PhaseNode {phase: f64,}"],["NodeContainer","Used for accessing neighbor information from graph Contains Adjacency list  and internal id. Normally the index in the graph."]]});